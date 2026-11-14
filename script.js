/* Maison Pickle — school project redesign
   Menu data from maisonpickle.com (Nov 2026).
   fav: true  = dish guests rave about in reviews
   share: true = reviewers say it easily feeds 2+          */

const MENUS = {
  dinner: [
    { group: "Break Bread", note: "Pull-apart bread, $18 each. Serves 3–4.", items: [
      { name: "Pull Apart Honey and Butter", price: "18", fav: true, share: true },
      { name: "Pull Apart Garlic and Parmesan", price: "18", fav: true, share: true },
      { name: "Pull Apart Bread and Butter", price: "18", share: true },
    ]},
    { group: "French Dip", note: "On house-baked French bread with pan-scraped jus and big dill pickles.", items: [
      { name: "Deluxe", desc: "Sirloin of beef, fried onions, horseradish aioli, caramelized onions, gruyère fondue", price: "29", fav: true, share: true },
      { name: "Classic", desc: "Sirloin of beef, horseradish aioli, sea salt", price: "27", fav: true, share: true },
      { name: "Reuben", desc: "Sirloin of beef, gruyère, sauerkraut, Russian dressing, onion au jus", price: "29" },
      { name: "French Onion Steak Melt", desc: "Sirloin of beef, mozzarella, French onion soup reduction, coleslaw", price: "29" },
      { name: "Cheesesteak à la Maison", desc: "Sirloin of beef, cremini mushrooms, caramelized onions, cheese sauce, coleslaw", price: "28" },
    ]},
    { group: "Starters · Cold", items: [
      { name: "D'olived Eggs", desc: "EVOO, chives, Maldon salt", price: "3.50 ea", fav: true },
      { name: "Caesar Salad", desc: "Croutons, Parmigiano Reggiano", price: "16" },
      { name: "Shrimp Cocktail by the Piece", desc: "4 piece minimum, cocktail sauce, lemon", price: "3.50 ea" },
      { name: "Steak Tartare", desc: "Frisée salad, toast points, herb aioli", price: "25" },
      { name: "Tuna Tartare", desc: "Dijon vinaigrette, herb aioli", price: "24" },
      { name: "Chicken Liver Mousse", desc: "Pickled vegetables, onion marmalade, toast points", price: "19" },
      { name: "Pickled Crudités", desc: "Seasonal pickled vegetables, herb aioli", price: "16" },
    ]},
    { group: "Starters · Hot", items: [
      { name: "French Onion Soup au Gratin", desc: "Toasted baguette, gruyère", price: "18", fav: true },
      { name: "Crispy Pickled Artichoke", desc: "Spicy aioli, pickled mustard seed", price: "16", fav: true },
      { name: "Crispy Calamari", desc: "Fra diavolo sauce, garlic bread", price: "24", share: true },
      { name: "Bacon Steak", desc: "Maple syrup, cilantro, chilis, mustard seeds", price: "21" },
      { name: "Artichoke & Spinach Dip Classique", desc: "Mozzarella, fresh herbs, toasted bread", price: "19", share: true },
      { name: "Jumbo Lump Crab Cake", desc: "Shrimp, frisée, haricots verts, orange, citrus vinaigrette", price: "25" },
      { name: "Lobster 'Escargot'", desc: "Herb butter, puff pastry, fresh Maine lobster", price: "25" },
    ]},
    { group: "Mac and Cheese", note: "Built for the table.", items: [
      { name: "Classique", price: "21", fav: true, share: true },
      { name: "Buffalo Chicken with Blue Cheese Drizzle", price: "23", share: true },
      { name: "Lobster Mac", price: "38", fav: true, share: true },
    ]},
    { group: "Counter Classics", items: [
      { name: "Patty Melt", desc: "Jacob's beef blend, brioche, melted cheddar, Maison sauce, au jus, crispy onions, coleslaw, big dill pickles", price: "24", fav: true },
      { name: "Fried Chicken, Bacon 'N' Toast", desc: "Buttermilk fried chicken, nitrate-free bacon, maple butter & syrup", price: "27", fav: true, share: true },
      { name: "Hot Honey Chicken 'N' Toast", desc: "Spicy buttermilk fried chicken, clover honey", price: "27", fav: true, share: true },
      { name: "Maison Bolognese Spaghetti", desc: "Jacob's prime beef blend, house marinara, Parmigiano", price: "26" },
      { name: "Chop and Grill Chicken", desc: "Tomato & cucumber relish, lemon dill yogurt", price: "26" },
      { name: "Eggplant Parmigiana", desc: "House marinara, mozzarella, fresh basil", price: "27" },
      { name: "Roasted Chicken Adobo", desc: "Wild rice, salsa verde, peppers, Cajun seasoning", price: "29" },
      { name: "Lasagna à la Maison", desc: "Deconstructed, with Jacob's beef sauce, ricotta, béchamel, mozzarella", price: "25" },
    ]},
    { group: "Salads", items: [
      { name: "Buttermilk Fried Chicken Caesar", desc: "Croutons, Parmigiano. Sub salmon +8, shrimp +9", price: "25", fav: true, share: true },
      { name: "Tuna Niçoise", desc: "Pepper-crusted tuna, fingerlings, haricots verts, egg, olives", price: "33" },
      { name: "Chopped Salad", desc: "Iceberg, tomato, bacon, blue cheese, fried onions, buttermilk dressing", price: "23" },
      { name: "Beet Salad", desc: "Roasted beet, feta, candied pecans, orange, frisée", price: "26" },
    ]},
    { group: "Steaks, Chops & Cuts", items: [
      { name: "Ribeye 10oz", desc: "Garlic butter, Maison frites", price: "42" },
      { name: "Bar Steak Frites", desc: "12oz center-cut round steak, Maison frites", price: "35" },
      { name: "Lamb Chops", desc: "Green beans, roasted potatoes, lemon butter, salsa verde", price: "46" },
      { name: "Beef Bourguignon", desc: "Braised in red wine with mushrooms and bacon", price: "36" },
    ]},
    { group: "Seafood", items: [
      { name: "Maine Mussels", desc: "Garlic, tomatoes, white wine", price: "32" },
      { name: "Seafood Pasta", desc: "Mussels, shrimp, creamy pesto, parmesan", price: "36" },
      { name: "Shrimp Parmigiana à la Vodka", desc: "Spaghetti, mozzarella, basil", price: "36" },
      { name: "Cedar Roasted Canadian Salmon", desc: "Fingerlings, asparagus, leeks, lemon beurre fondue", price: "33" },
      { name: "Salmon Skewer", desc: "Garlic-dill wild salmon, wild rice, Dijon honey mustard", price: "26" },
      { name: "Jumbo Twin Lump Crab Cakes", desc: "Frisée, haricots verts, orange, citrus vinaigrette", price: "38" },
    ]},
    { group: "Grande Cuts for Two", items: [
      { name: "36oz Prime Tomahawk Ribeye", desc: "Bone marrow, creamed spinach, frites, vine tomatoes, béarnaise", price: "165", share: true },
      { name: "Surf N' Turf", desc: "Bone-in filet, jumbo shrimp, mashed potatoes, asparagus, beurre blanc", price: "65", share: true },
    ]},
    { group: "For the Table", items: [
      { name: "Classique Maison Frites", desc: "Add gruyère fondue +2 · with bacon +4", price: "14", fav: true, share: true },
      { name: "Creamed Spinach", price: "14" },
      { name: "Mashed Potatoes with Butter", price: "14" },
      { name: "Grilled Asparagus", desc: "Garlic, EVOO", price: "14" },
    ]},
  ],

  brunch: [
    { group: "Break Bread", note: "Pull-apart bread, $18 each. Serves 3–4.", items: [
      { name: "Pull Apart Honey and Butter", price: "18", fav: true, share: true },
      { name: "Pull Apart Garlic and Parmesan", price: "18", fav: true, share: true },
      { name: "Pull Apart Bread and Butter", price: "18", share: true },
    ]},
    { group: "Challah French Toast", note: "Thick-cut, stacked tall. Guests split these.", items: [
      { name: "Fried Chicken 'N' Toast", desc: "Buttermilk fried chicken, nitrate-free bacon, maple butter & syrup", price: "27", fav: true, share: true },
      { name: "Hot Honey Chicken 'N' Toast", desc: "Spicy buttermilk fried chicken, clover honey", price: "27", fav: true, share: true },
      { name: "Lumber Jack Stack", desc: "French toast, breakfast sausage, crispy bacon, sunny-side eggs", price: "27", fav: true, share: true },
      { name: "Tiramisu French Toast", desc: "Coffee syrup, mascarpone cream, cocoa", price: "26", fav: true, share: true },
      { name: "Berries -n- Cream", desc: "Berry medley, fresh whipped cream", price: "26", share: true },
      { name: "Maple Butter -n- Syrup", price: "25", share: true },
    ]},
    { group: "French Dip", note: "On house-baked French bread with pan-scraped jus and big dill pickles.", items: [
      { name: "Deluxe", desc: "Sirloin, fried onions, horseradish aioli, caramelized onions, gruyère fondue", price: "29", fav: true, share: true },
      { name: "Classic", desc: "Sirloin, horseradish aioli, sea salt", price: "27", fav: true, share: true },
      { name: "Reuben", desc: "Sirloin, gruyère, sauerkraut, Russian dressing, onion au jus", price: "29" },
      { name: "French Onion Steak Melt", desc: "Sirloin, mozzarella, French onion soup reduction, coleslaw", price: "29", fav: true },
      { name: "Cheesesteak à la Maison", desc: "Cremini mushrooms, caramelized onions, cheese sauce, coleslaw", price: "28" },
    ]},
    { group: "Eggs and Toast", note: "On buttermilk Texas toast with Vermont cheddar.", items: [
      { name: "Texas Toast Egg and Cheese", price: "19" },
      { name: "Bacon, Egg and Cheese", price: "21" },
      { name: "Ham, Egg and Cheese", price: "21" },
      { name: "Sausage, Egg and Cheese", price: "21" },
    ]},
    { group: "Omelettes", items: [
      { name: "Florentine", desc: "Greek feta, baby spinach", price: "25" },
      { name: "Lyonnaise", desc: "Fingerling potatoes, caramelized onions, bacon & gruyère", price: "26" },
      { name: "Caprese", desc: "Mozzarella, basil, tomato", price: "25" },
    ]},
    { group: "Counter Classics", items: [
      { name: "Patty Melt", desc: "Jacob's beef blend, cheddar, Maison sauce, au jus, crispy onions. Add fries +5", price: "24", fav: true },
      { name: "Croque Madame", desc: "Black forest ham, gruyère, sunny-side egg. Add fried chicken +6", price: "27" },
      { name: "Steak and Eggs", desc: "Pan-seared ribeye, breakfast potatoes, salsa verde", price: "35" },
      { name: "Chop and Grill Chicken", desc: "Tomato & cucumber relish, lemon dill yogurt", price: "26" },
      { name: "Cedar Roasted Canadian Salmon", desc: "Fingerlings, asparagus, leeks, lemon beurre fondue", price: "33" },
    ]},
    { group: "Starters", items: [
      { name: "D'olived Eggs", desc: "EVOO, chives, Maldon salt", price: "3.50 ea", fav: true },
      { name: "French Onion Soup au Gratin", desc: "Gruyère, baguette", price: "18", fav: true },
      { name: "Crispy Pickled Artichoke", desc: "Spicy aioli, pickled mustard seed", price: "16", fav: true },
      { name: "Caesar Salad", desc: "Croutons, Parmigiano Reggiano", price: "16" },
      { name: "Seasonal Market Soup", desc: "Ask your server", price: "15" },
      { name: "Bacon Steak", desc: "Maple syrup, cilantro, chilis, mustard seeds", price: "21" },
      { name: "Shrimp Cocktail by the Piece", desc: "4 piece minimum", price: "3.50 ea" },
      { name: "Steak Tartare", desc: "Frisée, toast points, herb aioli", price: "25" },
      { name: "Tuna Tartare", desc: "Dijon vinaigrette, herb aioli", price: "24" },
      { name: "Chicken Liver Mousse", desc: "Pickled vegetables, onion marmalade", price: "19" },
      { name: "Jumbo Lump Crab Cake", desc: "Frisée, haricots verts, citrus vinaigrette", price: "25" },
      { name: "Pickled Crudités", desc: "Seasonal pickled vegetables, herb aioli", price: "16" },
    ]},
    { group: "Salads", items: [
      { name: "Buttermilk Fried Chicken Caesar", desc: "Sub salmon +8, shrimp +9", price: "25", fav: true, share: true },
      { name: "Tuna Niçoise", desc: "Pepper-crusted tuna, fingerlings, egg, olives", price: "33" },
      { name: "Beet Salad", desc: "Roasted beet, feta, candied pecans, orange", price: "26" },
    ]},
    { group: "For the Table", items: [
      { name: "Mac and Cheese Classique", price: "21", fav: true, share: true },
      { name: "Buffalo Chicken Mac", price: "23", share: true },
      { name: "Lobster Mac", price: "38", fav: true, share: true },
      { name: "Gruyère Fondue Fries", desc: "With bacon $18", price: "16", fav: true, share: true },
      { name: "Maison Frites", price: "14" },
      { name: "Breakfast Meat", desc: "Bacon, sausage or ham", price: "12" },
      { name: "Grilled Asparagus", price: "14" },
      { name: "Fresh Fruit", price: "10" },
    ]},
  ],

  drinks: [
    { group: "Maison Classics", note: "Mini Martini Hour at the bar, Mon–Fri 4–6:30pm.", items: [
      { name: "Maison Martini", desc: "Fords gin, Dolin dry vermouth, pickle brine, orange citrate bitters" },
      { name: "El Segundo Wallet", desc: "Tequila, blood orange, Ancho Reyes, agave, mole bitters, lime" },
      { name: "Smoke and Fire", desc: "Montelobos mezcal, falernum, lime, pamplemousse rosé, hellfire shrub" },
      { name: "Jacob's Collins", desc: "Greenhook Ginsmith gin, velvet falernum, lime, grapefruit soda" },
      { name: "The Razzle", desc: "Vodka, elderflower liqueur, lemon, fresh berries" },
    ]},
    { group: "Beers", items: [
      { name: "Jacob's Pickles Biscuit Beer™", desc: "5.0%" },
      { name: "Allagash White", desc: "5.0%" },
      { name: "Maine Lunch IPA", desc: "7.0%" },
      { name: "Left Hand Milk Stout", desc: "6.0%" },
      { name: "Orchard Hill Seasonal Cider", desc: "6.9%" },
      { name: "Athletic N/A IPA", desc: "0.4%" },
    ]},
    { group: "Sparkling", items: [
      { name: "Blanc de Noirs, Gruet", desc: "New Mexico N.V." },
      { name: "Brut Rosé, François Montand", desc: "France N.V." },
      { name: "Champagne, Lallier", desc: "France N.V." },
      { name: "La Luca Prosecco 187ml", desc: "Veneto, Italy" },
      { name: "Pierre Chavin Zero (alcohol-free)", desc: "Sparkling Chardonnay or Rosé" },
    ]},
    { group: "White & Rosé", items: [
      { name: "Chardonnay, Seghesio", desc: "Sonoma & Monterey, California" },
      { name: "Sauvignon Blanc, Château Bonnet", desc: "Entre-deux-Mers, Bordeaux" },
      { name: "Off-Dry Riesling, Clean Slate", desc: "Mosel, Germany" },
      { name: "Organic Grüner Veltliner, Huber", desc: "Niederösterreich, Austria" },
      { name: "Organic Pinot Grigio, Tudajo", desc: "Veneto, Italy" },
      { name: "White Pinot Noir, Lemelson", desc: "Willamette Valley, Oregon" },
      { name: "Rosé, Château Miraval Studio", desc: "Méditerranée, France" },
      { name: "Rosé d'Anjou, Domaine des Nouelles", desc: "Loire, France" },
    ]},
    { group: "Red", items: [
      { name: "Cabernet Sauvignon, Twenty Bench", desc: "North Coast, California" },
      { name: "Rioja Reserva, Cune", desc: "Rioja, Spain" },
      { name: "Pinot Noir, Stringtown", desc: "Oregon" },
      { name: "Shiraz, Yalumba", desc: "Barossa Valley, Australia" },
      { name: "Côtes du Rhône, Esprit", desc: "Rhône Valley, France" },
    ]},
  ],

  cakes: [
    { group: "24-Layer Cakes", note: "Baked by our in-house pastry department. Ask about slices in the dining room.", items: [
      { name: "24-Layer Chocolate Cake", desc: "The one everyone posts about", price: "165 whole", fav: true, share: true },
      { name: "24-Layer Confetti Cake", desc: "Birthday cake energy, times 24", price: "165 whole", fav: true, share: true },
      { name: "24-Layer Pickle Cake", desc: "Yes, really. Ask your server", price: "165 whole", share: true },
    ]},
    { group: "Whole Pies & Cheesecake", note: "Email events@picklehospitality.com at least 48 hours ahead.", items: [
      { name: "Seasonal Cheesecake", price: "95 whole", share: true },
      { name: "Oreo Ice Box Pie", price: "55 whole", share: true },
      { name: "Key Lime Pie", price: "55 whole", share: true },
    ]},
  ],
};

