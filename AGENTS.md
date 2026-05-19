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
- Standard feature images should be wide landscape and should fit the wiki feature-frame crop used on content pages.
- Preferred source size for generated feature art is 1792 × 1024 or equivalent widescreen landscape, composed with enough safe margin to crop cleanly into the displayed feature frame, which may appear wider than 16:9 depending on page width.
- For creature and object feature images, keep the full subject readable after a wide page crop: center the subject, avoid placing the face or important details near the top, bottom, or extreme sides, and leave atmospheric negative space around it.
- Keep the main subject and important symbols away from the extreme edges so responsive cropping does not cut them off.
- Do not introduce new image wrapper classes for routine feature images unless also adding shared CSS and applying it consistently.
- Before adding or adjusting page images, check nearby established pages and reuse the existing pattern.
- Keep visual changes consistent across the wiki; avoid one-off layout decisions.
- Pronunciation helpers should be used only on page titles for the term’s own page, using `<span class="pronounce" data-pronunciation="...">Name</span>` inside the page title. Do not add pronunciation helpers through the autolinker, navigation, buttons, inline links, or body text.

## Illustration Direction

- For any request to generate Eadria artwork, an illustration, a feature image, a creature image, character art, concept art, or a scene, automatically apply the Image Prompt Baseline and Avoid list below unless the user explicitly overrides them.
- Generated Eadria artwork should depict only the requested subject or scene, not a webpage, UI mockup, card layout, spec sheet, infographic, labeled reference sheet, menu, sidebar, typography sample, or bestiary page unless the user specifically asks for one.
- When the user says “use the repo guidance,” “use AGENTS.md,” or refers to existing Eadria image preferences, restate the Image Prompt Baseline into the image prompt rather than relying on the image tool to infer it.
- Favor painterly storybook realism: hand-painted illustrative fantasy that feels believable but clearly not photographic.
- The house style should feel like a serious illustrated chronicle or storybook plate, not a game loading screen, movie still, or polished digital concept-art render.
- Images should leave some visual mystery. Important forms should be readable, but faces, eyes, cloth, stone, armor, trees, architecture, and distant figures should often be suggested through brushwork rather than fully resolved.
- Prefer visible brush texture, softened edges, expressive but not hyperreal eyes, natural color, atmospheric depth, and serious historical-archive illustration energy.
- Keep large scenes visually simplified: use clear silhouette masses, fewer tiny architectural elements, less micro-detail, and stronger atmosphere rather than dense rendered complexity.
- Do not default to brown, sepia, gray, or drab earth tones. Let each subject keep a distinct color identity: lake blues, forest greens, mineral blues, candle-gold, sea-glass tones, snow light, deep crimson, harvest colors, etc.
- Use selective focal color to guide the eye: one or two memorable colors may anchor the main subject, shield, garment, water, firelight, symbol, or sacred object while the surrounding scene remains atmospheric.
- Colors may be rich, memorable, and regionally expressive while remaining natural, painterly, grounded, and non-glossy.
- Avoid photorealism, camera-like depth of field, glossy digital rendering, hyper-detailed faces, visible pores, over-sharp eyes, over-resolved textures, ultra-detailed cityscapes, intricate fantasy megacity design, and AAA concept-art polish.
- Aim for medieval, grounded, believable construction, clothing, armor, and landscapes.
- Default to landscape-oriented compositions unless another orientation is specifically requested.
- For wiki feature photos, use wide landscape framing suitable for the live feature-image crop unless the user specifically asks otherwise.
- Avoid obvious AI-pattern density, excessive ornament, impossible architecture, and cluttered detailing.
- Composition should be readable and atmospheric, with strong practical pathways, geography, and spatial logic. Avoid making every piece feel like an epic action poster.
- Use restrained fantasy: wonder should feel ancient, natural, sacred, or historical rather than flashy.
- For Eadrian civilization scenes, prefer practical lived-in medieval design over high-fantasy spectacle.
- Do not use flags, banners, standards, pennants, hanging emblems, or insignia as decorative filler. Include them only when the user asks for them or when a canonically appropriate group, realm, army, temple, ship, fortress, or ceremonial setting would realistically display them.
- Do not add banners to rural villages, wilderness paths, ruins, village outskirts, Icena settlements, or ordinary roads unless the banner itself is specifically meaningful and approved.
- When symbols are appropriate, prefer practical placement on shields, carved lintels, armor engravings, signboards, seals, ritual objects, or worn everyday objects rather than random hanging flags.
- When generating emblems, insignia, banners, armor markings, or symbolic motifs, account for the associated pantheons, groups, peoples, regions, and political relationships already established in canon.
- Avoid generic symbols when a canon-linked symbol exists; avoid introducing symbols that imply false allegiance, ownership, worship, or political control.

## Image Prompt Baseline

Use this baseline direction for new Eadria artwork unless the user requests otherwise:

> Hand-painted fantasy illustration, painterly storybook realism, serious illustrated chronicle, suggestive brushwork, softened facial details, expressive but not hyperreal eyes, atmospheric edges, rich but natural subject-specific color, selective focal color guiding the eye, grounded medieval design, readable forms, simplified silhouette masses, restrained detail, leaves some things to the imagination, wide landscape composition suitable for the wiki feature-image crop, generated around 1792 × 1024 or equivalent with safe margins for a wider displayed crop.

Avoid by default:

> photorealistic, hyperrealistic, glossy digital art, cinematic still, realistic eyes, detailed pores, camera depth of field, ultra-sharp, over-rendered faces, over-resolved textures, ultra-detailed cityscape, intricate fantasy megacity, AAA game concept art, game loading screen, epic action poster, default sepia palette, drab brown sameness, excessive ornament, impossible architecture, cluttered detailing, decorative flags, random banners, generic heraldry, meaningless hanging emblems, webpage, UI mockup, card layout, spec sheet, infographic, labeled reference sheet, menu, sidebar, typography sample, bestiary page.

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
