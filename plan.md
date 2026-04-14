# MÖRK BORG Random Item Generator — Project Plan

## Goal

Build a **static, browser-based random item generator** for MÖRK BORG that can be:

1. hosted for free on **GitHub Pages**
2. maintained as a public **GitHub repository**
3. run entirely in the browser with **HTML, CSS, and JavaScript**
4. driven by **large pre-generated lists** of items, features, and modifiers
5. filtered with simple UI controls such as:
   - magic weapons on/off
   - guns on/off
   - weapons only / non-weapons only / all items

This project should **not** rely on TypeScript, build tools, or custom runtime implementations. It should use standard browser elements and plain JavaScript.

---

## Core Constraints

## Hosting

- Must work on **GitHub Pages**
- Must be a **static site**
- No server, no database, no backend API required

## Tech stack

- **HTML**
- **CSS**
- **Vanilla JavaScript**
- JSON or JS data files for item lists

## UI approach

Use standard browser controls:
- `<button>`
- `<input type="checkbox">`
- `<input type="radio">`
- `<select>`
- `<fieldset>`
- `<label>`
- `<section>`
- `<article>`

No framework is required.

## Generator approach

The generator should pull from:
- a large list of base items
- a large list of traits/features
- optional magic effects
- optional gun-related modifiers
- optional flaws/curses
- random stat ranges

The result should feel varied, but the implementation should remain easy to edit.

---

## Product Vision

The site should feel like a lightweight GM/player tool:
- fast to load
- one-click generation
- readable output
- easy to fork and customize
- simple enough for contributors to add new items by editing data files

The repository should also be usable as a library of item tables and generation logic for other hobby projects.

---

## Scope

## In scope for v1

- Single-page web app
- Generate one random item at a time
- Toggle:
  - include magic weapons
  - include guns
  - item type: all / weapons / non-weapons
- Display:
  - item name
  - category
  - tags
  - description
  - random stats
  - optional special property
  - optional drawback
- Buttons:
  - Generate item
  - Reroll stats
  - Copy item text
- Static deployment to GitHub Pages

## Nice-to-have after v1

- Generate multiple items at once
- “Cursed items only” filter
- “Rare items” weighting
- “Broken / dirty / miserable” style filter
- Printable card layout

## Out of scope

- Accounts
- Cloud saves
- Multiplayer sharing
- Backend services
- Admin panels
- TypeScript build pipeline
- Server-side rendering

---

## Recommended Architecture

Use a very simple static structure:

```text
morkborg-item-generator/
  index.html
  styles/
    main.css
  js/
    app.js
    generator.js
    filters.js
    render.js
    random.js
  data/
    base-weapons.js
    base-items.js
    magic-features.js
    gun-features.js
    item-features.js
    drawbacks.js
    stats.js
  assets/
    icons/
    textures/
  README.md
  plan.md
```

## Why this structure

- `index.html` keeps the app GitHub Pages-friendly
- `js/` separates UI, generation, rendering, and helpers
- `data/` stores large editable lists
- no compilation step is required
- contributors can inspect and edit everything directly

---

## Data Strategy

The project should be **data-driven** rather than rule-heavy.

## Base idea

Instead of generating everything from scratch, the app should assemble results from:
- **pre-generated item bases**
- **feature lists**
- **random stat tables**

This makes it easier to:
- expand the generator over time
- tune the tone of the results
- balance probabilities
- let others contribute content without changing core logic

## Main data groups

### 1. Base weapons
Examples:
- Rust-slasher
- Bone-hilt knife
- Flail of chain-wrapped teeth
- Hooked polearm
- Blackpowder pistol
- Crank carbine
- Blunderbuss relic

Each entry can include:
- id
- name
- category
- tags
- description
- stat profile
- firearm flag
- eligible for magic flag

### 2. Base non-weapons
Examples:
- Lantern made from a saint’s rib cage
- Corpse key
- Skin map
- Rotten prayer wheel
- Funeral cup
- Plague bell
- Coffin nail bundle

Each entry can include:
- id
- name
- category
- tags
- description
- utility type
- eligible for curse flag
- eligible for special feature flag

### 3. Magic features
Examples:
- whispers before bloodshed
- glows in grave soil
- thirsts for a true name
- drinks heat from the wielder
- returns after burial
- screams when drawn
- opens wounds that do not clot

Each entry can include:
- id
- label
- description template
- allowed categories
- stat modifiers
- rarity weight

### 4. Gun features
Examples:
- cracked barrel
- saint-etched chamber
- smoke-choked ignition
- brass-gnawing mechanism
- double report
- misfire curse
- recoil blessing

Each entry can include:
- id
- label
- description template
- stat modifiers
- drawback chance