const REVIEWS = [
  { q: "The pull-apart bread was phenomenal—so soft and absolutely oozing with rich honey butter.", who: "Raine", t: "food" },
  { q: "…the best chocolate cake I've ever had. I couldn't stop thinking about it for a whole week…", who: "Celine S.", t: "food" },
  { q: "This is the best French Dip sandwich I've ever had.", who: "Lexie G.", t: "food" },
  { q: "The Deluxe French dip is probably the best in the city for the price. Don't skip on the pull apart bread, the garlic parm variation is life changing.", who: "Lex R.", t: "food" },
  { q: "Pull apart bread with honey butter is rightfully acclaimed, as is the mac and cheese (the best I've ever ever had).", who: "Adam A.", t: "food" },
  { q: "Highly recommend the fried artichokes (10/10), deluxe French dip, and steak frites.", who: "Gabrielle", t: "food" },
  { q: "Dimly yet beautifully lit, portraits all over the walls, and the back room glowing with a sexy pink neon…", who: "Joey G.", t: "vibe" },
  { q: "Amazing vibes and food. Feels like a hidden gem for a classy night out.", who: "Felipe C.", t: "vibe" },
  { q: "…the playlist will have you dancing between bites!", who: "Marion B.", t: "vibe" },
  { q: "Amazing Friday night jazz & burlesque show. I absolutely love everything about this place.", who: "Michelle M.", t: "vibe" },
  { q: "Always great service and delicious food every time we come here.", who: "Darnell T.", t: "service" },
  { q: "They sat us down immediately for Brunch… The service was excellent.", who: "Simone S.", t: "service" },
  { q: "…very accommodating of my son and his service dog. Highly recommend the bread!", who: "Courtney D.", t: "service" },
  { q: "The food was delicious but absolutely huge, like you can share every dish between at least two people huge.", who: "Jenni", t: "portions" },
  { q: "I can typically turn one entrée into 2-3 total meals… Sleeper hit: the d'olived eggs.", who: "Dominique B.", t: "portions" },
  { q: "It's huge. Took me 3 days to eat the cake.", who: "Drealay", t: "portions" },
  { q: "Great food, big portions, reasonable prices for NYC.", who: "Gabrielle", t: "portions" },
];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ---------- mobile nav ---------- */
const toggle = $(".nav-toggle");
const nav = $("#site-nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
$$("#site-nav a").forEach((a) => a.addEventListener("click", () => {
  toggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}));

/* ---------- today's hours in the top bar ---------- */
(() => {
  const day = new Date().getDay(); // 0 Sun ... 6 Sat
  $("#today-hours").textContent = (day === 0 || day === 6) ? "9am–10pm" : "11am–10pm";
})();

/* ---------- menu ---------- */
let currentMenu = "dinner";
const favOnly = $("#fav-only");

function renderMenu() {
  const panel = $("#menu-panel");
  const groups = MENUS[currentMenu]
    .map((g) => ({ ...g, items: favOnly.checked ? g.items.filter((i) => i.fav) : g.items }))
    .filter((g) => g.items.length);

  if (!groups.length) {
    panel.innerHTML = `<p class="menu-empty">No starred items on this menu. Untick “Guest favourites only” to see everything.</p>`;
    return;
  }

  panel.innerHTML = groups.map((g, gi) => `
    <div class="menu-group" style="--d:${Math.min(gi, 8)}">
      <h3>${esc(g.group)}</h3>
      ${g.note ? `<p class="group-note">${esc(g.note)}</p>` : ""}
      ${g.items.map((i) => `
        <div class="menu-item${i.fav ? " is-fav" : ""}">
          <div class="item-head">
            <span class="item-name">${esc(i.name)}${(i.fav || i.share) ? `<span class="item-badges">${i.fav ? '<span class="badge badge-fav">★ Fave</span>' : ""}${i.share ? '<span class="badge badge-share">Share</span>' : ""}</span>` : ""}</span>
            ${i.price ? `<span class="item-dots"></span><span class="item-price">$${esc(i.price)}</span>` : ""}
          </div>
          ${i.desc ? `<p class="item-desc">${esc(i.desc)}</p>` : ""}
        </div>`).join("")}
    </div>`).join("");
}

$$(".tabs [role=tab]").forEach((tab) => tab.addEventListener("click", () => {
  $$(".tabs [role=tab]").forEach((t) => t.setAttribute("aria-selected", "false"));
  tab.setAttribute("aria-selected", "true");
  currentMenu = tab.dataset.menu;
  moveTabIndicator();
  renderMenu();
}));
favOnly.addEventListener("change", renderMenu);
renderMenu();

/* ---------- share planner ---------- */
let party = 2;
let meal = "brunch";

function plan(n, m) {
  const breads = Math.max(1, Math.ceil(n / 4));
  const mains = Math.max(1, Math.ceil(n / 2));
  const mac = n >= 4 ? Math.floor(n / 4) : 0;
  const cake = Math.max(1, Math.ceil(n / 3));
  const rows = [
    [breads, `Pull-apart bread${breads > 1 ? "s" : ""}`, "Honey butter or garlic parm. Guests can't agree, so get both if you can."],
    [mains, m === "brunch" ? `Main${mains > 1 ? "s" : ""} to split` : `Main${mains > 1 ? "s" : ""} to split`,
      m === "brunch" ? "Chicken 'N' Toast and a French dip make a perfect pair." : "Start with a Deluxe French dip. Add a patty melt for variety."],
  ];
  if (mac) rows.push([mac, "Mac & cheese for the table", "It's listed as a side but it's practically a meal."]);
  rows.push([cake, `Slice${cake > 1 ? "s" : ""} of 24-layer cake`, "Shared, with extra forks. Birthday? Ask for the sparkler."]);
  return rows;
}

function renderPlan() {
  $("#party-size").textContent = party;
  $("#planner-result").innerHTML = plan(party, meal).map(([q, what, tip], i) =>
    `<li style="--d:${i}"><span class="qty">${q}×</span><span class="what">${esc(what)}<span class="tip">${esc(tip)}</span></span></li>`
  ).join("");
}
$$(".stepper button").forEach((b) => b.addEventListener("click", () => {
  party = Math.min(12, Math.max(1, party + Number(b.dataset.step)));
  renderPlan();
  const out = $("#party-size");
  out.classList.remove("bump");
  void out.offsetWidth; // restart the animation
  out.classList.add("bump");
}));
$$(".seg button").forEach((b) => b.addEventListener("click", () => {
  $$(".seg button").forEach((x) => x.setAttribute("aria-checked", "false"));
  b.setAttribute("aria-checked", "true");
  meal = b.dataset.meal;
  renderPlan();
}));
renderPlan();

/* ---------- reviews ---------- */
const topicLabel = { food: "on the food", vibe: "on the vibe", service: "on service", portions: "on portions" };
function renderReviews(topic = "all") {
  const list = topic === "all" ? REVIEWS : REVIEWS.filter((r) => r.t === topic);
  $("#review-grid").innerHTML = list.map((r, i) => `
    <article class="review" style="animation-delay:${i * 40}ms">
      <div class="qmark" aria-hidden="true">“</div>
      <blockquote>“${esc(r.q)}”</blockquote>
      <footer><span class="who">${esc(r.who)}</span><span class="topic">${topicLabel[r.t]}</span></footer>
    </article>`).join("");
}
$$(".review-filters .chip").forEach((c) => c.addEventListener("click", () => {
  $$(".review-filters .chip").forEach((x) => x.classList.remove("is-on"));
  c.classList.add("is-on");
  renderReviews(c.dataset.topic);
}));
renderReviews();

/* ---------- motion (patterns from animation-notes.md) ---------- */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* sliding highlight behind the selected menu tab */
function moveTabIndicator() {
  const ind = $(".tab-ind");
  const sel = $(".tabs [aria-selected=true]");
  if (!ind || !sel) return;
  ind.style.width = sel.offsetWidth + "px";
  ind.style.height = sel.offsetHeight + "px";
  ind.style.transform = `translate(${sel.offsetLeft}px, ${sel.offsetTop}px)`;
}
(() => {
  const tabs = $(".tabs");
  const ind = document.createElement("span");
  ind.className = "tab-ind";
  ind.setAttribute("aria-hidden", "true");
  tabs.prepend(ind);
  tabs.classList.add("has-ind");
  moveTabIndicator();
  requestAnimationFrame(() => ind.classList.add("ready"));
  window.addEventListener("resize", moveTabIndicator);
  if (document.fonts) document.fonts.ready.then(moveTabIndicator);
})();

/* header: shadow once scrolled; hides scrolling down, returns scrolling up */
(() => {
  const header = $(".site-header");
  let lastY = window.scrollY;
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    if (nav.classList.contains("open") || y < 480) { header.classList.remove("is-hidden"); lastY = y; return; }
    if (Math.abs(y - lastY) < 8) return;
    header.classList.toggle("is-hidden", y > lastY);
    lastY = y;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();

/* hero background drifts slower than the page (gentle parallax) */
(() => {
  if (reduceMotion) return;
  const hero = $(".hero");
  const bg = $(".hero-bg");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const y = window.scrollY - hero.offsetTop;
      if (y < hero.offsetHeight) bg.style.transform = `translate3d(0, ${Math.max(0, y) * 0.3}px, 0)`;
    });
  }, { passive: true });
})();

