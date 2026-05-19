# Public Wiki Workflow

- Public-facing canon belongs in this repository.
- New named places, cities, regions, peoples, groups, or major concepts should receive at least a placeholder page when introduced as public canon.
- Add public canon entities with pages to `/data/glossary.json` so the deployment build can autolink them across content pages.
- The live GitHub Pages site is generated into `_site` by `scripts/autolink.js` during deployment; do not edit `_site` directly.
- All references to public canon entities should link to their page wherever practical. Routine cross-page linking may be handled by the glossary autolinker; intentional/source links may still be added directly in HTML.
- Prefer updating adjacent index/list pages and cross-references in the same change.
- Keep placeholder pages concise and marked as awaiting fuller canon.
- Media for public wiki pages belongs in `/media`; use descriptive filenames when possible.
- Preserve the writer's wording and avoid adding lore beyond approved canon.
- Page hierarchy should distinguish regions from places. For both Delmara and Eadria, organize broad geographic regions above individual cities, settlements, ruins, and other places.
- Use Delmara for the northern/upper world region and Eadria for the southern/lower world region. Do not use “the Land Above,” “the Land Below,” “Lands Above,” or “Lands Below” except for the single explanatory description on the Geography page.
- When creating or editing public pages, version local CSS, JS, and media URLs with a Unix timestamp cache key using `?v=<unix-timestamp>` so mobile/browser caches refresh reliably during frequent same-day edits.

## Site Layout Standards

- For standard page feature images, use `<img class="hero-image" ...>` unless the user explicitly requests a different layout.
- Standard feature images should be wide landscape, ideally 16:9.
- Preferred source size for generated feature art is 1792 × 1024 or equivalent widescreen landscape, then crop or display safely for 16:9 page usage as needed.
- Keep the main subject and important symbols away from the extreme edges so responsive cropping does not cut them off.
- Do not introduce new image wrapper classes for routine feature images unless also adding shared CSS and applying it consistently.
- Before adding or adjusting page images, check nearby established pages and reuse the existing pattern.
- Keep visual changes consistent across the wiki; avoid one-off layout decisions.
- Pronunciation helpers should be used only on page titles for the term’s own page, using `<span class="pronounce" data-pronunciation="...">Name</span>` inside the page title. Do not add pronunciation helpers through the autolinker, navigation, buttons, inline links, or body text.

## Illustration Direction

- Favor an oil-painting / traditional painted look rather than glossy digital fantasy art.
- Aim for medieval, grounded, believable construction, clothing, armor, and landscapes.
- Default to landscape-oriented compositions unless another orientation is specifically requested.
- For wiki feature photos, use wide landscape / 16:9 framing unless the user specifically asks otherwise.
- Avoid obvious AI-pattern density, excessive ornament, impossible architecture, and cluttered detailing.
- Composition should be cinematic but readable, often wide-angle when useful, with strong practical pathways, geography, and spatial logic.
- Use restrained fantasy: wonder should feel ancient, natural, sacred, or historical rather than flashy.
- For Eadrian civilization scenes, prefer practical lived-in medieval design over high-fantasy spectacle.
- Do not use flags, banners, or insignia in ways that imply territorial ownership unless that is canonically intended.
- When generating emblems, insignia, banners, armor markings, or symbolic motifs, account for the associated pantheons, groups, peoples, regions, and political relationships already established in canon.
- Avoid generic symbols when a canon-linked symbol exists; avoid introducing symbols that imply false allegiance, ownership, worship, or political control.

## Depicting the Keepers of Volelia

- Keepers should read as noble, humble protectors of life rather than conquerors, mercenaries, or wealthy lords.
- Their visual tone should emphasize mercy, hospitality, courage, remembrance, and the preservation of life.
- Sunlight, dawn, warm light, flowers, rescued civilians, and acts of gentleness are fitting motifs.
- Their insignia always references the light of the sun, but should not be placed on local flags or banners unless the Keepers canonically hold that place.
- Their armor is modest engraved steel, not ostentatious noble armor.
- Blue mineral and warm bronze/brass inlays may be used sparingly, but the overall read should remain humble, practical, and protective.
- The armor's beauty represents devotion to portraying the beauty of life, not riches, status, or worldly success.
- Engravings should feel meaningful: names of the fallen, remembered lives, vows, flowers, sunbursts, roads, tears, rivers, and scenes of mercy.
- Each Keeper's armor may reflect their own hand and character: severe, martial, graceful, natural, masculine, feminine, radiant, or austere.
- Avoid lions or generic royal/imperial motifs unless explicitly requested.
- Avoid making them look ostentatiously rich. Their beauty should come from patient craft, humility, and remembrance.
- Roulant and his Keepers may be depicted as defenders of the vulnerable, especially in scenes of evacuation, rescue, and defiance of armies for the sake of civilians.