### 5. General item features
Examples:
- bloodstained
- worm-eaten
- silver-inlaid
- blister-hot
- mold-covered
- funeral-grade
- heretic-owned
- chapel-stolen

### 6. Drawbacks / curses
Examples:
- drains HP on dawn
- attracts flies and omens
- breaks on critical failure
- marks the carrier as guilty
- hungry for sacrifice
- impossible to conceal
- hated by priests

### 7. Random stats
Examples:
- damage
- uses
- durability
- reload time
- value
- burden
- omen interaction
- special roll ranges

---

## Suggested Data Format

Use JavaScript arrays of plain objects for easy editing.

Example:

```javascript
const BASE_WEAPONS = [
  {
    id: "rust-slasher",
    name: "Rust-Slasher",
    category: "weapon",
    tags: ["melee"],
    description: "A chipped blade that leaves orange dust in its wake.",
    firearm: false,
    magicAllowed: true,
    stats: {
      damage: "d6",
      durability: 8
    }
  }
];
```

Example feature:

```javascript
const MAGIC_FEATURES = [
  {
    id: "grave-hum",
    label: "Grave-Humming",
    allowedCategories: ["weapon"],
    description: "It vibrates softly in the presence of fresh dead.",
    modifiers: {
      valueBonus: 12
    },
    weight: 3
  }
];
```

This should stay human-readable so the data becomes part of the project’s value.

---

## Generator Design

## User inputs

The generator should read from browser form controls:

- checkbox: include magic weapons
- checkbox: include guns
- radio/select: all / weapons / non-weapons
- optional future checkbox: include cursed items
- optional future checkbox: include rare items

## Output flow

### Step 1: Build the allowed item pool
Filter the base items according to the selected options.

Rules:
- if guns are off, exclude all firearm-tagged items
- if category is weapons, only include weapon items
- if category is non-weapons, only include non-weapon items
- if magic weapons is off, do not apply magic features to weapons

### Step 2: Pick a base item
Choose one item at random from the filtered pool.

### Step 3: Roll optional features
Depending on the base item:
- maybe add a general feature
- maybe add a magic feature
- maybe add a gun feature
- maybe add a drawback or curse
- maybe add a material or origin tag

### Step 4: Roll random stats
Examples:
- bonus damage
- ammo count
- durability
- uses per day
- value in silver
- burden
- chance of breakage

### Step 5: Format the final item
Combine all selected parts into a readable output card.

---

## Logic Rules

## Required rules

1. **Magic toggle**
   - Only affects weapons unless expanded later
   - If off, no magic weapon feature should be attached

2. **Guns toggle**
   - If off, gun items must not enter the selection pool
   - Gun-only modifiers should only apply to firearm items

3. **Weapons / non-weapons toggle**
   - Filters base pool before generation

4. **Large list design**
   - The majority of variety should come from data lists, not from deeply nested code

5. **Random stats**
   - Stats should come from defined tables/ranges, not arbitrary uncontrolled output

## Optional weighting rules

Each data entry may include a `weight` value for weighted random selection.

Example:
- common scrap items weight 10
- rare relics weight 2
- cursed masterpieces weight 1

This helps tune the generator without changing UI behavior.

---

## UI Plan

## Layout

### Header
- project title
- short grim tagline
- small description

### Controls section
- magic weapons checkbox
- guns checkbox
- category selector
- generate button

### Result section
- generated item title
- category/tags
- stats block
- description block
- drawback block
- copy button
- reroll stats button

### Footer
- GitHub repository link
- license / attribution
- MÖRK BORG-compatible disclaimer if required

## Accessibility notes

- Use semantic HTML
- Labels must be attached to form inputs
- Use sufficient contrast
- Buttons must be keyboard usable
- Generated results should be readable without animations
- Consider `aria-live="polite"` for result updates

---

## JavaScript Module Responsibilities

## `app.js`
- initialize the page
- read form state
- attach event listeners
- trigger generation

## `generator.js`
- build filtered pools
- choose base items
- apply modifiers/features
- assemble final result object

## `filters.js`
- category filtering
- gun filtering
- magic eligibility filtering

## `render.js`
- render generated item into the DOM
- handle copy-to-clipboard formatting

## `random.js`
- random helpers
- weighted selection helper
- dice/stat rolling helpers

---

## Example HTML Controls

```html
<fieldset>
  <legend>Generator Options</legend>

  <label>
    <input type="checkbox" id="magicToggle" checked>
    Include magic weapons
  </label>

  <label>
    <input type="checkbox" id="gunsToggle" checked>
    Include guns
  </label>

  <label>
    <input type="radio" name="itemType" value="all" checked>
    All items
  </label>

  <label>
    <input type="radio" name="itemType" value="weapon">
    Weapons only
  </label>

  <label>
    <input type="radio" name="itemType" value="non-weapon">
    Non-weapons only
  </label>
</fieldset>

<button id="generateBtn">Generate Item</button>
```

