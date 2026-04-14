const MAGIC_FEATURES = [
  {
    id: "grave-hum",
    label: "Grave-Humming",
    allowedCategories: ["weapon", "non-weapon"],
    description: "It vibrates softly in the presence of the freshly dead.",
    modifiers: { valueBonus: 12 },
    weight: 4
  },
  {
    id: "whispers-blood",
    label: "Whispers Before Bloodshed",
    allowedCategories: ["weapon"],
    description: "Murmurs quiet warnings moments before violence erupts nearby.",
    modifiers: { valueBonus: 15 },
    weight: 4
  },
  {
    id: "glows-grave-soil",
    label: "Glows in Grave Soil",
    allowedCategories: ["weapon", "non-weapon"],
    description: "Emits a dim phosphorescent glow when placed on ground that covers the dead.",
    modifiers: { valueBonus: 10 },
    weight: 5
  },
  {
    id: "thirsts-true-name",
    label: "Thirsts for a True Name",
    allowedCategories: ["weapon"],
    description: "Each time it draws blood, it learns the name of the wounded. It does not forget.",
    modifiers: { damageBonus: 1, valueBonus: 20 },
    weight: 2
  },
  {
    id: "drinks-heat",
    label: "Drinks Heat from the Wielder",
    allowedCategories: ["weapon"],
    description: "The metal is always cold. The hand holding it loses warmth slowly.",
    modifiers: { valueBonus: 8 },
    weight: 4
  },
  {
    id: "returns-burial",
    label: "Returns After Burial",
    allowedCategories: ["weapon", "non-weapon"],
    description: "If buried, it returns to the last owner's hands within one day.",
    modifiers: { valueBonus: 25 },
    weight: 2
  },
  {
    id: "screams-drawn",
    label: "Screams When Drawn",
    allowedCategories: ["weapon"],
    description: "When unsheathed or raised, it emits a short, piercing shriek. Only the wielder hears it fully.",
    modifiers: { valueBonus: 8 },
    weight: 4
  },
  {
    id: "opens-wounds-unclot",
    label: "Opens Wounds That Do Not Clot",
    allowedCategories: ["weapon"],
    description: "Wounds dealt by this weapon resist mundane healing for one hour.",
    modifiers: { damageBonus: 0, valueBonus: 18 },
    weight: 2
  },
  {
    id: "loved-crows",
    label: "Loved by Crows",
    allowedCategories: ["weapon", "non-weapon"],
    description: "Crows follow the carrier. They watch. They do not attack.",
    modifiers: { valueBonus: 6 },
    weight: 5
  },
  {
    id: "calls-fog",
    label: "Calls Morning Fog",
    allowedCategories: ["non-weapon", "weapon"],
    description: "At dawn, mist rises in a circle around whoever carries it.",
    modifiers: { valueBonus: 10 },
    weight: 3
  },
  {
    id: "bleeds-moonlight",
    label: "Bleeds Moonlight",
    allowedCategories: ["weapon"],
    description: "Under open sky at night, the weapon seeps pale light like a slow wound.",
    modifiers: { valueBonus: 12 },
    weight: 3
  },
  {
    id: "remembers-first-kill",
    label: "Remembers Its First Kill",
    allowedCategories: ["weapon"],
    description: "The weapon is warm when near anything similar to the creature that died to it first.",
    modifiers: { valueBonus: 10 },
    weight: 3
  },
  {
    id: "iron-tastes-sweet",
    label: "Iron That Tastes of Honey",
    allowedCategories: ["weapon"],
    description: "Licking the blade causes no harm. The taste of honey is real. The cause is unknown.",
    modifiers: { valueBonus: 8 },
    weight: 4
  },
  {
    id: "heavy-guilt",
    label: "Heavy with Guilt",
    allowedCategories: ["weapon"],
    description: "Seems heavier than it should be. Becomes lighter the more it is used.",
    modifiers: { damageBonus: 1, valueBonus: 10 },
    weight: 3
  },
  {
    id: "shadow-anchor",
    label: "Shadow Anchor",
    allowedCategories: ["weapon", "non-weapon"],
    description: "The carrier's shadow does not move when they move. It stays where it last was.",
    modifiers: { valueBonus: 14 },
    weight: 2
  },
  {
    id: "hated-holy",
    label: "Hated by the Holy",
    allowedCategories: ["weapon"],
    description: "Priests and church officials instinctively dislike whoever carries this.",
    modifiers: { valueBonus: 5 },
    weight: 5
  },
  {
    id: "fire-refuses",
    label: "Fire Refuses It",
    allowedCategories: ["weapon", "non-weapon"],
    description: "Flames do not consume it. It may be carried through fire without burning.",
    modifiers: { valueBonus: 20 },
    weight: 2
  },
  {
    id: "drawn-to-wounds",
    label: "Drawn to Wounds",
    allowedCategories: ["weapon"],
    description: "In combat, the weapon pulls slightly toward the nearest open wound.",
    modifiers: { damageBonus: 0, valueBonus: 12 },
    weight: 3
  },
  {
    id: "speaks-once",
    label: "Speaks Once Per Day",
    allowedCategories: ["weapon", "non-weapon"],
    description: "At dusk, it speaks one word. The word changes. It is never comforting.",
    modifiers: { valueBonus: 15 },
    weight: 2
  },
  {
    id: "iron-rust-immunity",
    label: "Never Rusts",
    allowedCategories: ["weapon"],
    description: "Despite all conditions, the metal remains impossibly clean and bright.",
    modifiers: { durabilityBonus: 3, valueBonus: 8 },
    weight: 5
  },
  {
    id: "drinks-fear",
    label: "Drinks Fear",
    allowedCategories: ["weapon"],
    description: "Becomes marginally heavier each time the carrier is frightened. Very heavy now.",
    modifiers: { valueBonus: 10 },
    weight: 3
  },
  {
    id: "bone-sympathy",
    label: "Bone Sympathy",
    allowedCategories: ["weapon"],
    description: "The undead hesitate before this weapon. One round, no more.",
    modifiers: { valueBonus: 16 },
    weight: 3
  },
  {
    id: "compass-violence",
    label: "Compass of Violence",
    allowedCategories: ["weapon"],
    description: "When held, the tip points toward the closest violent act occurring within earshot.",
    modifiers: { valueBonus: 10 },
    weight: 3
  },
  {
    id: "names-the-dying",
    label: "Names the Dying",
    allowedCategories: ["weapon"],
    description: "When someone nearby is about to die, the weapon hisses their name.",
    modifiers: { valueBonus: 18 },
    weight: 2
  },
  {
    id: "leaks-old-grief",
    label: "Leaks Old Grief",
    allowedCategories: ["non-weapon", "weapon"],
    description: "Those nearby feel a sudden and sourceless sadness. It fades when the item is set down.",
    modifiers: { valueBonus: 7 },
    weight: 4
  },
  {
    id: "wolf-silent",
    label: "Wolf-Silent",
    allowedCategories: ["weapon"],
    description: "Makes no sound when used. The strike is felt before it is heard.",
    modifiers: { valueBonus: 14 },
    weight: 3
  },
  {
    id: "blood-mark",
    label: "Leaves a Blood Mark",
    allowedCategories: ["weapon"],
    description: "Anyone struck by this weapon carries a faint sigil where they were hit, visible only in firelight.",
    modifiers: { valueBonus: 10 },
    weight: 3
  },
  {
    id: "old-promise",
    label: "Bound by Old Promise",
    allowedCategories: ["weapon"],
    description: "Cannot be willingly put down during a fight once drawn. Must be pried loose after.",
    modifiers: { damageBonus: 1, valueBonus: 12 },
    weight: 2
  },
  {
    id: "mist-born",
    label: "Mist-Born",
    allowedCategories: ["weapon"],
    description: "Appeared from nowhere in a patch of morning mist. Has no record of origin.",
    modifiers: { valueBonus: 10 },
    weight: 3
  },
  {
    id: "rust-forged",
    label: "Rust-Forged",
    allowedCategories: ["weapon"],
    description: "Made from metal that has rotted and been re-smelted three times. It feels wrong but holds.",
    modifiers: { damageBonus: 0, durabilityBonus: 2, valueBonus: 6 },
    weight: 4
  },
  {
    id: "church-refused",
    label: "Church-Refused",
    allowedCategories: ["weapon", "non-weapon"],
    description: "Priests refuse to bless it. They refuse to explain why.",
    modifiers: { valueBonus: 8 },
    weight: 4
  },
  {
    id: "unloved-iron",
    label: "Unloved Iron",
    allowedCategories: ["weapon"],
    description: "Has passed through dozens of hands and been discarded each time. It keeps returning.",
    modifiers: { valueBonus: 5 },
    weight: 5
  },
  {
    id: "echo-death",
    label: "Echoes a Death",
    allowedCategories: ["weapon"],
    description: "When held in silence, you can hear the last sound the previous owner made.",
    modifiers: { valueBonus: 12 },
    weight: 3
  },
  {
    id: "grave-marked",
    label: "Grave-Marked",
    allowedCategories: ["weapon", "non-weapon"],
    description: "Causes any gravestone near it to show a hairline crack. Old graves feel it too.",
    modifiers: { valueBonus: 8 },
    weight: 4
  },
  {
    id: "midnight-weight",
    label: "Midnight Weight",
    allowedCategories: ["weapon"],
    description: "Grows twice as heavy between midnight and dawn. The weight is real.",
    modifiers: { valueBonus: 6 },
    weight: 4
  },
  {
    id: "iron-prayer",
    label: "Iron Prayer",
    allowedCategories: ["weapon"],
    description: "A fragment of scripture is hammered into the metal. The scripture is from no text anyone can name.",
    modifiers: { valueBonus: 10 },
    weight: 4
  },
  {
    id: "absorbs-screams",
    label: "Absorbs Screams",
    allowedCategories: ["weapon"],
    description: "Nearby screams are muffled. The weapon stores them. They come out later.",
    modifiers: { valueBonus: 12 },
    weight: 3
  },
  {
    id: "cold-contract",
    label: "Cold Contract",
    allowedCategories: ["weapon"],
    description: "Something agreed to before you owned it. You are not sure what you owe.",
    modifiers: { damageBonus: 2, valueBonus: 20 },
    weight: 1
  },
  {
    id: "twice-forged",
    label: "Twice-Forged",
    allowedCategories: ["weapon"],
    description: "Melted and re-cast from a weapon that killed someone important. The importance was absorbed.",
    modifiers: { damageBonus: 1, valueBonus: 14 },
    weight: 2
  },
  {
    id: "saint-marred",
    label: "Saint-Marred",
    allowedCategories: ["weapon"],
    description: "A relic of a saint was destroyed to make this. The saint has not forgotten.",
    modifiers: { damageBonus: 1, valueBonus: 18 },
    weight: 2
  },
  {
    id: "plague-touched",
    label: "Plague-Touched",
    allowedCategories: ["weapon"],
    description: "Carried through a plague district. Something clings to it that has not died.",
    modifiers: { valueBonus: 8 },
    weight: 4
  },
  {
    id: "wept-over",
    label: "Wept Over at Forging",
    allowedCategories: ["weapon"],
    description: "The metalsmith wept while making it. The tears are in the metal now.",
    modifiers: { valueBonus: 10 },
    weight: 4
  },
  {
    id: "murder-weight",
    label: "Murder Weight",
    allowedCategories: ["weapon"],
    description: "Has killed more than you know. Has a preference for methods.",
    modifiers: { damageBonus: 1, valueBonus: 15 },
    weight: 2
  }
];
