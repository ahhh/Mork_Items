// Stat tables and rolling helpers used during generation.
// All dice expressions are strings passed to rollDice() in random.js.

const STAT_TABLES = {
  // --- Damage modifiers applied on top of base weapon damage ---
  damageBonus: [
    { label: "+0 (base)", value: 0, weight: 6 },
    { label: "+1", value: 1, weight: 4 },
    { label: "+2", value: 2, weight: 2 },
    { label: "-1", value: -1, weight: 2 }
  ],

  // --- Durability ranges ---
  durability: [
    { label: "Fragile (3)", value: 3, weight: 3 },
    { label: "Poor (5)", value: 5, weight: 5 },
    { label: "Fair (8)", value: 8, weight: 8 },
    { label: "Sturdy (10)", value: 10, weight: 6 },
    { label: "Excellent (12)", value: 12, weight: 3 },
    { label: "Indestructible (15)", value: 15, weight: 1 }
  ],

  // --- Ammo counts for firearms ---
  ammo: [
    { label: "1 shot", value: 1, weight: 8 },
    { label: "2 shots", value: 2, weight: 4 },
    { label: "3 shots", value: 3, weight: 2 }
  ],

  // --- Item value in silver ---
  value: [
    { label: "Worthless (d4 silver)", dice: "d4", weight: 5 },
    { label: "Cheap (d6 silver)", dice: "d6", weight: 8 },
    { label: "Common (d10 silver)", dice: "d10", weight: 8 },
    { label: "Decent (2d6 silver)", dice: "2d6", weight: 6 },
    { label: "Valuable (d20 silver)", dice: "d20", weight: 4 },
    { label: "Rare (2d20 silver)", dice: "2d20", weight: 2 },
    { label: "Exceptional (d100 silver)", dice: "d100", weight: 1 }
  ],

  // --- Burden (encumbrance) ---
  burden: [
    { label: "Negligible (0)", value: 0, weight: 3 },
    { label: "Light (1)", value: 1, weight: 8 },
    { label: "Medium (2)", value: 2, weight: 6 },
    { label: "Heavy (3)", value: 3, weight: 3 },
    { label: "Very Heavy (4)", value: 4, weight: 1 }
  ],

  // --- Reload times for firearms ---
  reloadTime: [
    { label: "Quick (1 action)", value: 1, weight: 5 },
    { label: "Slow (2 actions)", value: 2, weight: 8 },
    { label: "Very Slow (3 actions)", value: 3, weight: 5 },
    { label: "Agonizing (full round)", value: "round", weight: 3 }
  ],

  // --- Uses (for consumables and tools) ---
  uses: [
    { label: "d4 uses", dice: "d4", weight: 6 },
    { label: "d6 uses", dice: "d6", weight: 8 },
    { label: "d8 uses", dice: "d8", weight: 5 },
    { label: "d10 uses", dice: "d10", weight: 3 },
    { label: "Unlimited", dice: null, weight: 4 }
  ],

  // --- Range categories ---
  range: [
    { label: "Close (within reach)", value: "close", weight: 4 },
    { label: "Near (short range)", value: "near", weight: 6 },
    { label: "Far (long range)", value: "far", weight: 4 }
  ],

  // --- Special omen interactions ---
  omenInteraction: [
    { label: "No omen effect", value: null, weight: 10 },
    { label: "Activates on omen use", value: "omen-activate", weight: 3 },
    { label: "Costs an omen to use safely", value: "omen-cost", weight: 2 },
    { label: "Restores an omen on kill", value: "omen-restore", weight: 1 }
  ],

  // --- Rarity modifiers (applied to weighted selection) ---
  rarity: [
    { label: "Common", multiplier: 1.0, weight: 10 },
    { label: "Uncommon", multiplier: 0.7, weight: 6 },
    { label: "Rare", multiplier: 0.3, weight: 3 },
    { label: "Unique", multiplier: 0.1, weight: 1 }
  ],

  // --- Chance rolls for optional features ---
  featureChance: {
    generalFeature: 0.85,   // chance of getting at least one general item feature
    magicFeature: 0.35,     // chance of magic feature (if allowed)
    gunFeature: 0.80,       // chance of gun feature (for firearms)
    drawback: 0.40,         // chance of a drawback
    secondFeature: 0.25     // chance of a second general feature
  }
};

// Damage dice expressions for display
const DAMAGE_DICE = ["d4", "d6", "d8", "d10", "d12", "2d6", "2d8", "2d10"];
