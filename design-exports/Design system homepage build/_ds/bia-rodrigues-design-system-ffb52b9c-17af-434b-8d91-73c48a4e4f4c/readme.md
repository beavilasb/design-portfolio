# Bia Rodrigues — Portfolio Design System

A design system for **Bia Rodrigues'** UX/product-design portfolio website — a personal site with a homepage and long-form case-study pages, imported from a Figma file ("Portfolio_design_system.fig", pages: Cover, Style-Guide, Landing-Pages) plus a set of uploaded case-study visuals (charts, comparison screenshots). Built for building the site with Claude Code, GitHub and Vercel.

Bia is a product design manager (ex-Gupy) — the flagship case study here is "Design System from scratch," the ECO Design System she built at Gupy across five HR-tech products.

**Sources**
- Figma file: `Portfolio_design_system.fig` (mounted read-only for this build — pages Cover / Style-Guide / Landing-Pages)
- GitHub: [beavilasb/design-portfolio](https://github.com/beavilasb/design-portfolio) — currently an empty scaffold repo (README only). Explore it directly for the latest code once the site is built there; this design system doesn't depend on it yet.
- Uploaded case-study assets: logo (dark + mint badge), hero photo, background circle motifs, and 6 case-study data visuals (ROI chart, support-ticket chart, before/after product comparisons, token-hierarchy diagram) — all copied into `assets/`.

## Index
- `styles.css` — root stylesheet, imports everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`
- `components/` — `Button`, `Divider`, `VuesaxLinearSend`, `VuesaxLinearTask`, `VuesaxLinearArrowRight` (+ `.d.ts`, `.prompt.md`, `components.card.html`)
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius/shadow, brand logo, background motif)
- `assets/` — logo (dark + mint), background-circle SVGs, hero photo, case-study charts/screenshots, 4 generic portfolio thumbnails
- `ui_kits/portfolio-home/` — homepage recreation (`index.html`)
- `ui_kits/case-study/` — case-study page template (`index.html`)
- `SKILL.md` — portable skill file for use in Claude Code

## Components
The source Figma file defines a very small formal component inventory: **Divider** (light/dark theme) and three linear icons (**send**, **task**, **arrow-right**). Everything else in the two landing pages is one-off layout — no other component instances exist in the file.

**Intentional additions:** `Button` (pill CTA, 4 variants) was added because the same visual button pattern repeats dozens of times across both pages as plain layout, with no formal Figma component behind it. It was extracted so consuming projects get one reusable primitive instead of copy-pasted markup.

## Content Fundamentals
- **Voice:** first person, direct, understated. "Welcome to my portfolio," "Let's create something extraordinary together," "Let's chat and make something amazing together." Warm but not gushing.
- **Case-study voice is different and more senior**: past-tense, matter-of-fact, numbers-forward. "The investment was approved on those numbers, not on design principles." No hedging, no buzzwords — plain claims backed by a specific metric.
- Sentence case throughout; no exclamation points in body copy. Section labels (PROBLEM, RESULTS, DESIGN PROCESS, LAST UPDATES) are the one ALL-CAPS device, always tiny (14px) and grey, always paired with a large title right below.
- No emoji anywhere in the source.

## Visual Foundations
- **Palette:** two colors carry the whole brand — dark near-black (`#1F1F1F`) and a deep green (`#006C49`, confusingly named "Mint" in the source tokens), plus its pale tint "Mint Light" (`#CCFFEF`) used as the recurring background wash for hero/contact sections. Neutral greys (`#F7F7F7`→`#737373`) do all the supporting work; white for cards and dark-surface text.
- **Type:** Manrope is the primary typeface (self-hosted, swapped in for the source's original Montserrat) — Bold for all headings/buttons/nav, Regular for body. (Inter and Urbanist appear in the Figma file too, but only inside the internal Style-Guide chrome — page headers and specimen meta-labels — never in real page content, so they're documented as available but not required.)
- **Backgrounds:** flat color fields, no gradients, no photo full-bleeds except the hero portrait. The one recurring motif is a large soft circle (mint-green or dark, 24% opacity, ~234–363px) placed partially off-canvas behind hero/CTA sections — never a pattern or texture.
- **Imagery:** the hero portrait already has a hand-drawn illustration treatment baked in (squiggle line, dashed marks, an oversized green "X" letterform) — that's bespoke art, not something to regenerate. Case-study figures are plain data charts and product screenshots, presented in rounded (24px) cards with a 1px light-grey inset border, no drop shadow.
- **Animation:** none observed in the source — treat hover/press as the only interactive states.
- **Hover/press states:** buttons: no color change in the source; use a subtle opacity dip (~0.85) on hover as a safe default. No visible pressed/active state defined.
- **Corner radii:** 100px (fully pill) for every button; 24px for image/chart cards; 10px for small icon swatches; 0 elsewhere (text blocks, sections).
- **Shadows:** none on buttons or normal cards (borders instead — `inset 0 0 0 1px` light grey). One outlined-icon "specimen card" pattern in the style guide uses a soft drop shadow (`0 12px 24px` pale grey) — reserved for foundation/spec displays, not product UI.
- **Layout:** fixed 124px side gutters at desktop (1440px), 64px section vertical padding, generous 24–64px gaps between stacked blocks. Long-form case-study copy is capped at 760px measure, centered.
- **Transparency/blur:** only the two background circles use opacity (24%); no blur anywhere.
- **Color vibe of imagery:** warm, natural-light portrait photography; data charts are flat blue/green bars on white, no gradients or 3D.

## Iconography
The source defines only 3 icons, via the Vuesax linear icon family (`vuesax/linear/send`, `/task`, `/arrow-right`) — single-color, ~1–1.5px linear stroke, paints via `currentColor`. No icon font, no emoji, no unicode-glyph icons. For any icon not in this set, match Vuesax's linear style (outline, rounded joins, no fill) rather than mixing in a different icon family. All three are materialized in `components/`.

## Caveats
- The GitHub repo `beavilasb/design-portfolio` is currently empty (README stub only) — nothing was imported from it; re-run a sync once real site code exists there.
- Two case-study sections ("Launch and governance", "Brand extension for AI components") had no dedicated screenshot in the source — the Figma file itself reuses an existing chart at low opacity with an italic `[IMAGE: …]` placeholder caption in that spot, and this build replicates that exact placeholder pattern. Swap in real screenshots when available.
- Montserrat, Inter and Urbanist are loaded from Google Fonts (no font files were in the source/uploads) — swap for self-hosted files if the real brand ships its own.

**Please help me get this right** — tell me if the green/mint naming, the Button addition, or the case-study copy needs adjusting, and send over any real product screenshots for the two placeholder slots above.
