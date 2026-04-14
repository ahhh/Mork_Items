const SHITTY_FEATURES = [
  // --- Functional problems ---
  { id: "sh-sticky", label: "Sticky", description: "Coated in something that never fully dries. Gets on your hands. Gets on everything.", weight: 9 },
  { id: "sh-poor-balance", label: "Poorly Balanced", description: "Weight is distributed wrong. You notice it every time you use it.", weight: 8 },
  { id: "sh-sharp-edge", label: "Sharp Where It Shouldn't Be", description: "An edge or protrusion in exactly the wrong place draws blood from the user on a bad grip.", weight: 8 },
  { id: "sh-wobbles", label: "Wobbles", description: "Something is loose inside. It wobbles when moved. The wobble cannot be fixed.", weight: 9 },
  { id: "sh-slippery", label: "Slippery Grip", description: "The handle offers poor purchase. Wet hands make it worse.", weight: 9 },
  { id: "sh-smells-bad", label: "Smells Terrible", description: "A deep, persistent mundane odour — rancid fat, old sweat, something biological. People notice and step back.", weight: 9 },
  { id: "sh-difficult-open", label: "Difficult to Open", description: "Whatever moves on it — a latch, a cover, a mechanism — requires more force than it should.", weight: 8 },
  { id: "sh-catches-on-things", label: "Catches on Everything", description: "A protrusion, snag point, or awkward shape that hooks on clothing, pack straps, and doorframes constantly.", weight: 9 },
  // --- Cosmetic indignities ---
  { id: "sh-garish", label: "Garish Colour", description: "Painted or stained in a colour that communicates nothing useful. Bright, wrong, impossible to ignore.", weight: 7 },
  { id: "sh-embarrassing-inscription", label: "Embarrassing Inscription", description: "A name, phrase, or crude image has been worked into it. Someone thought it was funny. It was not funny.", weight: 7 },
  { id: "sh-ugly", label: "Simply Ugly", description: "No specific flaw. Just unpleasant to look at in a way that is hard to articulate.", weight: 8 },
  { id: "sh-oversized", label: "Slightly Too Large", description: "Not unusably so. Just large enough to be awkward in every situation.", weight: 8 },
  { id: "sh-undersized", label: "Slightly Too Small", description: "Clearly made for someone with smaller hands, a smaller frame, or a smaller idea of how useful things should be.", weight: 8 },
  { id: "sh-colour-comes-off", label: "Colour Comes Off on Hands", description: "The finish or dye transfers to skin and clothing with handling. It does not wash off easily.", weight: 8 },
  // --- Social problems ---
  { id: "sh-stolen-looking", label: "Looks Stolen", description: "Someone else's name or mark is on it. Guards and merchants notice.", weight: 7 },
  { id: "sh-cursed-reputation", label: "Known Bad Reputation", description: "Anyone who recognises it knows it belonged to someone who died embarrassingly. They will mention this.", weight: 6 },
  { id: "sh-attracts-beggars", label: "Attracts Unwanted Attention", description: "Something about it draws beggars, hawkers, and the simply curious. They approach before you can discourage them.", weight: 7 },
  // --- Minor inconveniences ---
  { id: "sh-loses-small-things", label: "Things Get Lost Near It", description: "Small objects kept near this item — coins, buttons, needles — go missing at an elevated rate.", weight: 6 },
  { id: "sh-always-wet", label: "Always Slightly Damp", description: "Never soaking. Always damp. The source of the moisture is unclear.", weight: 7 },
  { id: "sh-impossible-to-store", label: "Awkward to Store", description: "No matter how it is positioned, it does not fit neatly. It takes up more space than it occupies.", weight: 8 },
  { id: "sh-fades", label: "Any Mark on It Fades", description: "Attempts to personalise it — carving, paint, engraving — disappear within a week.", weight: 6 }
];