This fits the requirement to use browser elements directly.

---

## Example Generation Flow in Plain JavaScript

```javascript
document.getElementById("generateBtn").addEventListener("click", () => {
  const options = {
    includeMagicWeapons: document.getElementById("magicToggle").checked,
    includeGuns: document.getElementById("gunsToggle").checked,
    itemType: document.querySelector('input[name="itemType"]:checked').value
  };

  const item = generateItem(options);
  renderItem(item);
});
```

This keeps the site simple and GitHub Pages-safe.

---

## Deployment Plan for GitHub Pages

## Option A: simplest possible setup
Use the repository root as the site source:
- `index.html` in the root
- CSS and JS in folders
- enable GitHub Pages from the main branch

This is the simplest deployment path.

## Option B: `docs/` folder setup
Keep source files in `/docs` and publish that folder through GitHub Pages.

Useful if the repo also contains scripts or notes outside the public site.

## Recommendation
Start with **root-level static hosting** unless the repository becomes messy.

## Why GitHub Pages works well here
- free for public repos
- perfect for static HTML/CSS/JS
- no server required
- easy to update via git push
- easy for others to fork

---

## Content Expansion Plan

## Phase 1 data targets
Aim for enough content to feel rich immediately.

### Base content targets
- 80–120 base weapons
- 80–120 base non-weapons
- 40–60 magic features
- 25–40 gun features
- 50–80 general item features
- 40–60 drawbacks/curses
- 20–40 stat modifiers/tables

This is enough for large variation while keeping editing manageable.

## Phase 2 additions
- named relic sets
- factions/origins
- region-specific loot
- corpse loot mode
- dungeon junk mode
- merchant stock mode
- scrolls, armor, ammo, and tools as subcategories

---

## Milestones

## Milestone 1 — repository setup
- add `index.html`
- add CSS and JS folders
- create placeholder data files
- verify site loads locally

## Milestone 2 — base generator
- implement filtering
- implement base item selection
- render result card
- support the three required toggles

## Milestone 3 — feature layering
- add magic features
- add gun features
- add drawbacks
- add random stats

## Milestone 4 — polish
- improve layout and typography
- add copy-to-clipboard
- add reroll stats
- add empty-state handling
- add helpful error handling if filters produce no valid items

## Milestone 5 — content growth
- expand all lists
- tune weights
- remove duplicate-feeling outputs
- improve phrasing templates

## Milestone 6 — publish
- enable GitHub Pages
- test mobile and desktop
- add README with usage and contribution notes
- add license/disclaimer text

---

## Risks and Mitigations

## Risk: content feels repetitive
Mitigation:
- keep multiple independent feature tables
- use weighted randomness
- add phrase templates and stat variation

## Risk: logic becomes hard to maintain
Mitigation:
- keep rules shallow
- move variation into data files
- keep generator functions small and specific

## Risk: GitHub Pages path issues
Mitigation:
- use relative asset paths
- test repository-name subpath hosting before release

## Risk: too many impossible combinations
Mitigation:
- add eligibility flags to data
- validate category compatibility before applying features

---

## Validation Checklist

Before public release, confirm:

- site loads on GitHub Pages
- no build step is required
- all controls work in the browser
- generation never returns invalid combinations
- guns never appear when guns are disabled
- magic weapon effects never apply when disabled
- category filtering works correctly
- output is readable on mobile
- repository is understandable to contributors

---

## README Notes

The repository README should include:

- what the project is
- where item data lives
- how to add a new item or feature
- contribution expectations
- attribution / compatibility notice for MÖRK BORG if needed

---

## Suggested First Implementation Order

1. Create static page shell
2. Add browser controls
3. Add a tiny base item list
4. Implement filtering by options
5. Generate and render one item
6. Add random stats
7. Add magic and gun features
8. Expand content lists heavily
9. Add copy and reroll controls
10. Publish to GitHub Pages

---

## Definition of Done for v1

The project is complete for v1 when:

- a public GitHub repository contains the source
- the generator is live on GitHub Pages
- the app runs entirely in the browser using HTML/CSS/JavaScript
- users can toggle magic weapons, guns, and item type
- the generator draws from large pre-generated lists of items and features
- generated items include random stats
- the codebase is easy to edit without build tooling

---

## Final Recommendation

Keep the project intentionally simple:

- use **plain JavaScript**
- use **semantic browser elements**
- use **large editable data lists**
- keep the generator **data-driven**
- ship as a **static GitHub Pages site**

That gives you the fastest path to a playable, forkable, and maintainable MÖRK BORG item generator.
