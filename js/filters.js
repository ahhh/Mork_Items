// Filtering logic: builds the allowed item pool from user options.

/**
 * Build the pool of base items eligible for selection given the current options.
 *
 * @param {Object} options
 * @param {boolean} options.includeMagicWeapons
 * @param {boolean} options.includeGuns
 * @param {string}  options.itemType  — "all" | "weapon" | "non-weapon"
 * @returns {Array} filtered items from BASE_WEAPONS and/or BASE_ITEMS
 */
function buildPool(options) {
  const { includeGuns, itemType } = options;

  let pool = [];

  if (itemType === "all" || itemType === "weapon") {
    let weapons = BASE_WEAPONS.slice();
    if (!includeGuns) {
      weapons = weapons.filter(w => !w.firearm);
    }
    pool = pool.concat(weapons);
  }

  if (itemType === "all" || itemType === "non-weapon") {
    pool = pool.concat(BASE_ITEMS);
  }

  return pool;
}

/**
 * Determine whether a magic feature can be applied to a given item given options.
 *
 * @param {Object} item
 * @param {Object} options
 * @returns {boolean}
 */
function magicEligible(item, options) {
  if (!item.magicAllowed) return false;
  if (item.category === "weapon" && !options.includeMagicWeapons) return false;
  return true;
}

/**
 * Filter magic features to those compatible with the given item's category.
 *
 * @param {Array}  features  — MAGIC_FEATURES array
 * @param {Object} item
 * @returns {Array} compatible magic features
 */
function filterMagicFeatures(features, item) {
  return features.filter(f =>
    !f.allowedCategories ||
    f.allowedCategories.includes(item.category) ||
    f.allowedCategories.includes("all")
  );
}
