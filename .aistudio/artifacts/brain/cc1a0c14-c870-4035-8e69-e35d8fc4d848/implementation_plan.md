# Hero Section Update Plan (Work360)

## Overview
Update **only** the Hero section (`RwHero`, the first section at the top of the page) with the six specified text, button, and counter updates while keeping all fonts, font sizes, font weights, colours, spacing, button styles, rolling number animation styles, background canvas, and every other section on the page completely unchanged.

## Planned Changes

### 1. Small Top Badge
- **Current**: `"Now booking Q4 · 3 spots left"`
- **Updated**: `"Now booking · Free audit for Aussie businesses"`
- **Where**: `<RwHero eyebrow="Now booking · Free audit for Aussie businesses" ... />` in `/src/App.tsx` and default prop in `/src/rw/RwHero.jsx`.

### 2. Main Headline
- **Unchanged**: Keep `"Get seen by|the *right crowd.*"` (`"Get seen by the right crowd."`) with the exact same typography, sizing, and line/italic formatting.

### 3. Paragraph Under the Headline
- **Current**: `"Reachwise is a full-funnel marketing agency. Brand, content, paid media and search — engineered as one system and measured against pipeline, not impressions."`
- **Updated**: `"We get Australian small businesses seen on Google, social media and ads, and report every result in plain numbers."`
- **Where**: `<RwHero subCopy="..." />` in `/src/App.tsx` and default prop in `/src/rw/RwHero.jsx`.

### 4. CTA Buttons & Smooth Scroll to Free Audit Form
- **First Button**: Keep `"Book a strategy call"`.
- **Second Button**: Change `"See our work"` to `"Get a free audit"`.
- **Scroll Behavior**: Both buttons point to `/#contact` (the `"Free audit"` form section `#contact` at the bottom of the page) and use the existing smooth-scroll handler so clicking either button scrolls smoothly to the Free audit form section.

### 5. Rolling Counter (`OUR APPROACH` & `0` → `360°`)
- **Label**: Replace `"PEOPLE REACHED FOR CLIENTS THIS MONTH"` with `"OUR APPROACH"`.
- **Value & Animation**: Replace the large number with a rolling counter that starts at `0°` and counts up to `360°` using the existing `<Roll>` vertical digit-strip animation (`.rwh-rd > span`), keeping the exact same font, size, weight, and rolling transition style.

### 6. Bottom-Right Proof Text (Below/Beside the Service Tags)
- **Current**: `"★★★★★ 4.9 · 126 client reviews"` and `"140+ brands grown"`
- **Updated**: `"Perth based · Serving all of Australia"` with the stars (`★★★★★`) removed.
- **Where**: `.rwh-proof` element in `/src/rw/RwHero.jsx`, preserving the exact font, size, weight, colour, and spacing.
