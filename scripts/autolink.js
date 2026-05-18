const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, '_site');
const GLOSSARY_PATH = path.join(ROOT, 'data', 'glossary.json');

const EXCLUDED_ROOTS = new Set(['.git', '.github', '_site', 'data', 'node_modules', 'scripts', 'templates']);
const EXCLUDED_FILES = new Set(['AGENTS.md', 'README.md', 'package-lock.json', 'package.json']);
const SKIP_TAGS = new Set(['button', 'code', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'nav', 'option', 'pre', 'script', 'select', 'style', 'textarea', 'title']);

function cleanOutput() { fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true }); }
function shouldSkipCopy(name, fullPath) { const rel = path.relative(ROOT, fullPath).split(path.sep)[0]; return EXCLUDED_ROOTS.has(rel) || EXCLUDED_FILES.has(name); }
function copySite(src, dest) { for (const entry of fs.readdirSync(src, { withFileTypes: true })) { const srcPath = path.join(src, entry.name); if (shouldSkipCopy(entry.name, srcPath)) continue; const destPath = path.join(dest, entry.name); if (entry.isDirectory()) { fs.mkdirSync(destPath, { recursive: true }); copySite(srcPath, destPath); } else if (entry.isFile()) fs.copyFileSync(srcPath, destPath); } }
function walkHtmlFiles(dir, files = []) { for (const entry of fs.readdirSync(dir, { withFileTypes: true })) { const fullPath = path.join(dir, entry.name); if (entry.isDirectory()) walkHtmlFiles(fullPath, files); else if (entry.isFile() && entry.name.endsWith('.html')) files.push(fullPath); } return files; }
function escapeRegex(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function htmlEscape(value) { return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

function loadTerms() {
  const glossary = JSON.parse(fs.readFileSync(GLOSSARY_PATH, 'utf8'));
  const terms = [];
  for (const entity of glossary.entities || []) {
    const names = [entity.name, ...(entity.aliases || [])].filter(Boolean).map((name) => name.trim()).filter(Boolean);
    for (const name of names) terms.push({ entityName: entity.name, term: name, url: entity.url.replace(/^\//, ''), pronunciation: entity.pronunciation || null });
  }
  return terms.sort((a, b) => b.term.length - a.term.length || a.term.localeCompare(b.term));
}

function relativeHref(fromFile, targetUrl) { const fromDir = path.dirname(path.relative(OUT, fromFile)); let href = path.posix.relative(fromDir.split(path.sep).join('/'), targetUrl); if (!href.startsWith('.')) href = `./${href}`; return href; }
function buildLink(href, text, pronunciation) { if (!pronunciation) return `<a href="${href}">${text}</a>`; return `<a class="pronounce" href="${href}" data-pronunciation="${htmlEscape(pronunciation)}">${text}</a>`; }

function addPronunciationToExistingLink(tag, term) {
  if (!term.pronunciation || /class\s*=|data-pronunciation\s*=/.test(tag)) return tag;
  const classed = tag.replace(/^<a\b/i, '<a class="pronounce"');
  return classed.replace(/>$/, ` data-pronunciation="${htmlEscape(term.pronunciation)}">`);
}

function linkText(text, terms, currentPage) {
  let result = text;
  const linkedInThisTextNode = new Set();
  for (const term of terms) {
    if (linkedInThisTextNode.has(term.entityName)) continue;
    if (currentPage.relativePath === term.url) continue;
    const pattern = new RegExp(`(^|[^A-Za-z0-9])(${escapeRegex(term.term)})(?=$|[^A-Za-z0-9])`, 'i');
    const match = result.match(pattern);
    if (!match) continue;
    const href = htmlEscape(relativeHref(currentPage.absolutePath, term.url));
    result = result.replace(pattern, `${match[1]}${buildLink(href, match[2], term.pronunciation)}`);
    linkedInThisTextNode.add(term.entityName);
  }
  return result;
}

function autolinkHtml(html, filePath, terms) {
  const mainMatch = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i);
  if (!mainMatch) return html;
  const currentRelative = path.relative(OUT, filePath).split(path.sep).join('/');
  const currentPage = { absolutePath: filePath, relativePath: currentRelative };
  const main = mainMatch[0];
  const parts = main.split(/(<[^>]+>)/g);
  const skipStack = [];
  let processed = '';
  let currentAnchorPronunciationTerm = null;

  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith('<')) {
      const closing = part.match(/^<\s*\/\s*([a-zA-Z0-9-]+)/);
      const opening = part.match(/^<\s*([a-zA-Z0-9-]+)/);
      if (closing) {
        const tag = closing[1].toLowerCase();
        if (tag === 'a') currentAnchorPronunciationTerm = null;
        const last = skipStack.lastIndexOf(tag);
        if (last !== -1) skipStack.splice(last, 1);
        processed += part;
      } else if (opening) {
        const tag = opening[1].toLowerCase();
        const isSelfClosing = /\/\s*>$/.test(part);
        if (tag === 'a') {
          currentAnchorPronunciationTerm = null;
          processed += part;
        } else {
          if (SKIP_TAGS.has(tag) && !isSelfClosing) skipStack.push(tag);
          processed += part;
        }
      } else processed += part;
    } else if (skipStack.length > 0) processed += part;
    else processed += linkText(part, terms, currentPage);
  }
  return html.replace(main, processed);
}

function writeNoJekyll() { fs.writeFileSync(path.join(OUT, '.nojekyll'), ''); }
function main() { cleanOutput(); copySite(ROOT, OUT); writeNoJekyll(); const terms = loadTerms(); const htmlFiles = walkHtmlFiles(OUT); for (const file of htmlFiles) { const html = fs.readFileSync(file, 'utf8'); const linked = autolinkHtml(html, file, terms); fs.writeFileSync(file, linked); } console.log(`Built ${path.relative(ROOT, OUT)} with glossary autolinks across ${htmlFiles.length} HTML files.`); }
main();
