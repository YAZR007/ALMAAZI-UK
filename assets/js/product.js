/**
 * ALMAAZI — Product Detail Page Logic & Navbar Controller
 * Reads ?id=<productId> from URL, renders the full luxury product page, 
 * and handles navbar interactive behavior and cart drawers.
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
    name: "Thuraya",
    material: "18k Gold/ 925 silver • 0.8ct VVS1 Moissanite",
    price: "£65",
    numericPrice: 650,
    image: "assets/images/Gemini_Generated_Image_3elr703elr703elr.jpg",
    images: [
      "assets/images/Gemini_Generated_Image_3elr703elr703elr.jpg",
      "assets/images/Delicate%20Diamond%20Ring%20Beauty%20Portrait.png"
    ],
    description: "Crafted in 18k gold plating, 925 silver and VVS1 moissanite this delicate band features a shimmering array of D-color, VVS1 moissanite stones arranged like a constellation."
  },
  {
    id: "r2",
    category: "rings",
    name: "Zumurrud",
    material: "18k Gold/ 925 silver • 2ct VVS1 Moissanite",
    price: "£150",
    numericPrice: 1500,
    image: "assets/images/trilogyemeraldnobg.jpg",
    images: [
      "assets/images/trilogyemeraldnobg.jpg",
      "assets/images/trilogymodel.jpg"
    ],
    description: "An Emerald-Cut Moissanite Accent Ring featuring a striking 2-carat emerald-cut center stone framed by tapered baguette and round brilliant accents."
  },
  {
    id: "r3",
    category: "rings",
    name: "Toi-Et-Moi",
    material: "18k Gold/ 925 silver • 1.5ctw VVS1 Moissanite",
    price: "£120",
    numericPrice: 1200,
    image: "assets/images/toietmoi.jpg",
    images: [
      "assets/images/toietmoi.jpg",
      "assets/images/toietmoimodel.jpg"
    ],
    description: "Classic romance meets modern design. Featuring two high-brilliance pear-cut gems angled together in a timeless 'You and Me' setting."
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
      "assets/images/sanaa.jpg",
      "assets/images/sanaa.jpg"
    ],
    description: "Sleek, modern, and brilliantly bold. This full eternity band features 3x5mm emerald-cut moissanite gems set horizontally."
  },
  {
    id: "r5",
    category: "rings",
    name: "ayn",
    material: "18k Gold/ 925 silver • 1ct VVS1 Moissanites",
    price: "£85",
    numericPrice: 850,
    image: "assets/images/ayn.jpg",
    images: [
      "assets/images/ayn.jpg",
      "assets/images/Elegant%20Baguette%20Ring%20Portrait.png"
    ],
    description: "A captivating blend of modern geometry and timeless brilliance centered around a sleek 1.0ct emerald-cut moissanite."
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
      "assets/images/Nijma.jpg",
      "assets/images/nijmamodel.jpg"
    ],
    description: "Handcrafted from solid 925 Sterling Silver, featuring a continuous row of sparkling 3mm Moissanites highlighted by gold-plated 'X' motifs."
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
    description: "Delicate star-shaped drops in 18k gold that sway gently with movement."
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
    description: "A cascading line of gold hoops that frame the face with soft movement."
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
    description: "A single diamond suspended on a fine 18k gold chain."
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

// Extended luxury metadata for all products
const DETAILS = {
  r1: {
    badge: "Maison Signature",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Ring Size",
    hasSizeGuide: true,
    sizes: ["US 5", "US 6", "US 7", "US 8"],
    story: "The Aurora Solitaire was conceived around the purity of morning light. Cast in 18k solid gold with a slender, knife-edge band."
  },
  r2: {
    badge: "Iconic Eternity",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Ring Size",
    hasSizeGuide: true,
    sizes: ["US 5", "US 6", "US 7", "US 8"],
    story: "An unbroken horizon of calibrated diamonds, each precisely aligned under magnification to create a ribbon of seamless sparkle."
  },
  r3: {
    badge: "Haute Brilliance",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Ring Size",
    hasSizeGuide: true,
    sizes: ["US 5", "US 6", "US 7", "US 8"],
    story: "Drawing inspiration from vintage European heirlooms, the Lumière Halo cradles its radiant centre stone in a delicate constellation."
  },
  b1: {
    badge: "Atelier Classic",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Wrist Length",
    hasSizeGuide: false,
    sizes: ["16 cm (Petite)", "17.5 cm (Standard)", "19 cm (Relaxed)"],
    story: "Crafted with fluid articulation, each four-prong link of the Tennis Éclat pivots freely against its neighbor."
  },
  b2: {
    badge: "Minimalist Luxe",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Wrist Length",
    hasSizeGuide: false,
    sizes: ["16 cm (Petite)", "17.5 cm (Standard)", "19 cm (Relaxed)"],
    story: "Simplicity carried to perfection. The Sérénité Chain Bracelet features custom-drawn 18k gold wire."
  },
  b3: {
    badge: "Heritage Craft",
    hallmark: "Au875 (21k Solid Gold)",
    optionType: "Bangle Size",
    hasSizeGuide: false,
    sizes: ["Small (56mm)", "Medium (60mm)", "Large (64mm)"],
    story: "An homage to ancient gold-working traditions drawn into gossamer threads of 21k gold."
  },
  e1: {
    badge: "Celestial Drop",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Backing & Fit",
    hasSizeGuide: false,
    sizes: ["18k Push-Back", "La Poussette Lock (+£80)"],
    story: "Designed to animate with every turn of the head, suspending delicate star silhouettes from whispering gold threads."
  },
  e2: {
    badge: "Timeless Pure",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Backing & Fit",
    hasSizeGuide: false,
    sizes: ["18k Push-Back", "La Poussette Lock (+£80)"],
    story: "The quintessential piece of every jewelry collection. Hand-paired Akoya pearls chosen for mirror luster."
  },
  e3: {
    badge: "Modern Sculptural",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Closure Style",
    hasSizeGuide: false,
    sizes: ["18k Click-Hinge", "Comfort Omega Clip"],
    story: "A harmonious dialogue between fluid circles. Three concentric rings interlock and cascade gently forward."
  },
  n1: {
    badge: "Everyday Solitaire",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Chain Length",
    hasSizeGuide: false,
    sizes: ["40 cm (16 in)", "45 cm (18 in)", "50 cm (20 in)"],
    story: "A drop of pure light resting at the hollow of the collarbone, suspended on a diamond-cut chain."
  },
  n2: {
    badge: "Effortless Layer",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Tier Length",
    hasSizeGuide: false,
    sizes: ["Standard Tier (38–46cm)", "Extended Tier (42–50cm)"],
    story: "The coveted multi-necklace layered look, masterfully solved into a single unified piece."
  },
  n3: {
    badge: "Keepsake Talisman",
    hallmark: "Au750 (18k Solid Gold)",
    optionType: "Chain Length",
    hasSizeGuide: false,
    sizes: ["40 cm (16 in)", "45 cm (18 in)", "50 cm (20 in)"],
    story: "Substantial in weight yet soft in contour. The Amour Heart avoids cliché through its gentle asymmetrical curve."
  }
};

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
            <span class="font-body text-xs text-obsidian/80">${item.price}</span>
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

  if (subtotalEl) subtotalEl.textContent = `£${total.toLocaleString()}`;
  if (checkoutBtn) checkoutBtn.disabled = false;
}

// State variables for product customization
let currentQty = 1;
let selectedMetal = "18k Yellow Gold";
let selectedSize = "";

function setQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  const el = document.getElementById("qty-display");
  if (el) el.textContent = currentQty;
}

function selectMetal(metalName) {
  selectedMetal = metalName;
  const label = document.getElementById("selected-metal-label");
  if (label) label.textContent = metalName;

  document.querySelectorAll(".metal-swatch-btn").forEach(btn => {
    const isSelected = btn.getAttribute("data-metal") === metalName;
    if (isSelected) {
      btn.classList.add("ring-2", "ring-obsidian", "scale-110");
    } else {
      btn.classList.remove("ring-2", "ring-obsidian", "scale-110");
    }
  });
}

function selectSize(sizeVal) {
  selectedSize = sizeVal;
  const label = document.getElementById("selected-size-label");
  if (label) label.textContent = sizeVal;

  document.querySelectorAll(".size-pill-btn").forEach(btn => {
    const isSelected = btn.getAttribute("data-size") === sizeVal;
    if (isSelected) {
      btn.classList.add("bg-obsidian", "text-alabaster", "border-obsidian");
      btn.classList.remove("text-obsidian/70", "border-obsidian/15", "hover:border-obsidian/40");
    } else {
      btn.classList.remove("bg-obsidian", "text-alabaster", "border-obsidian");
      btn.classList.add("text-obsidian/70", "border-obsidian/15", "hover:border-obsidian/40");
    }
  });
}

function switchGalleryImage(index, imgSrc) {
  const mainImg = document.getElementById("gallery-main-img");
  if (!mainImg) return;

  mainImg.style.opacity = "0.2";
  setTimeout(() => {
    mainImg.src = imgSrc;
    if (index === 1) {
      mainImg.style.transform = "scale(1.5)";
    } else if (index === 2) {
      mainImg.style.transform = "scale(1.2)";
    } else {
      mainImg.style.transform = "scale(1)";
    }
    mainImg.style.opacity = "1";
  }, 180);

  document.querySelectorAll(".thumb-item").forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add("ring-2", "ring-obsidian", "opacity-100");
      thumb.classList.remove("opacity-40");
    } else {
      thumb.classList.remove("ring-2", "ring-obsidian", "opacity-100");
      thumb.classList.add("opacity-40");
    }
  });
}

function showToast(message) {
  const toast = document.getElementById("toast-notice");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.remove("opacity-0", "-translate-y-3", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.add("opacity-0", "-translate-y-3", "pointer-events-none");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 2800);
}

function addToCartDetailed(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const btn = document.getElementById("add-to-bag-btn");
  const originalText = btn ? btn.innerHTML : "";

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += currentQty;
  } else {
    cart.push({
      ...product,
      qty: currentQty,
      selectedMetal: selectedMetal,
      selectedSize: selectedSize || undefined
    });
  }

  saveCart();
  showToast(`Added ${currentQty} × ${product.name} to your bag`);

  if (btn) {
    btn.innerHTML = `
      <span class="inline-flex items-center gap-2">
        <svg class="w-4 h-4 text-alabaster" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Added to Bag
      </span>
    `;
    btn.classList.add("bg-emerald-800");

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.classList.remove("bg-emerald-800");
      openCartDrawer();
    }, 900);
  } else {
    openCartDrawer();
  }
}

function toggleSizeGuide(open) {
  const modal = document.getElementById("size-guide-modal");
  if (!modal) return;
  if (open) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } else {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function shareProduct() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href);
    showToast("Product link copied to clipboard");
  } else {
    showToast("Share: " + window.location.href);
  }
}

function toggleWishlist(btn) {
  const isSaved = btn.getAttribute("data-saved") === "true";
  const icon = btn.querySelector("svg");
  if (!isSaved) {
    btn.setAttribute("data-saved", "true");
    btn.classList.add("bg-obsidian", "text-alabaster");
    if (icon) icon.setAttribute("fill", "currentColor");
    showToast("Saved to your personal collection");
  } else {
    btn.setAttribute("data-saved", "false");
    btn.classList.remove("bg-obsidian", "text-alabaster");
    if (icon) icon.setAttribute("fill", "none");
    showToast("Removed from saved pieces");
  }
}

function renderProduct(product) {
  const category = CATEGORIES.find(c => c.id === product.category);
  const extra = DETAILS[product.id] || {};
  const story = extra.story || product.description;
  const sizes = extra.sizes || [];

  if (sizes.length > 0 && !selectedSize) {
    selectedSize = sizes[1] || sizes[0];
  }

  const root = document.getElementById("product-root");
  if (!root) return;

  root.innerHTML = `
    <div class="page-enter max-w-7xl mx-auto">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-12">
        <nav class="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-obsidian/45">
          <a href="index.html" class="hover:text-obsidian transition-colors">Maison</a>
          <span class="opacity-30">/</span>
          <a href="index.html#${product.category}" class="hover:text-obsidian transition-colors">${category ? category.label : "Collection"}</a>
          <span class="opacity-30">/</span>
          <span class="text-obsidian/80 font-medium truncate max-w-[140px] sm:max-w-none">${product.name}</span>
        </nav>

        <a href="index.html#${product.category}" class="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-obsidian/50 hover:text-obsidian transition-colors">
          <svg class="h-3 w-3 sm:h-3.5 sm:w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          <span>Back to ${category ? category.label : "Collection"}</span>
        </a>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start">
        <div class="lg:col-span-7 flex flex-col gap-3 sm:gap-4">
          <div class="gallery-main-frame relative squircle overflow-hidden bg-obsidian/5 border border-obsidian/10 aspect-square group">
            <img 
              id="gallery-main-img" 
              src="${product.image}" 
              alt="${product.name}" 
              class="gallery-main-img h-full w-full object-cover transition-all duration-300"
            />
            <div class="absolute top-3.5 sm:top-5 left-3.5 sm:left-5 pointer-events-none">
              <span class="glass-soft squircle-sm px-3 py-1 sm:px-3.5 sm:py-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-obsidian/75 font-mono">
                ${extra.badge || "Handcrafted Luxury"}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2.5 sm:gap-4">
            <button type="button" onclick="switchGalleryImage(0, '${product.image}')" class="thumb-item squircle-sm overflow-hidden bg-obsidian/5 border border-obsidian/10 aspect-square p-0.5 sm:p-1 ring-2 ring-obsidian opacity-100 transition-all cursor-pointer">
              <img src="${product.image}" alt="Studio Angle" class="h-full w-full object-cover rounded-lg sm:rounded-xl" />
            </button>
            <button type="button" onclick="switchGalleryImage(1, '${product.image}')" class="thumb-item squircle-sm overflow-hidden bg-obsidian/5 border border-obsidian/10 aspect-square p-0.5 sm:p-1 opacity-40 hover:opacity-100 transition-all cursor-pointer">
              <div class="h-full w-full overflow-hidden rounded-lg sm:rounded-xl">
                <img src="${product.image}" alt="Macro Detail" class="h-full w-full object-cover scale-150 origin-center" />
              </div>
            </button>
            <button type="button" onclick="switchGalleryImage(2, '${product.image}')" class="thumb-item squircle-sm overflow-hidden bg-obsidian/5 border border-obsidian/10 aspect-square p-0.5 sm:p-1 opacity-40 hover:opacity-100 transition-all cursor-pointer">
              <div class="h-full w-full overflow-hidden rounded-lg sm:rounded-xl">
                <img src="${product.image}" alt="Profile View" class="h-full w-full object-cover scale-125 origin-bottom" />
              </div>
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28 mt-2 lg:mt-0">
          <div class="flex items-center gap-2.5 mb-2.5 sm:mb-3">
            <span class="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-obsidian/50 font-mono">
              ${category ? category.label : "High Jewellery"} — Collection
            </span>
            <span class="h-px w-5 bg-obsidian/20"></span>
          </div>

          <h1 class="font-heading font-light text-[2.1rem] sm:text-4xl lg:text-[3.25rem] leading-[1.1] text-obsidian mb-1.5 sm:mb-2">
            ${product.name}
          </h1>

          <p class="text-[11px] sm:text-[12px] uppercase tracking-[0.14em] text-obsidian/50 mb-4 sm:mb-5">
            ${product.material}
          </p>

          <div class="pb-4 sm:pb-6 mb-5 sm:mb-7 border-b border-obsidian/10 flex items-baseline justify-between">
            <div>
              <span class="font-heading font-normal text-3xl sm:text-4xl text-obsidian">${product.price}</span>
              <span class="block text-[10px] sm:text-[11px] text-obsidian/45 tracking-wide mt-1">Includes luxury coffer, certificate & courier</span>
            </div>
            <span class="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              In Stock
            </span>
          </div>

          <p class="text-[14px] sm:text-[15px] leading-[1.75] text-obsidian/70 font-light mb-6 sm:mb-8">
            ${story}
          </p>

          <div class="mb-6 sm:mb-7">
            <div class="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.18em] mb-2.5">
              <span class="text-obsidian/50">Alloy Selection:</span>
              <span id="selected-metal-label" class="font-medium text-obsidian">${selectedMetal}</span>
            </div>
            <div class="flex items-center gap-3">
              <button type="button" onclick="selectMetal('18k Yellow Gold')" data-metal="18k Yellow Gold" title="18k Yellow Gold" class="metal-swatch-btn h-9 w-9 sm:h-8 sm:w-8 rounded-full bg-[#f3e5ab] border border-obsidian/20 shadow-sm ring-2 ring-obsidian scale-110 transition-all cursor-pointer"></button>
              <button type="button" onclick="selectMetal('18k White Gold')" data-metal="18k White Gold" title="18k White Gold" class="metal-swatch-btn h-9 w-9 sm:h-8 sm:w-8 rounded-full bg-[#e8e8e8] border border-obsidian/20 shadow-sm transition-all cursor-pointer"></button>
              <button type="button" onclick="selectMetal('18k Rose Gold')" data-metal="18k Rose Gold" title="18k Rose Gold" class="metal-swatch-btn h-9 w-9 sm:h-8 sm:w-8 rounded-full bg-[#f5d0c5] border border-obsidian/20 shadow-sm transition-all cursor-pointer"></button>
            </div>
          </div>

          ${sizes.length > 0 ? `
          <div class="mb-6 sm:mb-8">
            <div class="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.18em] mb-2.5">
              <span class="text-obsidian/50">${extra.optionType || "Select Option"}:</span>
              ${extra.hasSizeGuide ? `
              <button onclick="toggleSizeGuide(true)" class="text-obsidian/60 hover:text-obsidian underline underline-offset-4 cursor-pointer">
                Ring Size Guide
              </button>` : `
              <span id="selected-size-label" class="font-mono text-[11px] text-obsidian font-medium">${selectedSize}</span>
              `}
            </div>
            <div class="flex flex-wrap gap-2">
              ${sizes.map((s) => `
                <button type="button" onclick="selectSize('${s}')" data-size="${s}" class="size-pill-btn px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[12px] border ${s === selectedSize ? 'bg-obsidian text-alabaster border-obsidian' : 'text-obsidian/70 border-obsidian/15 hover:border-obsidian/40'} transition-all cursor-pointer">
                  ${s}
                </button>
              `).join("")}
            </div>
          </div>` : ""}

          <div class="flex items-center gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
            <div class="flex items-center gap-1 border border-obsidian/20 rounded-full px-2 sm:px-3 py-1.5 sm:py-2 bg-alabaster">
              <button type="button" onclick="setQty(-1)" class="w-8 h-8 sm:w-7 sm:h-7 grid place-items-center rounded-full hover:bg-obsidian/10 text-obsidian/70 text-base transition-colors">&minus;</button>
              <span id="qty-display" class="w-7 sm:w-8 text-center font-mono text-[13px] text-obsidian font-medium">1</span>
              <button type="button" onclick="setQty(1)" class="w-8 h-8 sm:w-7 sm:h-7 grid place-items-center rounded-full hover:bg-obsidian/10 text-obsidian/70 text-base transition-colors">&#43;</button>
            </div>

            <button id="add-to-bag-btn" onclick="addToCartDetailed('${product.id}')" class="flex-1 bg-obsidian text-alabaster squircle py-3.5 sm:py-4 px-4 sm:px-6 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] hover:bg-obsidian/90 active:scale-[0.98] transition-all cursor-pointer shadow-sm text-center">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Mobile Menu Drawer Control
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

// Navbar Collapse Scroll Handler
function initNavbarScroll() {
  const siteNav = document.getElementById("site-nav-container");
  const navbar = document.getElementById("main-navbar");
  const logoText = document.getElementById("nav-logo-text");
  
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    
    if (scrollY > 50) {
      navbar.classList.add("py-2");
      navbar.classList.remove("py-4");
      if (siteNav) siteNav.classList.add("shadow-md");
      if (logoText) {
        logoText.classList.add("text-lg", "sm:text-xl");
        logoText.classList.remove("text-2xl", "sm:text-3xl", "md:text-4xl");
      }
    } else {
      navbar.classList.remove("py-2");
      navbar.classList.add("py-4");
      if (siteNav) siteNav.classList.remove("shadow-md");
      if (logoText) {
        logoText.classList.remove("text-lg", "sm:text-xl");
        logoText.classList.add("text-2xl", "sm:text-3xl", "md:text-4xl");
      }
    }
  }, { passive: true });
}

// Initialization on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "r1";
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  if (product) {
    document.title = `${product.name} — ALMAAZI Handcrafted Luxury`;
    renderProduct(product);
  } else {
    const root = document.getElementById("product-root");
    if (root) {
      root.innerHTML = `
        <div class="min-h-[50vh] flex flex-col items-center justify-center text-center gap-4">
          <h2 class="font-heading text-3xl text-obsidian">Creation Not Found</h2>
          <p class="text-sm text-obsidian/50">The requested jewellery piece could not be located.</p>
          <a href="index.html" class="bg-obsidian text-alabaster squircle px-6 py-3 text-[11px] uppercase tracking-[0.2em] mt-2">
            Return to Collections
          </a>
        </div>
      `;
    }
  }

  updateCartBadge();
  renderCartDrawer();
  initNavbarScroll();
});
