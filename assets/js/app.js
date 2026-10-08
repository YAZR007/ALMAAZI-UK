/**
 * ALMAAZI - MODERN MINIMAL ENGINE
 */

const CURRENCIES = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  AED: { symbol: 'AED ', rate: 3.67 }
};

let currentCurrency = 'USD';
let wishlist = JSON.parse(localStorage.getItem('almaazi_wishlist') || '[]');
let cart = JSON.parse(localStorage.getItem('almaazi_cart') || '[]');

const PRODUCTS = [
  {
    id: 'alm-01',
    name: 'Oval Solitaire',
    category: 'rings',
    tagline: '3.02ct Flawless Oval Diamond • Platinum 950',
    priceUSD: 48500,
    carat: '3.02 ct',
    clarity: 'FL / D',
    metal: 'Platinum 950',
    image: 'assets/images/ring-solitaire.jpg',
    description: 'A pure 3.02-carat oval brilliant diamond of D-Flawless grade, secured by four delicate needle prongs over a minimal micro-pavé band.'
  },
  {
    id: 'alm-02',
    name: 'Cascade Collier',
    category: 'necklaces',
    tagline: '18.50ct Marquise & Pear Diamonds • 18K White Gold',
    priceUSD: 145000,
    carat: '18.50 ct',
    clarity: 'VVS1 / E',
    metal: '18K White Gold',
    image: 'assets/images/necklace-royal.jpg',
    description: 'A sculptural high jewellery necklace of interconnected marquise and pear diamonds engineered for fluid ergonomic wear.'
  },
  {
    id: 'alm-03',
    name: 'Étoile Chandelier',
    category: 'earrings',
    tagline: 'Natural Ceylon Sapphires & Step-Cut Diamonds',
    priceUSD: 62000,
    carat: '12.80 ct',
    clarity: 'VVS1 / Royal Blue',
    metal: '18K White Gold',
    image: 'assets/images/earrings-sapphire.jpg',
    description: 'Twin emerald-cut diamonds suspending geometric diamond tiers with natural unheated Ceylon royal blue sapphire drops.'
  },
  {
    id: 'alm-04',
    name: 'Rivière Bracelet',
    category: 'bracelets',
    tagline: '7.15ct Bezel Diamond Tennis Bracelet • Platinum',
    priceUSD: 29500,
    carat: '7.15 ct',
    clarity: 'VVS2 / E',
    metal: 'Platinum 950',
    image: 'assets/images/bracelet-tennis.jpg',
    description: 'A seamless, modern interpretation of the classic rivière bracelet with clean low-profile bezel cups.'
  },
  {
    id: 'alm-05',
    name: 'Sovereign Emerald Ring',
    category: 'rings',
    tagline: '4.10ct Muzo Colombian Emerald • Diamond Halo',
    priceUSD: 78000,
    carat: '4.10 ct',
    clarity: 'Vivid Green / Muzo',
    metal: '18K Gold & Platinum',
    image: 'assets/images/ring-emerald.jpg',
    description: 'An exceptional Colombian emerald framed by minimal diamond pavé, set in warm 18k yellow gold claws.'
  }
];

