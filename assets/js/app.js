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
    name: "Thuraya",
    material: "18k Gold/ 925 silver • 0.8ct VVS1 Moissanite",
    price: "£65",
    numericPrice: 650,
    image: "assets/images/thurayagold.jpg",
    images: [
      "assets/images/thurayagold.jpg", // Index 0: Actual ring (Shown by default)
      "assets/images/Delicate%20Diamond%20Ring%20Beauty%20Portrait.png" // Index 1: Model wearing it (Shown on hover)
    ],
    description: "Crafted in 18k gold plating, 925 silver and VVS1 moissanite this delicate band features a shimmering array of D-color, VVS1 moissanite stones arranged like a constellation. Lightweight yet radiant, it’s designed to bring effortless everyday luxury to your collection—whether worn solo or stacked."
  },
  {
    id: "r2",
    category: "rings",
    name: "Zumurrud",
    material: "18k Gold/ 925 silver • 2ct VVS1 Moissanite",
    price: "£150",
    numericPrice: 1500,
    image: "assets/images/zumurudring.jpg",
    images: [
      "assets/images/zumurudring.jpg", // Index 0: Actual ring (Shown by default)
      "assets/images/trilogymodel.jpg" // Index 1: Model wearing it (Shown on hover)
    ],
    description: "An Emerald-Cut Moissanite Accent Ring featuring a striking 2-carat emerald-cut center stone framed by tapered baguette and round brilliant accents. Crafted in rich 18k gold-plated 925 sterling silver, this design delivers timeless geometric symmetry and high-wattage brilliance."
  },
  {
    id: "r3",
    category: "rings",
    name: "Toi-Et-Moi",
    material: "18k Gold/ 925 silver • 1.5ctw VVS1 Moissanite",
    price: "£120",
    numericPrice: 1200,
    image: "assets/images/toietmoigold.jpg",
    images: [
      "assets/images/toietmoigold.jpg", // Index 0: Actual ring (Shown by default)
      "assets/images/toietmoimodel.jpg" // Index 1: Model wearing it (Shown on hover)
    ],
    description: "Classic romance meets modern design. Featuring two high-brilliance pear-cut gems angled together in a timeless 'You and Me' setting, this ring symbolizes two souls united as one. Sleek, graceful, and dazzling, it offers a dramatic sparkle that instantly draws the eye."
  },
  {
    id: "r4",
    category: "rings",
    name: "Sanaa",
    material: "18k Gold/ 925 silver • 3x5mm VVS1 Moissanites",
    price: "£135",
    numericPrice: 1350,
    image: "assets/images/sanaa.jpg",
    images: [
      "assets/images/sanaa.jpg", // Index 0: Actual ring (Shown by default)
      "assets/images/sanaa.jpg" // Index 1: Alternate view or model shot when available
    ],
    description: "Sleek, modern, and brilliantly bold. This full eternity band features 3x5mm emerald-cut moissanite gems set horizontally in a smooth, protective 18k gold-plated frame. Its clean geometric lines deliver continuous sparkle with a comfortable, snag-free fit—perfect as a standalone statement or stacked."
  },
  {
    id: "r5",
    category: "rings",
    name: "ayn",
    material: "18k Gold/ 925 silver • 1ct VVS1 Moissanites",
    price: "£85",
    numericPrice: 850,
    image: "assets/images/aynring.jpg",
    images: [
      "assets/images/aynring.jpg", // Index 0: Actual ring (Shown by default)
      "assets/images/Elegant%20Baguette%20Ring%20Portrait.png" // Index 1: Model wearing it (Shown on hover)
    ],
    description: "a captivating blend of modern geometry and timeless brilliance. Centered around a sleek 1.0ct emerald-cut moissanite, this ring is flanked by two custom-cut side stones, all encased in a seamless full-bezel setting."
  },
   {
    id: "r6",
    category: "rings",
    name: "noor",
    material: "925 silver • 1ct VVS1 Moissanite",
    price: "£90",
    numericPrice: 900,
    image: "assets/images/noorsilver.jpg",
    images: [
      "assets/images/noorsilver.jpg", // Index 0: Actual ring (Shown by default)
      "assets/images/noorsilvermodel.jpg" // Index 1: Model wearing it (Shown on hover)
    ],
    description: "An exquisite and delicate band featuring a brilliant, six-prong set center diamond accented by a graceful, winding vine-like pattern adorned with shimmering side stones."
  },

  // Bracelets
  {
    id: "b1",
    category: "bracelets",
    name: "Najma",
    material: "18k Gold/ 925 silver • 3mm VVS1 Moissanites",
    price: "£245",
    numericPrice: 2450,
    image: "assets/images/Nijma.jpg",
    images: [
      "assets/images/Nijma.jpg", // Index 0: Actual bracelet (Shown by default)
      "assets/images/nijmamodel.jpg" // Index 1: Model wearing it (Shown on hover)
    ],
    description: "Handcrafted from solid 925 Sterling Silver, this piece features a continuous row of sparkling 3mm Moissanites highlighted by unique gold-plated 'X' cross motifs. The dynamic two-tone design brings extra warmth and shine, while a secure box clasp keeps it comfortably in place."
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
    images: [
      `${MEDIA_BASE}/6248d1d82_generated_b2dd475a.png`,
      `${MEDIA_BASE}/6248d1d82_generated_b2dd475a.png`
    ],
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
    images: [
      `${MEDIA_BASE}/98fdfbf2e_generated_ee0b306c.png`,
      `${MEDIA_BASE}/98fdfbf2e_generated_ee0b306c.png`
    ],
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
    images: [
      `${MEDIA_BASE}/b5a096495_generated_7cd1d238.png`,
      `${MEDIA_BASE}/b5a096495_generated_7cd1d238.png`
    ],
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
    images: [
      `${MEDIA_BASE}/d2d5e4e81_generated_f89b9be9.png`,
      `${MEDIA_BASE}/d2d5e4e81_generated_f89b9be9.png`
    ],
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
    images: [
      `${MEDIA_BASE}/46015d035_generated_162e32ea.jpg`,
      `${MEDIA_BASE}/46015d035_generated_162e32ea.jpg`
    ],
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
    images: [
      `${MEDIA_BASE}/2438cf786_generated_670b0ef5.jpg`,
      `${MEDIA_BASE}/2438cf786_generated_670b0ef5.jpg`
    ],
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

// Scatter layout: positions, sizes, rotations for up to 6 pieces per category banner.
// Pieces are placed in the right half of the banner over a pure white canvas.
const BANNER_SCATTER_LAYOUTS = [[
  { top: "8%",  left: "52%", size: "clamp(100px,15vw,185px)", rotate: "-7deg",  z: 5, delay: "0ms",   op: "1"    },
  { top: "2%",  left: "69%", size: "clamp(85px,12vw,150px)",  rotate: "9deg",   z: 4, delay: "70ms",  op: "0.95" },
  { top: "33%", left: "85%", size: "clamp(75px,11vw,135px)",  rotate: "-5deg",  z: 3, delay: "140ms", op: "0.80" },
  { top: "57%", left: "73%", size: "clamp(90px,13vw,160px)",  rotate: "11deg",  z: 4, delay: "210ms", op: "0.90" },
  { top: "55%", left: "52%", size: "clamp(70px,9.5vw,118px)", rotate: "-13deg", z: 3, delay: "280ms", op: "0.72" },
  { top: "18%", left: "92%", size: "clamp(55px,8vw,95px)",    rotate: "16deg",  z: 2, delay: "350ms", op: "0.60" }
]];

// Inject CSS keyframes for scatter animation (runs once on page load)
(function injectBannerStyles() {
  if (document.getElementById("banner-scatter-styles")) return;
  const s = document.createElement("style");
  s.id = "banner-scatter-styles";
  s.textContent =
    "@keyframes bannerPieceIn {" +
    "  from { opacity:0; transform:translateY(16px) scale(0.88); }" +
    "  to   { opacity:1; transform:translateY(0) scale(1); }" +
    "}";
  document.head.appendChild(s);
})();

// Render Collection Sections (Tiffany 3-Column Large Card Grid Layout)
function renderCollections() {
  const container = document.getElementById("collections-container");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(function(cat, idx) {
    const items = PRODUCTS.filter(function(p) { return p.category === cat.id; });
    const indexNum = String(idx + 1).padStart(2, "0");
    const layout = BANNER_SCATTER_LAYOUTS[0];
    const count = Math.min(items.length, layout.length);

    // Deterministic pseudo-shuffle per category so each banner looks different
    const shuffled = items.slice().sort(function(a, b) {
      return ((a.id.charCodeAt(a.id.length - 1) * 7 + idx * 13) % 5) -
             ((b.id.charCodeAt(b.id.length - 1) * 7 + idx * 13) % 5);
    });

    // Build scattered piece HTML using string concatenation (no nested template literals)
    let scatterHTML = "";
    for (let i = 0; i < count; i++) {
      const p = shuffled[i];
      const slot = layout[i];
      const imgSrc = p.images && p.images[0] ? p.images[0] : p.image;
      scatterHTML +=
        '<a href="product.html?id=' + p.id + '"' +
        '   onclick="event.stopPropagation()"' +
        '   title="' + p.name + '"' +
        '   style="position:absolute;top:' + slot.top + ';left:' + slot.left + ';' +
                  'width:' + slot.size + ';height:' + slot.size + ';' +
                  'z-index:' + slot.z + ';opacity:0;' +
                  'transform:rotate(' + slot.rotate + ');' +
                  'animation:bannerPieceIn 0.6s cubic-bezier(0.22,1,0.36,1) ' + slot.delay + ' forwards;"' +
        '>' +
        '  <div style="width:100%;height:100%;border-radius:16px;overflow:hidden;background:#fff;' +
                      'box-shadow:0 6px 28px rgba(0,0,0,0.13),0 1px 4px rgba(0,0,0,0.07);' +
                      'transform:rotate(' + slot.rotate + ');' +
                      'transition:transform 0.25s ease,box-shadow 0.25s ease;"' +
        '       onmouseover="this.style.transform=\'rotate(0deg) scale(1.1)\';this.style.boxShadow=\'0 14px 44px rgba(0,0,0,0.2)\';"' +
        '       onmouseout="this.style.transform=\'rotate(' + slot.rotate + ')\';this.style.boxShadow=\'0 6px 28px rgba(0,0,0,0.13)\';"' +
        '  >' +
        '    <img src="' + imgSrc + '" alt="' + p.name + '" ' +
        '         style="width:100%;height:100%;object-fit:contain;padding:6px;" draggable="false"/>' +
        '  </div>' +
        '</a>';
    }

    // Build product grid HTML using string concatenation
    let gridHTML = "";
    for (let j = 0; j < items.length; j++) {
      const p = items[j];
      const primaryImg   = p.images && p.images[0] ? p.images[0] : p.image;
      const secondaryImg = p.images && p.images[1] ? p.images[1] : primaryImg;
      gridHTML +=
        '<a href="product.html?id=' + p.id + '" class="group flex flex-col text-center cursor-pointer pb-8">' +
        '  <div class="relative w-full aspect-square bg-white overflow-hidden mb-6 rounded-lg">' +
        '    <img src="' + primaryImg + '" alt="' + p.name + '"' +
        '         class="absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-500 ease-out group-hover:opacity-0 p-2 sm:p-4 scale-110"' +
        '         draggable="false"/>' +
        '    <img src="' + secondaryImg + '" alt="' + p.name + ' - Model View"' +
        '         class="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"' +
        '         draggable="false"/>' +
        '  </div>' +
        '  <div class="flex flex-col items-center gap-2 px-2">' +
        '    <h3 class="font-heading text-2xl sm:text-3xl text-obsidian font-normal tracking-wide">' + p.name + '</h3>' +
        '    <p class="text-[13px] sm:text-[14px] text-obsidian/60 font-light tracking-wide max-w-xs leading-snug">' + p.material + '</p>' +
        '    <div class="mt-1 text-[16px] sm:text-[17px] text-obsidian font-body font-medium">' + p.price + '</div>' +
        '  </div>' +
        '</a>';
    }

    return (
      '<section id="' + cat.id + '" class="scroll-mt-24 px-4 sm:px-8 lg:px-12 py-12 sm:py-20">' +

      // --- DYNAMIC BANNER ---
      '<div onclick="window.location.href=\'collection.html?category=' + cat.id + '\'"' +
      '     style="position:relative;border-radius:20px;overflow:hidden;margin-bottom:3rem;cursor:pointer;user-select:none;"' +
      '     title="View all ' + cat.label + '">' +

      '  <div style="position:relative;width:100%;background:#fff;min-height:220px;aspect-ratio:16/6;overflow:hidden;">' +

      // Dot-grid texture
      '    <div style="position:absolute;inset:0;pointer-events:none;opacity:0.025;' +
      '         background-image:radial-gradient(circle at 1px 1px,#141414 1px,transparent 0);' +
      '         background-size:28px 28px;"></div>' +

      // Left text panel
      '    <div style="position:absolute;inset:0;display:flex;align-items:center;z-index:20;pointer-events:none;">' +
      '      <div style="padding:clamp(16px,4vw,64px);max-width:50%;">' +
      '        <span style="display:block;font-size:clamp(9px,1vw,12px);letter-spacing:0.25em;text-transform:uppercase;color:rgba(20,20,20,0.4);font-family:monospace;margin-bottom:10px;">' +
                 indexNum + ' \u2014 Dedicated Collection' +
      '        </span>' +
      '        <h2 class="font-heading" style="font-size:clamp(2rem,6vw,5rem);line-height:1.05;color:#141414;margin:0 0 10px;">' +
                 cat.label +
      '        </h2>' +
      '        <p style="font-size:clamp(12px,1.3vw,15px);color:rgba(20,20,20,0.6);line-height:1.65;font-weight:300;max-width:280px;margin:0 0 20px;">' +
                 cat.blurb +
      '        </p>' +
      '        <div style="display:inline-flex;align-items:center;gap:8px;font-size:clamp(10px,1vw,12px);letter-spacing:0.2em;text-transform:uppercase;font-weight:500;color:#141414;">' +
      '          <span>View Full ' + cat.label + ' Range</span><span>&#8594;</span>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +

      // Scattered pieces
      '    <div style="position:absolute;inset:0;overflow:hidden;z-index:10;pointer-events:auto;">' +
           scatterHTML +
      '    </div>' +

      // Left-side fade
      '    <div style="position:absolute;inset:0;pointer-events:none;z-index:15;' +
      '         background:linear-gradient(to right,white 24%,rgba(255,255,255,0.78) 40%,rgba(255,255,255,0.08) 58%,transparent 68%);"></div>' +
      '  </div>' +
      '</div>' +

      // --- PRODUCT GRID ---
      '<div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">' +
         gridHTML +
      '</div>' +

      '</section>'
    );
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
let preloaderTimer = null;

function dismissPreloader() {
  const preloader = document.getElementById('diamond-preloader');
  if (!preloader) return;
  if (preloaderTimer) {
    clearTimeout(preloaderTimer);
    preloaderTimer = null;
  }
  preloader.classList.add('fade-out');
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 600);
}

function replayPreloader() {
  const preloader = document.getElementById('diamond-preloader');
  if (!preloader) return;
  if (preloaderTimer) {
    clearTimeout(preloaderTimer);
  }
  preloader.style.display = 'flex';
  preloader.classList.remove('fade-out');

  // Re-trigger SVG letter animations cleanly from 0s
  const svg = preloader.querySelector('.almaazi-write-svg');
  if (svg) {
    const clone = svg.cloneNode(true);
    svg.parentNode.replaceChild(clone, svg);
  }

  // Automatically dismiss after written & unwritten cycle finishes (~3.3s)
  preloaderTimer = setTimeout(dismissPreloader, 3300);
}

// Hero Parallax Scroll Controller (Exact Framer Motion parity from Base44)
function initHeroParallax() {
  const header = document.querySelector("header");
  if (!header) return;
  const diamonds = header.querySelectorAll(".floating-diamond");
  if (!diamonds.length) return;

  let ticking = false;

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const headerTop = header.offsetTop;
    const headerHeight = header.offsetHeight || 600;
    
    const progress = Math.max(0, Math.min(1, (scrollY - headerTop) / headerHeight));

    diamonds.forEach(el => {
      const drift = parseFloat(el.getAttribute("data-drift")) || 150;
      const rotate = parseFloat(el.getAttribute("data-rotate")) || 0;
      const y = -drift * progress;
      const opacity = Math.max(0, 0.5 * (1 - progress / 0.75));
      el.style.transform = `translate3d(0, ${y}px, 0) rotate(${rotate}deg)`;
      el.style.opacity = opacity.toFixed(3);
    });

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
}

// Initial Run
document.addEventListener("DOMContentLoaded", () => {
  renderCollections();
  updateCartBadge();
  renderCartDrawer();
  initHeroParallax();

  preloaderTimer = setTimeout(dismissPreloader, 3200);
});