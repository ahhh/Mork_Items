const GUN_FEATURES = [
  {
    id: "cracked-barrel",
    label: "Cracked Barrel",
    description: "The barrel has a hairline fracture. Every third shot, roll a d6 — on a 1, it misfires.",
    modifiers: { damageBonus: 0 },
    drawbackChance: 0.4,
    weight: 8
  },
  {
    id: "saint-etched-chamber",
    label: "Saint-Etched Chamber",
    description: "The breech is inscribed with a martyr's name. Misfires are reduced by one step.",
    modifiers: { durabilityBonus: 1, valueBonus: 12 },
    drawbackChance: 0,
    weight: 4
  },
  {
    id: "smoke-choked-ignition",
    label: "Smoke-Choked Ignition",
    description: "Excessive fouling in the ignition mechanism. Leaves a cloud of black smoke on every shot.",
    modifiers: {},
    drawbackChance: 0.2,
    weight: 7
  },
  {
    id: "brass-gnawing-mechanism",
    label: "Brass-Gnawing Mechanism",
    description: "The internal brass parts are slowly corroding. Damage increases by 1 but durability drops by 2.",
    modifiers: { damageBonus: 1, durabilityBonus: -2 },
    drawbackChance: 0.2,
    weight: 5
  },
  {
    id: "double-report",
    label: "Double Report",
    description: "This gun fires twice before you intended. Both shots land. Both cost ammo.",
    modifiers: { damageBonus: 0 },
    drawbackChance: 0.3,
    weight: 4
  },
  {
    id: "misfire-curse",
    label: "Misfire Curse",
    description: "Whispered over at a crossroads. Misfires deal damage to the shooter instead.",
    modifiers: {},
    drawbackChance: 0.5,
    weight: 4
  },
  {
    id: "recoil-blessing",
    label: "Recoil Blessing",
    description: "Something about the mechanism converts kick into aim. +1 damage on still, braced shots.",
    modifiers: { damageBonus: 1, valueBonus: 10 },
    drawbackChance: 0,
    weight: 4
  },
  {
    id: "long-barrel",
    label: "Extended Barrel",
    description: "The barrel has been extended for range. +1 range category, but unwieldy in close quarters.",
    modifiers: { valueBonus: 8 },
    drawbackChance: 0,
    weight: 5
  },
  {
    id: "sawn-barrel",
    label: "Sawn Barrel",
    description: "The barrel has been cut down. Loses one range category, gains a wider shot pattern at close range.",
    modifiers: {},
    drawbackChance: 0.1,
    weight: 6
  },
  {
    id: "bone-grip",
    label: "Bone Grip",
    description: "The grip is wrapped in bone fragments. Grips well. Cuts the hand in cold weather.",
    modifiers: { valueBonus: 4 },
    drawbackChance: 0.1,
    weight: 6
  },
  {
    id: "heavy-powder",
    label: "Heavy Powder Load",
    description: "Packed with twice the normal black powder. +2 damage. High risk of misfire on fumbles.",
    modifiers: { damageBonus: 2 },
    drawbackChance: 0.3,
    weight: 5
  },
  {
    id: "silenced-barrel",
    label: "Cloth-Muffled Barrel",
    description: "Someone wrapped cloth around the muzzle. Slightly quieter. Catches fire occasionally.",
    modifiers: {},
    drawbackChance: 0.2,
    weight: 5
  },
  {
    id: "smuggler-grip",
    label: "Smuggler-Grip Hidden Trigger",
    description: "The trigger folds into the grip. Hard to spot when carried casually.",
    modifiers: { valueBonus: 8 },
    drawbackChance: 0,
    weight: 5
  },
  {
    id: "church-blessed-barrel",
    label: "Church-Blessed Barrel",
    description: "Blessed by a priest who asked no questions. Effective against things that dislike blessings.",
    modifiers: { valueBonus: 15 },
    drawbackChance: 0,
    weight: 3
  },
  {
    id: "blood-etched",
    label: "Blood-Etched Stock",
    description: "Names carved into the stock in dried blood. The gun is accurate when the carrier is afraid.",
    modifiers: { valueBonus: 10 },
    drawbackChance: 0.1,
    weight: 4
  },
  {
    id: "condemned-maker",
    label: "Condemned Maker's Mark",
    description: "Made by a gunsmith who was executed for heresy. Effective. Dangerous to own.",
    modifiers: { damageBonus: 1, valueBonus: 8 },
    drawbackChance: 0.1,
    weight: 3
  },
  {
    id: "jury-rigged-lock",
    label: "Jury-Rigged Lock",
    description: "The firing mechanism was replaced with improvised parts. Unreliable but cheap to repair.",
    modifiers: { durabilityBonus: -1 },
    drawbackChance: 0.25,
    weight: 7
  },
  {
    id: "plague-stock",
    label: "Plague-Wood Stock",
    description: "The stock is carved from wood taken from a plague house. Warm to the touch. Effective.",
    modifiers: { valueBonus: 6 },
    drawbackChance: 0.1,
    weight: 6
  },
  {
    id: "mirror-polished",
    label: "Mirror-Polished Barrel",
    description: "The barrel is polished to a reflective finish. Unsettling to look down. Very clean.",
    modifiers: { valueBonus: 6, durabilityBonus: 1 },
    drawbackChance: 0,
    weight: 4
  },
  {
    id: "cursed-powder",
    label: "Cursed Powder Horn",
    description: "The powder horn is sealed with a sigil. The smoke it produces is darker than normal smoke.",
    modifiers: {},
    drawbackChance: 0.2,
    weight: 5
  },
  {
    id: "hair-trigger",
    label: "Hair Trigger",
    description: "The slightest pressure fires it. +1 damage from speed. Roll to avoid accidental discharge when startled.",
    modifiers: { damageBonus: 1 },
    drawbackChance: 0.2,
    weight: 4
  },
  {
    id: "iron-sights",
    label: "Crude Iron Sights",
    description: "A bent iron rod serves as a front sight. Better than nothing. Just barely.",
    modifiers: { valueBonus: 4 },
    drawbackChance: 0,
    weight: 7
  },
  {
    id: "wet-powder",
    label: "Wet Powder Reserve",
    description: "The powder has been exposed to moisture. Every shot has a 1-in-6 chance of failing silently.",
    modifiers: { damageBonus: -1 },
    drawbackChance: 0.5,
    weight: 6
  },
  {
    id: "silver-shot",
    label: "Silver Shot Loaded",
    description: "A single silver ball is already loaded. Effective against what silver is effective against.",
    modifiers: { valueBonus: 15, damageBonus: 0 },
    drawbackChance: 0,
    weight: 3
  },
  {
    id: "scattershot",
    label: "Scattershot Load",
    description: "Loaded with nails, bone chips, and glass. Lower range but devastating at close quarters.",
    modifiers: { damageBonus: 2 },
    drawbackChance: 0.1,
    weight: 5
  },
  {
    id: "mourning-stock",
    label: "Mourning-Carved Stock",
    description: "Funeral prayers are carved into the stock. The gun is calmer when the carrier is grieving.",
    modifiers: { valueBonus: 8 },
    drawbackChance: 0,
    weight: 4
  },
  {
    id: "forged-wrong",
    label: "Forged Wrong",
    description: "Something in the casting is off. It always smells faintly of sulfur.",
    modifiers: {},
    drawbackChance: 0.3,
    weight: 6
  },
  {
    id: "relic-trigger",
    label: "Relic Trigger Guard",
    description: "The trigger guard was cast from a melted-down relic. Something approves.",
    modifiers: { valueBonus: 12 },
    drawbackChance: 0,
    weight: 3
  },
  {
    id: "locked-mechanism",
    label: "Locked Mechanism",
    description: "The action is partially frozen. Takes two rounds to fire. Hurts more when it does.",
    modifiers: { damageBonus: 2 },
    drawbackChance: 0.2,
    weight: 5
  },
  {
    id: "voice-ignition",
    label: "Voice-Triggered Ignition",
    description: "Fires when a specific word is spoken aloud. The word is etched inside the barrel in a language you don't speak.",
    modifiers: { valueBonus: 18 },
    drawbackChance: 0.1,
    weight: 2
  }
];
