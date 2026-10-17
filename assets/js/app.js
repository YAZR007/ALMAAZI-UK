/**
 * ALMAAZI — UI CLONE ENGINE
 * Handcrafted luxury jewellery.
 */

const MEDIA_BASE = "https://media.base44.com/images/public/6ac65dc15369b691db036cd0";

const CATEGORIES = [
  { id: "rings", label: "Rings", blurb: "Solitaires, bands & halos — cut to catch the light.", banner: `${MEDIA_BASE}/1b3a31134_generated_71a9bc8c.png` },
  { id: "bracelets", label: "Bracelets", blurb: "Tennis, chain & filigree — gold that moves with you.", banner: `${MEDIA_BASE}/100c79495_generated_a3afb88c.png` },
  { id: "earrings", label: "Earrings", blurb: "Drops, studs & hoops — quiet brilliance, every day.", banner: `${MEDIA_BASE}/865a3db2d_generated_3bd3915e.png` },
  { id: "necklaces", label: "Necklaces", blurb: "Pendants & layers — the finishing touch.", banner: `${MEDIA_BASE}/17d7e788b_generated_528d380f.png` }
];

const PRODUCTS = [
  // Rings
  {
    id: "r1",
    category: "rings",
    name: "Aurora Solitaire Ring",
    material: "18k Gold • 0.5ct Diamond",
    price: "$1,890",
    numericPrice: 1890,
    image: `${MEDIA_BASE}/9ed165e1a_generated_4b887fb9.png`,
    description: "A single brilliant-cut diamond held in a hand-finished 18k gold solitaire setting — quiet, luminous, and made to be worn every day."
  },
  {
    id: "r2",
    category: "rings",
    name: "Éternité Band",
    material: "18k Gold • Pavé Diamonds",
    price: "$2,340",
    numericPrice: 2340,
    image: `${MEDIA_BASE}/484e708eb_generated_4b24cdfa.png`,
    description: "A full circle of pavé-set diamonds in 18k gold, each stone matched for brilliance. The eternity band, reimagined by hand."
  },
  {
    id: "r3",
    category: "rings",
    name: "Lumière Halo Ring",
    material: "18k Gold • Halo Setting",
    price: "$2,780",
    numericPrice: 2780,
    image: `${MEDIA_BASE}/346bce894_generated_f7ea94b7.png`,
    description: "A halo of delicate diamonds surrounds the centre stone, amplifying its light. Hand-set in 18k gold with a whisper-fine band."
  },

  // Bracelets
  {
    id: "b1",
    category: "bracelets",
    name: "Tennis Éclat Bracelet",
    material: "18k Gold • 1.2ct Diamonds",
    price: "$3,650",
    numericPrice: 3650,
    image: `${MEDIA_BASE}/57571b72b_generated_5701a690.png`,
    description: "A continuous line of brilliant-cut diamonds set in 18k gold. The tennis bracelet, crafted to move with you and catch every light."
  },
  {
    id: "b2",
    category: "bracelets",
    name: "Sérénité Chain Bracelet",
    material: "18k Gold • Handcrafted",
    price: "$1,420",
    numericPrice: 1420,
    image: `${MEDIA_BASE}/98da4e616_generated_f555fa55.png`,
    description: "A fine hand-linked gold chain that drapes softly on the wrist. Lightweight, timeless, and made for layering."
  },
  {
    id: "b3",
    category: "bracelets",
    name: "Filigrane Bangle",
    material: "21k Gold • Filigree",
    price: "$1,980",
    numericPrice: 1980,
    image: `${MEDIA_BASE}/5ed5e3d9c_generated_3b64212c.png`,
    description: "A slim bangle finished with traditional filigree work in 21k gold — a tribute to old-world craftsmanship."
  },

  // Earrings
  {
    id: "e1",
    category: "earrings",
    name: "Stella Drop Earrings",
    material: "18k Gold • Star Drops",
    price: "$1,560",
    numericPrice: 1560,
    image: `${MEDIA_BASE}/6248d1d82_generated_b2dd475a.png`,
    description: "Delicate star-shaped drops in 18k gold that sway gently with movement. Light enough for every day, special enough for every night."
  },
  {
    id: "e2",
    category: "earrings",
    name: "Pearl Whisper Studs",
    material: "18k Gold • Akoya Pearl",
    price: "$980",
    numericPrice: 980,
    image: `${MEDIA_BASE}/98fdfbf2e_generated_ee0b306c.png`,
    description: "A pair of Akoya pearls set on 18k gold posts. The quietest kind of elegance."
  },
  {
    id: "e3",
    category: "earrings",
    name: "Cascade Hoop Earrings",
    material: "18k Gold • Cascading",
    price: "$1,290",
    numericPrice: 1290,
    image: `${MEDIA_BASE}/b5a096495_generated_7cd1d238.png`,
    description: "A cascading line of gold hoops that frame the face with soft movement. Hand-finished and effortlessly modern."
  },

  // Necklaces
  {
    id: "n1",
    category: "necklaces",
    name: "Solitaire Pendant Necklace",
    material: "18k Gold • 0.3ct Diamond",
    price: "$1,640",
    numericPrice: 1640,
    image: `${MEDIA_BASE}/d2d5e4e81_generated_f89b9be9.png`,
    description: "A single diamond suspended on a fine 18k gold chain. The pendant that needs nothing else."
  },
  {
    id: "n2",
    category: "necklaces",
    name: "Layered Gold Chain",
    material: "18k Gold • Triple Layer",
    price: "$1,120",
    numericPrice: 1120,
    image: `${MEDIA_BASE}/46015d035_generated_162e32ea.jpg`,
    description: "Three fine gold chains layered as one — texture and movement without the weight."
  },
  {
    id: "n3",
    category: "necklaces",
    name: "Amour Heart Pendant",
    material: "18k Gold • Heart Pendant",
    price: "$1,360",
    numericPrice: 1360,
    image: `${MEDIA_BASE}/2438cf786_generated_670b0ef5.jpg`,
    description: "A small gold heart on a delicate chain. A keepsake, made to be given and worn close."
  }
];

