// Random helpers, dice rolling, and weighted selection.

/**
 * Roll a dice expression string like "d6", "2d8", "d4+1", "d10-1".
 * Returns a numeric result.
 */
function rollDice(expr) {
  if (!expr || expr === "unlimited") return null;

  const match = String(expr).match(/^(\d+)?d(\d+)([+-]\d+)?$/i);
  if (!match) {
    const fixed = parseInt(expr, 10);
    return isNaN(fixed) ? null : fixed;
  }

  const count = parseInt(match[1] || "1", 10);
  const sides = parseInt(match[2], 10);
  const bonus = parseInt(match[3] || "0", 10);

  let total = bonus;
  for (let i = 0; i < count; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}

/**
 * Pick a random integer in [min, max] inclusive.
 */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Pick a random element from an array with equal probability.
 */
function pick(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Weighted random selection. Each item in arr must have a numeric `weight` property.
 * Higher weight = more likely to be chosen.
 */
function weightedPick(arr) {
  if (!arr || arr.length === 0) return null;

  const total = arr.reduce((sum, item) => sum + (item.weight || 1), 0);
  let roll = Math.random() * total;

  for (const item of arr) {
    roll -= item.weight || 1;
    if (roll <= 0) return item;
  }

  return arr[arr.length - 1];
}

/**
 * Returns true with probability p (0–1).
 */
function chance(p) {
  return Math.random() < p;
}

/**
 * Shuffle an array in place using Fisher-Yates.
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