/* "24 layers" counts up once the hero stats appear */
(() => {
  const el = $("[data-count]");
  if (!el || reduceMotion) return;
  const end = Number(el.dataset.count);
  const start = performance.now() + 1350;
  const dur = 1300;
  el.textContent = "0";
  const tick = (now) => {
    const t = Math.min(1, Math.max(0, (now - start) / dur));
    el.textContent = String(Math.round(end * (1 - Math.pow(1 - t, 3))));
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
})();

/* line drawings: give each stroke a length of 1 so CSS can "draw" it */
$$(".fav-art svg :is(path, rect, circle, ellipse):not([stroke-dasharray]):not(.flame), .sparkler .cake-slice path")
  .forEach((p) => { p.setAttribute("pathLength", "1"); p.classList.add("ln"); });

/* scroll reveal + neon switch-on */
(() => {
  const neon = $$(".neon-text");
  if (!("IntersectionObserver" in window)) {
    document.documentElement.classList.add("drawn");
    neon.forEach((n) => n.classList.add("lit"));
    return;
  }

  const targets = $$([
    ".eyebrow:not(.neon-text)", ".section-title", ".section-intro", ".lede", ".pull-quote", ".vibe-card",
    ".portion-quote", ".light-text", ".planner", ".fav-card", ".menu-controls", ".legend",
    ".hours-card", ".sub-title", ".faq", ".dark-card", ".sparkler", ".c-card",
    ".celebrate .guest-quote", ".celebrate .guest", ".review-filters", ".footer-grid > div",
    ".intro-grid > div > p", ".visit .muted", ".fine-print",
  ].join(",")).filter((el) => !el.closest(".hero"));

  targets.forEach((el) => {
    let d = 0;
    for (let s = el.previousElementSibling; s; s = s.previousElementSibling) if (targets.includes(s)) d++;
    el.style.setProperty("--d", String(Math.min(d, 6)));
    el.classList.add("reveal");
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);
      el.classList.add("in", "drawn");
      // hand control back to the element's own hover transitions once revealed
      const d = Number(el.style.getPropertyValue("--d")) || 0;
      setTimeout(() => el.classList.remove("reveal", "in"), 800 + d * 90);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  targets.forEach((el) => io.observe(el));

  const neonIo = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("lit"); neonIo.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  neon.forEach((n) => neonIo.observe(n));
})();
