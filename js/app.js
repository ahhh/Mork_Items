// Entry point: initialization and event listeners.

let currentItem = null;

function readOptions() {
  return {
    includeMagicWeapons: document.getElementById("magicToggle").checked,
    includeGuns: document.getElementById("gunsToggle").checked,
    includeCurses: document.getElementById("cursesToggle").checked,
    includeAncient: document.getElementById("ancientToggle").checked,
    includeShitty: document.getElementById("shittyToggle").checked,
    includeImproved: document.getElementById("improvedToggle").checked,
    itemType: document.querySelector('input[name="itemType"]:checked').value
  };
}

function onGenerate() {
  const options = readOptions();
  currentItem = generateItem(options);
  renderItem(currentItem);
  if (currentItem) {
    document.getElementById("resultSection").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function onReroll() {
  if (!currentItem) return;
  currentItem = rerollStats(currentItem);
  renderItem(currentItem);
}

function onCopy() {
  copyItem(currentItem);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generateBtn").addEventListener("click", onGenerate);
  document.getElementById("rerollBtn").addEventListener("click", onReroll);
  document.getElementById("copyBtn").addEventListener("click", onCopy);

  // Also allow Enter key on the generate button
  document.getElementById("generateBtn").addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") onGenerate();
  });
});
