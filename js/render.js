// DOM rendering and clipboard formatting.

/**
 * Render a generated item into the result section.
 *
 * @param {Object|null} item  — result from generateItem(), or null
 */
function renderItem(item) {
  const section = document.getElementById("resultSection");
  const placeholder = document.getElementById("resultPlaceholder");

  if (!item) {
    section.hidden = true;
    placeholder.hidden = false;
    placeholder.textContent = "No valid items match the current filters. Try different options.";
    return;
  }

  placeholder.hidden = true;
  section.hidden = false;

  const { base, features, stats } = item;

  // Name
  document.getElementById("itemName").textContent = buildDisplayName(base, features);

  // Category + tags
  const tagList = [base.category, ...(base.tags || [])];
  document.getElementById("itemTags").textContent = tagList.join(" · ");

  // Description
  document.getElementById("itemDescription").textContent = base.description;

  // Stats block
  renderStats(stats, base);

  // Features block
  renderFeatures(features);

  // Action buttons
  document.getElementById("rerollBtn").hidden = false;
  document.getElementById("copyBtn").hidden = false;
}

/**
 * Build a display name incorporating general features if present.
 */
function buildDisplayName(base, features) {
  const generalFeatures = features.filter(f => f.type === "feature");
  if (generalFeatures.length > 0) {
    return `${generalFeatures[0].data.label} ${base.name}`;
  }
  return base.name;
}

/**
 * Render the stats block.
 */
function renderStats(stats, base) {
  const block = document.getElementById("statsBlock");
  block.innerHTML = "";

  const rows = [];

  if (stats.damage) {
    rows.push(["Damage", stats.damage]);
  }
  if (stats.durability !== undefined) {
    rows.push(["Durability", stats.durability]);
  }
  if (stats.ammo !== undefined) {
    rows.push(["Ammo", `${stats.ammo} shot${stats.ammo !== 1 ? "s" : ""}`]);
    rows.push(["Reload", stats.reloadTime]);
  }
  if (stats.range) {
    const rangeLabels = { close: "Close", near: "Near", far: "Far" };
    rows.push(["Range", rangeLabels[stats.range] || stats.range]);
  }
  if (stats.uses !== undefined) {
    rows.push(["Uses", stats.uses]);
  }
  if (stats.burden !== undefined) {
    rows.push(["Burden", stats.burden]);
  }
  if (stats.value !== null && stats.value !== undefined) {
    rows.push(["Value", `${stats.value} silver`]);
  }
  if (stats.omenInteraction) {
    rows.push(["Omen", stats.omenInteraction]);
  }

  for (const [label, value] of rows) {
    const dt = document.createElement("dt");
    dt.textContent = label;
    const dd = document.createElement("dd");
    dd.textContent = value;
    block.appendChild(dt);
    block.appendChild(dd);
  }
}

/**
 * Render the features/drawbacks block.
 */
function renderFeatures(features) {
  const block = document.getElementById("featuresBlock");
  block.innerHTML = "";

  if (features.length === 0) {
    block.hidden = true;
    return;
  }

  block.hidden = false;

  for (const f of features) {
    const { data, type } = f;
    const article = document.createElement("article");
    article.className = `feature feature--${type}`;

    const heading = document.createElement("h3");
    heading.className = "feature__label";
    heading.textContent = featureTypePrefix(type) + (data.label || data.name || "");

    const desc = document.createElement("p");
    desc.className = "feature__description";
    desc.textContent = data.description || "";

    article.appendChild(heading);
    article.appendChild(desc);
    block.appendChild(article);
  }
}

function featureTypePrefix(type) {
  switch (type) {
    case "magic":   return "✦ ";
    case "gun":     return "⚙ ";
    case "drawback": return "✖ ";
    default:        return "";
  }
}

/**
 * Format the current item as plain text for clipboard.
 *
 * @param {Object} item
 * @returns {string}
 */
function formatItemText(item) {
  if (!item) return "";
  const { base, features, stats } = item;

  const lines = [];
  lines.push(buildDisplayName(base, features).toUpperCase());
  lines.push([base.category, ...(base.tags || [])].join(" · "));
  lines.push("");
  lines.push(base.description);
  lines.push("");

  // Stats
  if (stats.damage)       lines.push(`Damage: ${stats.damage}`);
  if (stats.durability)   lines.push(`Durability: ${stats.durability}`);
  if (stats.ammo)         lines.push(`Ammo: ${stats.ammo} shots | Reload: ${stats.reloadTime}`);
  if (stats.range)        lines.push(`Range: ${stats.range}`);
  if (stats.uses)         lines.push(`Uses: ${stats.uses}`);
  if (stats.burden)       lines.push(`Burden: ${stats.burden}`);
  if (stats.value)        lines.push(`Value: ${stats.value} silver`);
  if (stats.omenInteraction) lines.push(`Omen: ${stats.omenInteraction}`);

  // Features
  const nonGeneralFeatures = features.filter(f => f.type !== "feature");
  if (nonGeneralFeatures.length > 0) {
    lines.push("");
    for (const f of nonGeneralFeatures) {
      const prefix = featureTypePrefix(f.type);
      lines.push(`${prefix}${f.data.label}: ${f.data.description}`);
    }
  }

  // Second general feature if present
  const extras = features.filter(f => f.type === "feature").slice(1);
  for (const f of extras) {
    lines.push(`${f.data.label}: ${f.data.description}`);
  }

  return lines.join("\n");
}

/**
 * Copy the current item text to clipboard.
 *
 * @param {Object} item
 */
function copyItem(item) {
  const text = formatItemText(item);
  if (!text) return;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      flashCopyButton();
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  flashCopyButton();
}

function flashCopyButton() {
  const btn = document.getElementById("copyBtn");
  const original = btn.textContent;
  btn.textContent = "Copied!";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 1500);
}