// Cart State
let cart = JSON.parse(localStorage.getItem("almaazi_cart") || "[]");

function saveCart() {
  localStorage.setItem("almaazi_cart", JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const count = cart.reduce((total, item) => total + item.qty, 0);
  const badge = document.getElementById("cart-count-badge");
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "grid" : "none";
  }
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;
  drawer.classList.remove("pointer-events-none");
  drawer.querySelector(".drawer-backdrop").classList.remove("opacity-0");
  drawer.querySelector(".drawer-panel").classList.remove("translate-x-full");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;
  drawer.querySelector(".drawer-backdrop").classList.add("opacity-0");
  drawer.querySelector(".drawer-panel").classList.add("translate-x-full");
  setTimeout(() => drawer.classList.add("pointer-events-none"), 350);
}

function renderCartDrawer() {
  const list = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal");
  const checkoutBtn = document.getElementById("cart-checkout-btn");
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="py-20 text-center text-obsidian/50">
        <svg class="h-8 w-8 mx-auto mb-4 text-obsidian/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <p class="font-heading text-xl text-obsidian mb-2">Your bag is empty.</p>
        <p class="text-xs text-obsidian/40">Explore our handcrafted creations.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "$0";
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  let total = 0;
  list.innerHTML = cart.map(item => {
    const itemTotal = item.numericPrice * item.qty;
    total += itemTotal;
    return `
      <div class="glass squircle-sm p-4 flex gap-4 items-center">
        <div class="squircle-sm overflow-hidden bg-obsidian/5 w-16 h-16 shrink-0">
          <img src="${item.image}" alt="${item.name}" class="h-full w-full object-cover">
        </div>
        <div class="flex-1 min-w-0">
          <h4 class="font-heading text-base text-obsidian truncate">${item.name}</h4>
          <p class="text-[11px] uppercase tracking-[0.12em] text-obsidian/45">${item.material || ""}</p>
          <div class="flex items-center justify-between mt-2">
            <span class="font-body text-xs text-obsidian/80">$${itemTotal.toLocaleString()}</span>
            <div class="flex items-center gap-2 border border-obsidian/10 rounded-full px-2 py-0.5">
              <button onclick="updateCartQty('${item.id}', -1)" class="text-xs text-obsidian/60 hover:text-obsidian px-1">-</button>
              <span class="text-xs font-mono text-obsidian">${item.qty}</span>
              <button onclick="updateCartQty('${item.id}', 1)" class="text-xs text-obsidian/60 hover:text-obsidian px-1">+</button>
            </div>
          </div>
        </div>
        <button onclick="removeFromCart('${item.id}')" class="text-obsidian/30 hover:text-obsidian p-1">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = `$${total.toLocaleString()}`;
  if (checkoutBtn) checkoutBtn.disabled = false;
}

// Navigate to the dedicated product detail page
function openProductDetail(productId) {
  window.location.href = `product.html?id=${productId}`;
}

function closeProductDetail() {
  // no-op (kept for compatibility; modal no longer used)
}

// Render Collection Sections
function renderCollections() {
  const container = document.getElementById("collections-container");
  if (!container) return;

  container.innerHTML = CATEGORIES.map((cat, idx) => {
    const items = PRODUCTS.filter(p => p.category === cat.id);
    const indexNum = String(idx + 1).padStart(2, "0");

    return `
      <section id="${cat.id}" class="scroll-mt-24 px-3 sm:px-6 lg:px-10 py-8 sm:py-16 lg:py-20">
        
        <!-- Category Banner (Squircle, Mobile Optimized & Clickable) -->
        <a href="collection.html?category=${cat.id}" class="block group relative squircle overflow-hidden mb-6 sm:mb-12 cursor-pointer transition-transform duration-300 active:scale-[0.995]" title="View all ${cat.label}">
          <div class="min-h-[200px] sm:min-h-0 aspect-[4/3] sm:aspect-[16/6] w-full">
            <img src="${cat.banner}" alt="${cat.label}" class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-alabaster/95 via-alabaster/60 to-transparent sm:from-alabaster/80 sm:via-alabaster/20"></div>
          <div class="absolute inset-0 flex items-center">
            <div class="px-5 py-6 sm:px-12 lg:px-16 max-w-xl">
              <span class="block text-[10px] sm:text-[12px] uppercase tracking-[0.25em] text-obsidian/50 mb-1 sm:mb-3 font-mono">
                ${indexNum} — Dedicated Collection
              </span>
              <h2 class="font-heading text-3xl sm:text-5xl lg:text-7xl leading-[1.05] text-obsidian">
                ${cat.label}
              </h2>
              <p class="mt-2 sm:mt-4 max-w-xs sm:max-w-sm text-[13px] sm:text-[15px] text-obsidian/70 leading-relaxed font-light">
                ${cat.blurb}
              </p>
              <div class="mt-3.5 sm:mt-6 inline-flex items-center gap-2 text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-medium text-obsidian group-hover:translate-x-1.5 transition-transform duration-300">
                <span>View Full ${cat.label} Range</span>
                <span>&rarr;</span>
              </div>
            </div>
          </div>
        </a>

        <!-- 3 Product Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          ${items.map(p => `
            <a href="product.html?id=${p.id}" class="group squircle bg-alabaster border border-obsidian/10 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg active:scale-[0.99]">
              
              <div class="relative aspect-square overflow-hidden bg-obsidian/5">
                <img 
                  src="${p.image}" 
                  alt="${p.name}" 
                  class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div class="p-4 sm:p-6 flex flex-col gap-1">
                <h3 class="font-heading text-lg sm:text-[1.35rem] leading-tight text-obsidian">
                  ${p.name}
                </h3>
                <p class="text-[11px] sm:text-[12px] uppercase tracking-[0.12em] text-obsidian/45">
                  ${p.material}
                </p>
                <div class="mt-2.5 sm:mt-3 flex items-center justify-between">
                  <span class="font-body text-[14px] sm:text-[15px] text-obsidian/85 font-medium">${p.price}</span>
                  <span class="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-obsidian/60 group-hover:text-obsidian transition-colors">
                    Explore Creation &rarr;
                  </span>
                </div>
              </div>

            </a>
          `).join("")}
        </div>

      </section>
    `;
  }).join("");
}

// Mobile Menu Drawer
function toggleMobileMenu(open) {
  const menu = document.getElementById("mobile-menu-drawer");
  if (!menu) return;
  const backdrop = menu.querySelector(".mobile-drawer-backdrop");
  const panel = menu.querySelector(".mobile-drawer-panel");
  if (open) {
    menu.classList.remove("pointer-events-none");
    backdrop?.classList.remove("opacity-0");
    panel?.classList.remove("translate-x-full");
  } else {
    backdrop?.classList.add("opacity-0");
    panel?.classList.add("translate-x-full");
    setTimeout(() => menu.classList.add("pointer-events-none"), 300);
  }
}

// Preloader Control
function dismissPreloader() {
  const preloader = document.getElementById("diamond-preloader");
  if (!preloader) return;
  preloader.classList.add("fade-out");
}

function replayPreloader() {
  const preloader = document.getElementById("diamond-preloader");
  if (!preloader) return;
  preloader.classList.remove("fade-out");
  // Automatically dismiss after 4 seconds
  setTimeout(dismissPreloader, 4000);
}

// Initial Run
document.addEventListener("DOMContentLoaded", () => {
  renderCollections();
  updateCartBadge();
  renderCartDrawer();

  // Auto-dismiss preloader after initial drawn/undrawn cycle (3.2 seconds)
  setTimeout(dismissPreloader, 3200);
});