function formatPrice(amountUSD) {
  const curr = CURRENCIES[currentCurrency];
  const converted = Math.round(amountUSD * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

function updatePrices() {
  document.querySelectorAll('[data-usd-price]').forEach(el => {
    const usd = parseFloat(el.getAttribute('data-usd-price'));
    if (!isNaN(usd)) {
      el.textContent = formatPrice(usd);
    }
  });
}

// ------------------------------------------
// Catalog Rendering
// ------------------------------------------
function renderProducts(filter = 'all') {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  container.innerHTML = filtered.map(item => {
    const inWishlist = wishlist.includes(item.id);
    return `
      <div class="glass-panel squircle squircle-card p-4 flex flex-col group relative" data-product-id="${item.id}">
        
        <!-- Wishlist Button -->
        <button 
          onclick="toggleWishlist('${item.id}')"
          class="absolute top-7 right-7 z-10 w-9 h-9 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/70 hover:text-white backdrop-blur-md transition-all ${inWishlist ? 'text-white border-white/40' : ''}"
        >
          <i data-lucide="heart" class="w-4 h-4 ${inWishlist ? 'fill-white' : ''}"></i>
        </button>

        <!-- Image Container -->
        <div class="img-zoom-container rounded-2xl aspect-square bg-[#0f0f13] relative cursor-pointer" onclick="openQuickView('${item.id}')">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <!-- Info -->
        <div class="pt-4 px-2 pb-2 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[11px] text-white/40 mb-1 font-mono uppercase tracking-wider">
              <span>${item.metal}</span>
              <span>${item.carat}</span>
            </div>
            <h3 class="text-base text-white font-medium mb-1 tracking-tight">
              ${item.name}
            </h3>
            <p class="text-xs text-white/50 line-clamp-1 mb-4 font-light">
              ${item.tagline}
            </p>
          </div>

          <div class="pt-3 border-t border-white/5 flex items-center justify-between">
            <span class="text-sm font-semibold text-white font-mono" data-usd-price="${item.priceUSD}">
              ${formatPrice(item.priceUSD)}
            </span>
            <div class="flex gap-2">
              <button 
                onclick="addToBag('${item.id}')"
                class="btn-matte-ghost px-3.5 py-1.5 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-all"
              >
                Acquire
              </button>
            </div>
          </div>
        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function filterProducts(category, btnElement) {
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.remove('bg-white', 'text-black');
    btn.classList.add('text-white/60');
  });
  if (btnElement) {
    btnElement.classList.add('bg-white', 'text-black');
    btnElement.classList.remove('text-white/60');
  }
  renderProducts(category);
}

// ------------------------------------------
// Quick View
// ------------------------------------------
function openQuickView(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
      <div class="rounded-2xl overflow-hidden aspect-square bg-[#0f0f13] border border-white/5">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <span class="text-[11px] uppercase tracking-wider text-white/40 font-mono block mb-2">${product.metal} • ${product.carat}</span>
          <h2 class="text-2xl sm:text-3xl font-normal text-white mb-2 tracking-tight">${product.name}</h2>
          <div class="text-xl font-mono text-white mb-4" data-usd-price="${product.priceUSD}">
            ${formatPrice(product.priceUSD)}
          </div>
          <p class="text-sm text-white/70 font-light leading-relaxed mb-6">
            ${product.description}
          </p>
          <div class="glass-panel squircle-sm p-4 text-xs space-y-2 mb-6">
            <div class="flex justify-between text-white/60">
              <span>Clarity & Grade</span>
              <span class="text-white">${product.clarity}</span>
            </div>
            <div class="flex justify-between text-white/60">
              <span>Setting & Metal</span>
              <span class="text-white">${product.metal}</span>
            </div>
            <div class="flex justify-between text-white/60">
              <span>Certification</span>
              <span class="text-white">GIA Certified Report</span>
            </div>
          </div>
        </div>

        <div class="flex gap-3">
          <button onclick="addToBag('${product.id}'); closeQuickView();" class="btn-matte-white flex-1 py-3 rounded-full text-xs">
            Add to Bag
          </button>
          <button onclick="openConsultation('${product.name}'); closeQuickView();" class="btn-matte-ghost flex-1 py-3 rounded-full text-xs">
            Book Viewing
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) window.lucide.createIcons();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ------------------------------------------
// Minimal Customizer
// ------------------------------------------
const CUSTOM_GEMS = {
  diamond: { name: 'D-Flawless Diamond', price: 34000, img: 'assets/images/ring-solitaire.jpg' },
  sapphire: { name: 'Royal Sapphire', price: 24000, img: 'assets/images/earrings-sapphire.jpg' },
  emerald: { name: 'Muzo Emerald', price: 29000, img: 'assets/images/ring-emerald.jpg' }
};

const CUSTOM_METALS = {
  platinum: { name: 'Platinum 950', fee: 2000 },
  yellow: { name: '18K Yellow Gold', fee: 1500 },
  rose: { name: '18K Rose Gold', fee: 1600 }
};

let currentGem = 'diamond';
let currentMetal = 'platinum';
let currentCarat = 2.0;

function setCustomGem(key) {
  currentGem = key;
  updateCustomizerPreview();
}

function setCustomMetal(key) {
  currentMetal = key;
  updateCustomizerPreview();
}

function setCustomCarat(val) {
  currentCarat = parseFloat(val);
  document.getElementById('carat-val-label').textContent = `${currentCarat.toFixed(2)} ct`;
  updateCustomizerPreview();
}

function updateCustomizerPreview() {
  const gem = CUSTOM_GEMS[currentGem];
  const metal = CUSTOM_METALS[currentMetal];
  const total = gem.price + (currentCarat * 9000) + metal.fee;

  const priceEl = document.getElementById('custom-price-display');
  const imgEl = document.getElementById('custom-img-display');
  const titleEl = document.getElementById('custom-title-display');

  if (priceEl) {
    priceEl.setAttribute('data-usd-price', total);
    priceEl.textContent = formatPrice(total);
  }
  if (imgEl) imgEl.src = gem.img;
  if (titleEl) titleEl.textContent = `${gem.name} in ${metal.name}`;

  document.querySelectorAll('[data-gem]').forEach(btn => {
    btn.classList.toggle('border-white/40', btn.getAttribute('data-gem') === currentGem);
    btn.classList.toggle('bg-white/10', btn.getAttribute('data-gem') === currentGem);
  });

  document.querySelectorAll('[data-metal]').forEach(btn => {
    btn.classList.toggle('border-white/40', btn.getAttribute('data-metal') === currentMetal);
    btn.classList.toggle('bg-white/10', btn.getAttribute('data-metal') === currentMetal);
  });
}

function addCustomToBag() {
  const gem = CUSTOM_GEMS[currentGem];
  const metal = CUSTOM_METALS[currentMetal];
  const total = gem.price + (currentCarat * 9000) + metal.fee;

  cart.push({
    id: `custom-${Date.now()}`,
    name: `Custom ${gem.name} Ring`,
    tagline: `${currentCarat.toFixed(2)}ct • ${metal.name}`,
    priceUSD: total,
    metal: metal.name,
    image: gem.img
  });

  saveCart();
  openBagDrawer();
}

// ------------------------------------------
// Minimal Sizing & Carat Visualizer
// ------------------------------------------
function updateCaratVisualizer(val) {
  const carat = parseFloat(val);
  const circle = document.getElementById('carat-visual-dot');
  const label = document.getElementById('carat-scale-label');
  const mm = (5.0 + Math.sqrt(carat) * 2.7).toFixed(1);

  const sizePx = 36 + (carat * 18);
  if (circle) {
    circle.style.width = `${sizePx}px`;
    circle.style.height = `${sizePx}px`;
  }
  if (label) {
    label.textContent = `${carat.toFixed(2)} ct • ~${mm}mm diameter`;
  }
}

// ------------------------------------------
// Wishlist & Bag
// ------------------------------------------
function toggleWishlist(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem('almaazi_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlist-count');
  if (badge) {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';
  }
}

function addToBag(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;
  cart.push(p);
  saveCart();
  openBagDrawer();
}

function removeFromBag(index) {
  cart.splice(index, 1);
  saveCart();
}

function saveCart() {
  localStorage.setItem('almaazi_cart', JSON.stringify(cart));
  updateBagBadge();
  renderBag();
}

function updateBagBadge() {
  const badge = document.getElementById('bag-count');
  if (badge) {
    badge.textContent = cart.length;
    badge.style.display = cart.length > 0 ? 'inline-flex' : 'none';
  }
}

function renderBag() {
  const list = document.getElementById('bag-items-list');
  const subtotalEl = document.getElementById('bag-subtotal');
  if (!list) return;

  if (cart.length === 0) {
    list.innerHTML = `
      <div class="py-20 text-center text-white/40">
        <p class="text-sm font-light">Your bag is empty</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  list.innerHTML = cart.map((item, idx) => {
    total += item.priceUSD;
    return `
      <div class="flex items-center gap-4 py-3 border-b border-white/5">
        <img src="${item.image}" alt="${item.name}" class="w-14 h-14 rounded-xl object-cover bg-[#121215]">
        <div class="flex-1 min-w-0">
          <h4 class="text-sm text-white font-medium truncate">${item.name}</h4>
          <span class="text-xs text-white/50 block font-light">${item.metal || 'High Jewellery'}</span>
          <span class="text-xs font-mono text-white/80" data-usd-price="${item.priceUSD}">${formatPrice(item.priceUSD)}</span>
        </div>
        <button onclick="removeFromBag(${idx})" class="p-2 text-white/40 hover:text-white transition-colors">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');

  if (subtotalEl) {
    subtotalEl.setAttribute('data-usd-price', total);
    subtotalEl.textContent = formatPrice(total);
  }

  if (window.lucide) window.lucide.createIcons();
}

function openBagDrawer() {
  const drawer = document.getElementById('bag-drawer');
  drawer.classList.remove('pointer-events-none');
  drawer.querySelector('.drawer-backdrop').classList.remove('opacity-0');
  drawer.querySelector('.drawer-panel').classList.remove('translate-x-full');
}

function closeBagDrawer() {
  const drawer = document.getElementById('bag-drawer');
  drawer.querySelector('.drawer-backdrop').classList.add('opacity-0');
  drawer.querySelector('.drawer-panel').classList.add('translate-x-full');
  setTimeout(() => drawer.classList.add('pointer-events-none'), 300);
}

// ------------------------------------------
// Consultation Modal
// ------------------------------------------
function openConsultation(pieceName = '') {
  const modal = document.getElementById('consultation-modal');
  const input = document.getElementById('consultation-interest');
  if (input && pieceName) input.value = pieceName;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeConsultation() {
  const modal = document.getElementById('consultation-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function submitConsultation(e) {
  e.preventDefault();
  closeConsultation();
  alert('Thank you. Our private concierge will reach out within 2 hours.');
}

// ------------------------------------------
// Initialization
// ------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCustomizerPreview();
  updateWishlistBadge();
  updateBagBadge();
  renderBag();
  updateCaratVisualizer(2.0);

  const currSelect = document.getElementById('currency-select');
  if (currSelect) {
    currSelect.addEventListener('change', e => {
      currentCurrency = e.target.value;
      updatePrices();
      updateCustomizerPreview();
      renderBag();
    });
  }

  if (window.lucide) window.lucide.createIcons();
});
