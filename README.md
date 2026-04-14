# MÖRK BORG Item Generator

A static, browser-based random item generator for [MÖRK BORG](https://morkborg.com). Generates weapons, relics, and grim curiosities at the click of a button. No build step. No server. Runs entirely in the browser.

---

## Features

- Generate a random item — weapon, relic, or curiosity — with one click
- Toggle optional content categories:
  - **Magic weapons** — attaches a magic property to eligible weapons
  - **Firearms & guns** — includes blackpowder and ranged weapons
  - **Curses** — applies a drawback or curse to the generated item
  - **Ancient qualities** — adds an archaic or age-worn trait
  - **Shitty qualities** — adds a degraded or miserable trait
- Filter by item type: **All items**, **Weapons only**, or **Non-weapons only**
- **Reroll stats** — keep the item, reroll its numbers
- **Copy item text** — copies the full item description to your clipboard
- Weighted randomness ensures common items appear more often than rare ones
- Deployable to GitHub Pages with no configuration

---

## Project Structure

```
bork_items/
  index.html              — single-page app shell
  styles/
    main.css              — primary styles
    cursed.css            — alternate cursed theme
    original.css          — original style prototype
  js/
    app.js                — initialization, event listeners, form reading
    generator.js          — core generation logic: pool building, feature rolling, stat assembly
    filters.js            — item pool filtering by type, guns, and magic eligibility
    render.js             — DOM rendering and copy-to-clipboard formatting
    random.js             — dice rolling, weighted random selection, probability helpers
  data/
    base-weapons.js       — 85 base weapon entries
    base-items.js         — 84 base non-weapon entries
    magic-features.js     — 43 magic properties for eligible weapons
    gun-features.js       — 30 firearm-specific traits and modifiers
    item-features.js      — 59 general item qualities and descriptors
    drawbacks.js          — 44 curses, flaws, and misfortune effects
    ancient-features.js   — 18 ancient and archaic qualities
    shitty-features.js    — 21 degraded, broken, and wretched qualities
    stats.js              — stat tables for damage, durability, value, burden, and reload time
  assets/
    icons/
    textures/
  plan.md                 — original design and architecture document
```

---

## How Generation Works

1. **Build the pool** — base items are filtered based on the current toggle and radio selections
2. **Pick a base item** — one item is chosen using weighted random selection
3. **Roll features** — optional traits are applied: a general feature (with a chance of a second), magic property, gun modifier, ancient quality, shitty quality, and/or curse
4. **Roll stats** — damage dice, durability, value, burden, uses, range, and a chance of an omen interaction
5. **Render the result** — the assembled item is displayed as a card with all its properties

---

## Data Format

All data lives in plain JavaScript files loaded as `<script>` tags before the JS modules. Each entry is a plain object in a `const` array.

### Weapon entry

```javascript
const BASE_WEAPONS = [
  {
    id: "rust-slasher",
    name: "Rust-Slasher",
    category: "weapon",
    tags: ["melee", "blade"],
    description: "A chipped blade that leaves orange dust in its wake.",
    firearm: false,
    magicAllowed: true,
    stats: { damage: "d6", durability: 8 },
    weight: 10
  }
];
```

### Non-weapon entry

```javascript
const BASE_ITEMS = [
  {
    id: "saint-rib-lantern",
    name: "Lantern of Saint's Ribs",
    category: "non-weapon",
    tags: ["light", "relic"],
    description: "The rib cage of a martyred saint, repurposed as a lantern cage.",
    utilityType: "light",
    curseAllowed: true,
    specialAllowed: true,
    stats: { uses: "unlimited", burden: 2 },
    weight: 4
  }
];
```

### Feature entry

```javascript
const MAGIC_FEATURES = [
  {
    id: "grave-hum",
    label: "Grave-Humming",
    allowedCategories: ["weapon"],
    description: "It vibrates softly in the presence of fresh dead.",
    modifiers: { valueBonus: 12 },
    weight: 3
  }
];
```

The `weight` field controls selection probability. Higher weight = more common.

---

## Adding Content

To add a new item, open the relevant file in `data/` and append an entry to the array. The generator will pick it up automatically — no code changes needed.

| What to add | File |
|---|---|
| New weapon | `data/base-weapons.js` |
| New non-weapon item | `data/base-items.js` |
| New magic property | `data/magic-features.js` |
| New gun modifier | `data/gun-features.js` |
| New general trait | `data/item-features.js` |
| New curse or drawback | `data/drawbacks.js` |
| New ancient quality | `data/ancient-features.js` |
| New shitty quality | `data/shitty-features.js` |

---

## Running Locally

Open `index.html` in a browser. No build step, no dependencies, no server required.

---

## Deployment

This project is designed for GitHub Pages. Enable Pages from the repository root on the main branch and it will be live immediately.

---

## Attribution

An unofficial fan tool. MÖRK BORG is published by [Free League Publishing](https://morkborg.com) and designed by Johan Nohr & Pelle Nilsson. This generator is not affiliated with or endorsed by Free League.
