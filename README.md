# Eadria Wiki

A public static wiki for the world of **Eadria**, hosted with GitHub Pages.

## GitHub Pages setup

This repository is structured so it can be published directly from the `main` branch using GitHub Pages.

Recommended settings:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch: `main`.
4. Select folder: `/ (root)`.
5. Save.

The site entry point is `index.html`.

## Structure

```text
/
  index.html                 # Home page
  style.css                  # Shared site styling
  .nojekyll                  # Prevents Jekyll processing
  data/
    glossary.json            # Structured public terms
  regions/
    known-eadria.html        # World/region overview
    delmara.html             # Delmara region page
    icena-lake.html          # Icena lake region page
  peoples/
    icena.html               # Icena people page
  assets/
    images/                  # Public images and maps
```

## Publishing notes

- Keep this repository public-facing only.
- Do not place private drafts, API keys, tokens, or agent credentials here.
- Use relative links so the site works under `https://graysenrowland.github.io/eadria/`.
