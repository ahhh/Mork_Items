const IMPROVED_FEATURES = [
  // --- Weapon: damage bonuses ---
  {
    id: "imp-bloodletter",
    label: "Bloodletter",
    allowedCategories: ["weapon"],
    description: "Deals +1 damage against any creature that is already bleeding or wounded.",
    modifiers: { damageBonus: 1 },
    weight: 4
  },
  {
    id: "imp-blessed-steel",
    label: "Blessed Steel",
    allowedCategories: ["weapon"],
    description: "Against undead and demons, this weapon deals +2 damage. The blessing smells of copper and old fear.",
    modifiers: { damageBonus: 2 },
    weight: 3
  },
  {
    id: "imp-brute-balanced",
    label: "Brute-Balanced",
    allowedCategories: ["weapon"],
    description: "Deals +2 damage against stunned, prone, or restrained enemies.",
    modifiers: { damageBonus: 2 },
    weight: 3
  },
  {
    id: "imp-serrated",
    label: "Serrated",
    allowedCategories: ["weapon"],
    description: "Wounds inflicted do not close cleanly. Target bleeds for 1 damage per round until the wound is bound.",
    modifiers: {},
    weight: 4
  },
  {
    id: "imp-widow-grip",
    label: "Widowmaker's Grip",
    allowedCategories: ["weapon"],
    description: "Roll damage twice on any attack and take the higher result.",
    modifiers: {},
    weight: 2
  },
  // --- Weapon: attack bonuses ---
  {
    id: "imp-witch-tempered",
    label: "Witch-Tempered",
    allowedCategories: ["weapon"],
    description: "+1 to all attack rolls made with this weapon. Something screamed when it was forged.",
    modifiers: { attackBonus: 1 },
    weight: 3
  },
  {
    id: "imp-steady-hand",
    label: "Steady Hand",
    allowedCategories: ["weapon"],
    description: "Negates the first -1 penalty from injury or conditions on attack rolls.",
    modifiers: { attackBonus: 1 },
    weight: 3
  },
  // --- Weapon: special ---
  {
    id: "imp-killstroke",
    label: "Killstroke Balance",
    allowedCategories: ["weapon"],
    description: "Once per combat, instead of rolling damage, deal the maximum possible result.",
    modifiers: {},
    weight: 2
  },
  {
    id: "imp-soldier-weight",
    label: "Soldier's Weight",
    allowedCategories: ["weapon"],
    description: "On a critical hit, the target is knocked to the ground. They must spend their next action rising.",
    modifiers: {},
    weight: 2
  },
  // --- Firearm: ammo bonuses ---
  {
    id: "imp-heavy-load",
    label: "Heavy Load",
    allowedCategories: ["weapon"],
    firearmOnly: true,
    description: "This firearm holds 2 extra shots before requiring a reload.",
    modifiers: { ammoBonus: 2 },
    weight: 4
  },
  {
    id: "imp-double-charged",
    label: "Double-Charged",
    allowedCategories: ["weapon"],
    firearmOnly: true,
    description: "Can be fired twice in a single round, but must reload after. The second shot deals -1 damage.",
    modifiers: { ammoBonus: 1 },
    weight: 3
  },
  {
    id: "imp-powder-packed",
    label: "Powder-Packed",
    allowedCategories: ["weapon"],
    firearmOnly: true,
    description: "Holds one additional shot and deals +1 damage on the first shot fired each combat.",
    modifiers: { ammoBonus: 1, damageBonus: 1 },
    weight: 3
  },
  // --- Non-weapon: armor and protection ---
  {
    id: "imp-iron-plating",
    label: "Iron-Plated",
    allowedCategories: ["non-weapon"],
    description: "Reduces all incoming damage by 1 while equipped. Minimum 1 damage.",
    modifiers: { armorBonus: 1 },
    weight: 3
  },
  {
    id: "imp-crude-armor",
    label: "Crude Armor Plating",
    allowedCategories: ["non-weapon"],
    description: "Grants DR 1. Heavy, crude, and deeply unglamorous. Still works.",
    modifiers: { armorBonus: 1 },
    weight: 4
  },
  // --- General: durability ---
  {
    id: "imp-bone-forged",
    label: "Bone-Forged",
    allowedCategories: ["weapon", "non-weapon"],
    description: "+2 Durability. Dense and durable, made from material that should not have survived.",
    modifiers: { durabilityBonus: 2 },
    weight: 4
  },
  {
    id: "imp-hardened",
    label: "Hardened",
    allowedCategories: ["weapon", "non-weapon"],
    description: "Ignores the first point of Durability loss each session.",
    modifiers: { durabilityBonus: 1 },
    weight: 4
  },
  // --- General: HP / luck ---
  {
    id: "imp-second-wind",
    label: "Second Wind",
    allowedCategories: ["weapon", "non-weapon"],
    description: "Once per session, when you land the killing blow on an enemy, regain 1d4 HP.",
    modifiers: { hpBonus: "1d4" },
    weight: 2
  },
  {
    id: "imp-lucky-weight",
    label: "Lucky Weight",
    allowedCategories: ["weapon", "non-weapon"],
    description: "Once per session, reroll any single die result. You must keep the second roll.",
    modifiers: {},
    weight: 2
  }
];
