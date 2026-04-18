// Core generation logic.
// Assembles a final item object from base item + optional features + stats.

/**
 * Generate a complete item given the current UI options.
 *
 * @param {Object} options
 * @param {boolean} options.includeMagicWeapons
 * @param {boolean} options.includeGuns
 * @param {string}  options.itemType  — "all" | "weapon" | "non-weapon"
 * @returns {Object|null} generated item, or null if pool is empty
 */
function generateItem(options) {
  // Step 1: Build the eligible pool
  const pool = buildPool(options);
  if (pool.length === 0) return null;

  // Step 2: Pick a base item (weighted)
  const base = weightedPick(pool);

  // Step 3: Roll optional features
  const features = [];
  const { featureChance } = STAT_TABLES;

  // General item feature(s)
  if (chance(featureChance.generalFeature)) {
    features.push({ type: "feature", data: weightedPick(ITEM_FEATURES) });
    if (chance(featureChance.secondFeature)) {
      const second = weightedPick(ITEM_FEATURES);
      if (second.id !== features[0].data.id) {
        features.push({ type: "feature", data: second });
      }
    }
  }

  // Magic feature — always applies when magic is toggled on
  if (magicEligible(base, options)) {
    const eligible = filterMagicFeatures(MAGIC_FEATURES, base);
    if (eligible.length > 0) {
      features.push({ type: "magic", data: weightedPick(eligible) });
    }
  }

  // Gun feature (only for firearms)
  if (base.firearm && chance(featureChance.gunFeature)) {
    features.push({ type: "gun", data: weightedPick(GUN_FEATURES) });
  }

  // Ancient quality — always applies when ancient toggle is on
  if (options.includeAncient) {
    features.push({ type: "ancient", data: weightedPick(ANCIENT_FEATURES) });
  }

  // Shitty quality — always applies when shitty toggle is on
  if (options.includeShitty) {
    features.push({ type: "shitty", data: weightedPick(SHITTY_FEATURES) });
  }

  // Improved quality — always applies when improved toggle is on
  if (options.includeImproved) {
    const eligible = filterImprovedFeatures(IMPROVED_FEATURES, base);
    if (eligible.length > 0) {
      features.push({ type: "improved", data: weightedPick(eligible) });
    }
  }

  // Drawback — always applies when curses toggle is on, never when off
  const drawbackEligible = base.curseAllowed !== false;
  if (drawbackEligible && options.includeCurses) {
    features.push({ type: "drawback", data: weightedPick(DRAWBACKS) });
  }

  // Step 4: Roll stats
  const stats = rollStats(base);

  // Step 5: Assemble and return
  return {
    base,
    features,
    stats
  };
}

/**
 * Roll random stats for an item, starting from its base stat profile.
 *
 * @param {Object} base  — a base weapon or item object
 * @returns {Object} resolved stats
 */
function rollStats(base) {
  const result = {};
  const src = base.stats || {};

  // Damage
  if (src.damage) {
    result.damage = src.damage; // keep dice expression for display
    result.damageRolled = rollDice(src.damage);
  }

  // Durability — use base or roll from table
  if (src.durability !== undefined) {
    result.durability = src.durability;
  } else {
    result.durability = weightedPick(STAT_TABLES.durability).value;
  }

  // Ammo (firearms)
  if (src.ammo !== undefined) {
    result.ammo = src.ammo;
    result.reloadTime = weightedPick(STAT_TABLES.reloadTime).label;
  }

  // Value
  const valueEntry = weightedPick(STAT_TABLES.value);
  result.valueDice = valueEntry.dice;
  result.value = valueEntry.dice ? rollDice(valueEntry.dice) : null;
  result.valueLabel = valueEntry.label;

  // Burden
  if (src.burden !== undefined) {
    result.burden = src.burden;
  } else {
    result.burden = weightedPick(STAT_TABLES.burden).value;
  }

  // Uses (for non-weapons)
  if (src.uses !== undefined) {
    if (src.uses === "unlimited") {
      result.uses = "Unlimited";
    } else if (typeof src.uses === "number") {
      result.uses = src.uses;
    } else {
      result.uses = rollDice(src.uses);
    }
  }

  // Range
  if (src.range) {
    result.range = src.range;
  }

  // Omen interaction (occasional)
  if (chance(0.15)) {
    const omen = weightedPick(STAT_TABLES.omenInteraction.filter(o => o.value !== null));
    if (omen) result.omenInteraction = omen.label;
  }

  return result;
}

/**
 * Reroll only the stats of an existing item, preserving all features.
 *
 * @param {Object} item  — previously generated item object
 * @returns {Object} updated item with new stats
 */
function rerollStats(item) {
  return {
    ...item,
    stats: rollStats(item.base)
  };
}
