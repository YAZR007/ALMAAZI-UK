/**
 * ALMAAZI HAUTE JOAILLERIE - INTERACTIVE APP ENGINE
 */

// ==========================================
// 1. DATA & STATE MANAGEMENT
// ==========================================
const CURRENCIES = {
  USD: { symbol: '$', rate: 1, label: 'USD ($)' },
  AED: { symbol: 'AED ', rate: 3.67, label: 'AED (د.إ)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' }
};

let currentCurrency = 'USD';
let wishlist = JSON.parse(localStorage.getItem('almaazi_wishlist') || '[]');
let cart = JSON.parse(localStorage.getItem('almaazi_cart') || '[]');
let soundEnabled = false;

// Product Catalogue
const PRODUCTS = [
  {
    id: 'alm-01',
    name: 'The Imperial Oval Solitaire',
    category: 'rings',
    tagline: 'Flawless 3.02ct Oval Cut Diamond in Handcrafted Platinum 950',
    priceUSD: 48500,
    carat: '3.02 ct',
    clarity: 'FL (Flawless)',
    color: 'D (Exceptional White+)',
    cut: 'Excellent',
    metal: 'Platinum 950',
    image: 'assets/images/ring-solitaire.jpg',
    badge: 'Bespoke Masterpiece',
    description: 'An extraordinary centerpiece featuring a 3.02-carat oval brilliant diamond of immaculate D-Flawless grade, secured by four whisper-thin prongs with a French micro-pavé band.'
  },
  {
    id: 'alm-02',
    name: 'The Constellation Cascade Collier',
    category: 'necklaces',
    tagline: '18.50ct Marquise & Pear-Cut Cascading Haute Joaillerie Necklace',
    priceUSD: 145000,
    carat: '18.50 ct Total',
    clarity: 'VVS1',
    color: 'E - F Collection',
    cut: 'Ideal Symmetry',
    metal: '18K White Gold',
    image: 'assets/images/necklace-royal.jpg',
    badge: 'Haute Joaillerie',
    description: 'Articulated with supreme fluidity, over 120 hand-selected marquise and pear-cut diamonds drape gracefully along the décolletage, terminating in a rare 3.5-carat pear drop.'
  },
  {
    id: 'alm-03',
    name: 'The Royal Étoile Chandelier Earrings',
    category: 'earrings',
    tagline: 'Royal Blue Sapphires & Emerald-Cut Diamonds suspended in 18K White Gold',
    priceUSD: 62000,
    carat: '12.80 ct Combined',
    clarity: 'VVS1 / Natural Royal Blue',
    color: 'D Diamond & Ceylon Sapphire',
    cut: 'Step-Cut & Brilliant Pear',
    metal: '18K White Gold',
    image: 'assets/images/earrings-sapphire.jpg',
    badge: 'High Jewellery',
    description: 'Twin emerald-cut diamonds of monumental fire anchor sweeping diamond lace tiers, culminating in natural unheated Ceylon royal blue sapphire drops.'
  },
  {
    id: 'alm-04',
    name: 'L’Infini Rivière Tennis Bracelet',
    category: 'bracelets',
    tagline: '7.15ct Bezel-Set Round Brilliant Diamonds in Polished Platinum',
    priceUSD: 29500,
    carat: '7.15 ct Total',
    clarity: 'VVS2',
    color: 'E Collection',
    cut: 'Hearts & Arrows Brilliant',
    metal: 'Platinum 950',
    image: 'assets/images/bracelet-tennis.jpg',
    badge: 'Signature Icon',
    description: 'A contemporary reimagining of the classic rivière bracelet, featuring custom smooth-bezel settings engineered for velvet-smooth comfort and continuous brilliance.'
  },
  {
    id: 'alm-05',
    name: 'The Sovereign Colombian Emerald Ring',
    category: 'rings',
    tagline: '4.10ct Muzo Cushion Emerald encircled by Dual Diamond Halos',
    priceUSD: 78000,
    carat: '4.10 ct Emerald + 1.20 ct Diamonds',
    clarity: 'Minor Cedar Oil (GIA Certified)',
    color: 'Vivid Green (Muzo)',
    cut: 'Cushion Step-Cut',
    metal: '18K Yellow Gold & Platinum',
    image: 'assets/images/ring-emerald.jpg',
    badge: 'Rare Gemstone',
    description: 'Celebrated for its intense Colombian emerald glow, framed in hand-sculpted 18k yellow gold claws and flanked by brilliant white round diamonds.'
  }
];

// ==========================================
// 2. AUDIO SYNTHESIZER (Luxury Crystal Chime)
// ==========================================
function playCrystalChime(pitch = 880) {
  if (!soundEnabled) return;
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(pitch * 1.5, audioCtx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.6);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.6);
  } catch (e) {
    // Audio context silently ignored if restricted
  }
}

// ==========================================
// 3. CURRENCY FORMATTER
// ==========================================
function formatPrice(amountUSD) {
  const curr = CURRENCIES[currentCurrency];
  const converted = Math.round(amountUSD * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

function updateAllPricesOnPage() {
  document.querySelectorAll('[data-usd-price]').forEach(el => {
    const usd = parseFloat(el.getAttribute('data-usd-price'));
    if (!isNaN(usd)) {
      el.textContent = formatPrice(usd);
    }
  });
}

// ==========================================
// 4. HERO SPARKLE PARTICLE CANVAS
// ==========================================
function initSparkleCanvas() {
  const canvas = document.getElementById('sparkle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const particles = [];
  const particleCount = 45;

  class SparkleParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.8 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
      this.isStar = Math.random() > 0.6;
      this.goldHue = Math.random() > 0.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha += this.pulseSpeed;

      if (this.alpha > 0.95 || this.alpha < 0.15) {
        this.pulseSpeed = -this.pulseSpeed;
      }

      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
      ctx.fillStyle = this.goldHue ? '#f7e7be' : '#ffffff';
      ctx.shadowBlur = 12;
      ctx.shadowColor = this.goldHue ? 'rgba(212, 175, 55, 0.8)' : 'rgba(255, 255, 255, 0.9)';

      if (this.isStar) {
        // Draw 4-point diamond star
        const r = this.size * 2.2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - r);
        ctx.lineTo(this.x + r * 0.25, this.y);
        ctx.lineTo(this.x, this.y + r);
        ctx.lineTo(this.x - r * 0.25, this.y);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.x - r, this.y);
        ctx.lineTo(this.x, this.y + r * 0.25);
        ctx.lineTo(this.x + r, this.y);
        ctx.lineTo(this.x, this.y - r * 0.25);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new SparkleParticle());
  }

  // Mouse interaction
  let mouse = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      // Gentle attraction towards cursor
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        p.x += (dx / dist) * 0.5;
        p.y += (dy / dist) * 0.5;
        p.alpha = Math.min(1, p.alpha + 0.04);
      }

      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// 5. PRODUCT CATALOGUE RENDERING & FILTERING
// ==========================================
function renderProducts(filter = 'all') {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  container.innerHTML = filtered.map(product => {
    const inWishlist = wishlist.includes(product.id);
    return `
      <div class="luxury-card rounded-2xl overflow-hidden flex flex-col group relative" data-product-id="${product.id}">
        <!-- Top Badges -->
        <div class="absolute top-4 left-4 z-10 flex gap-2">
          <span class="badge-luxury px-3 py-1 rounded-full font-serif">${product.badge}</span>
        </div>

        <!-- Wishlist Button -->
        <button 
          onclick="toggleWishlist('${product.id}')"
          class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 hover:text-amber-400 hover:border-amber-400/50 backdrop-blur-md transition-all duration-300 ${inWishlist ? 'text-amber-400 border-amber-400/50' : ''}"
          title="Save to Wishlist"
        >
          <i data-lucide="heart" class="w-4 h-4 ${inWishlist ? 'fill-current' : ''}"></i>
        </button>

        <!-- Image Container with Hover Zoom -->
        <div class="product-image-container aspect-square bg-[#0a0b0e] relative cursor-pointer" onclick="openQuickView('${product.id}')">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-transparent to-transparent opacity-60"></div>
          
          <!-- Hover Quick Look Overlay -->
          <div class="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span class="px-5 py-2.5 rounded-full bg-[#12131a]/90 text-amber-200 border border-amber-500/40 text-xs tracking-widest uppercase font-serif flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-2xl">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Discover Details
            </span>
          </div>
        </div>

        <!-- Product Specs & Content -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-amber-300/80 mb-1.5 tracking-wider font-mono">
              <span>${product.metal}</span>
              <span>${product.carat}</span>
            </div>
            <h3 class="font-serif text-lg text-white font-medium group-hover:text-amber-200 transition-colors duration-300 mb-2">
              ${product.name}
            </h3>
            <p class="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed font-light">
              ${product.tagline}
            </p>
          </div>

          <div class="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
            <div>
              <span class="text-[10px] uppercase tracking-wider text-slate-500 block">Acquisition</span>
              <span class="text-base font-serif font-semibold text-amber-300" data-usd-price="${product.priceUSD}">
                ${formatPrice(product.priceUSD)}
              </span>
            </div>
            <div class="flex gap-2">
              <button 
                onclick="addToBag('${product.id}')"
                class="btn-gold px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                title="Add to Private Bag"
              >
                <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
                <span>Acquire</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function filterProducts(category, btnElement) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('bg-amber-400/20', 'text-amber-300', 'border-amber-400/50');
    btn.classList.add('text-slate-400', 'border-white/10');
  });
  if (btnElement) {
    btnElement.classList.add('bg-amber-400/20', 'text-amber-300', 'border-amber-400/50');
    btnElement.classList.remove('text-slate-400', 'border-white/10');
  }
  renderProducts(category);
  playCrystalChime(660);
}

// ==========================================
// 6. QUICK VIEW MODAL
// ==========================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const content = document.getElementById('quick-view-content');

  content.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
      <!-- Image Column -->
      <div class="relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 aspect-square">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
        <div class="absolute top-4 left-4">
          <span class="badge-luxury px-3 py-1 rounded-full font-serif">${product.badge}</span>
        </div>
      </div>

      <!-- Detail Column -->
      <div class="flex flex-col justify-between">
        <div>
          <span class="text-xs tracking-widest uppercase text-amber-400 font-mono block mb-1">Haute Joaillerie Reference ${product.id.toUpperCase()}</span>
          <h2 class="font-serif text-2xl md:text-3xl text-white font-medium mb-3">${product.name}</h2>
          <div class="text-xl font-serif text-amber-300 mb-4" data-usd-price="${product.priceUSD}">
            ${formatPrice(product.priceUSD)}
          </div>
          <p class="text-sm text-slate-300 font-light leading-relaxed mb-6">
            ${product.description}
          </p>

          <!-- Specifications Table -->
          <div class="border border-white/10 rounded-xl overflow-hidden mb-6 text-xs bg-white/[0.02]">
            <div class="grid grid-cols-2 border-b border-white/10 p-3">
              <span class="text-slate-400">Precious Metal</span>
              <span class="text-white font-medium text-right">${product.metal}</span>
            </div>
            <div class="grid grid-cols-2 border-b border-white/10 p-3">
              <span class="text-slate-400">Total Gem Carat</span>
              <span class="text-white font-medium text-right">${product.carat}</span>
            </div>
            <div class="grid grid-cols-2 border-b border-white/10 p-3">
              <span class="text-slate-400">Diamond Color Grade</span>
              <span class="text-white font-medium text-right">${product.color}</span>
            </div>
            <div class="grid grid-cols-2 p-3">
              <span class="text-slate-400">Clarity & Cut</span>
              <span class="text-white font-medium text-right">${product.clarity} • ${product.cut}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
          <button onclick="addToBag('${product.id}'); closeQuickView();" class="btn-gold flex-1 py-3 rounded-xl text-xs flex items-center justify-center gap-2">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i> Add to Private Bag
          </button>
          <button onclick="openConsultation('${product.name}'); closeQuickView();" class="btn-outline-gold flex-1 py-3 rounded-xl text-xs flex items-center justify-center gap-2">
            <i data-lucide="calendar" class="w-4 h-4"></i> Private Salon Viewing
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  playCrystalChime(750);
  if (window.lucide) window.lucide.createIcons();
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ==========================================
// 7. INTERACTIVE BESPOKE ATELIER CUSTOMIZER
// ==========================================
let customizerState = {
  gem: 'diamond',
  metal: 'platinum',
  carat: 2.50,
  rotX: 0,
  rotY: 0
};

const GEM_CONFIGS = {
  diamond: {
    name: 'D-Flawless Rare Diamond',
    colorHex: '#ffffff',
    glowColor: 'rgba(255, 255, 255, 0.8)',
    basePrice: 32000,
    caratMultiplier: 12000,
    img: 'assets/images/ring-solitaire.jpg',
    cert: 'GIA #ALM-99401'
  },
  sapphire: {
    name: 'Royal Ceylon Sapphire',
    colorHex: '#2563eb',
    glowColor: 'rgba(37, 99, 235, 0.8)',
    basePrice: 22000,
    caratMultiplier: 7500,
    img: 'assets/images/earrings-sapphire.jpg',
    cert: 'GRS #SWISS-8832'
  },
  emerald: {
    name: 'Muzo Colombian Emerald',
    colorHex: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.8)',
    basePrice: 28000,
    caratMultiplier: 9800,
    img: 'assets/images/ring-emerald.jpg',
    cert: 'Gübelin #COL-5519'
  },
  pink: {
    name: 'Vivid Argyle Pink Diamond',
    colorHex: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.8)',
    basePrice: 65000,
    caratMultiplier: 25000,
    img: 'assets/images/ring-solitaire.jpg',
    cert: 'Argyle Lot #882-P'
  }
};

const METAL_CONFIGS = {
  platinum: { name: 'Platinum 950', tint: '#e2e8f0', surcharge: 2500 },
  yellow: { name: '18K Royal Yellow Gold', tint: '#d4af37', surcharge: 1800 },
  rose: { name: '18K Champagne Rose Gold', tint: '#f43f5e', surcharge: 1900 }
};

function initCustomizer() {
  updateCustomizerUI();

  // 3D Tilt / Interactive Drag
  const stage = document.getElementById('customizer-stage');
  const targetRing = document.getElementById('customizer-ring-view');
  if (!stage || !targetRing) return;

  let isDragging = false;
  let startX = 0;
  let startY = 0;

  stage.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) {
      // Subtle tilt on mouse hover
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      if (Math.abs(x) < rect.width && Math.abs(y) < rect.height) {
        targetRing.style.transform = `perspective(800px) rotateY(${x * 0.04}deg) rotateX(${-y * 0.04}deg) scale(1.02)`;
      }
      return;
    }

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    customizerState.rotY += deltaX * 0.3;
    customizerState.rotX = Math.max(-30, Math.min(30, customizerState.rotX - deltaY * 0.2));
    startX = e.clientX;
    startY = e.clientY;

    targetRing.style.transform = `perspective(800px) rotateY(${customizerState.rotY}deg) rotateX(${customizerState.rotX}deg) scale(1.05)`;
  });
}

function setCustomizerGem(gemKey) {
  customizerState.gem = gemKey;
  updateCustomizerUI();
  playCrystalChime(950);
}

function setCustomizerMetal(metalKey) {
  customizerState.metal = metalKey;
  updateCustomizerUI();
  playCrystalChime(800);
}

function setCustomizerCarat(caratVal) {
  customizerState.carat = parseFloat(caratVal);
  document.getElementById('carat-display-val').textContent = `${customizerState.carat.toFixed(2)} ct`;
  updateCustomizerUI();
}

function updateCustomizerUI() {
  const gem = GEM_CONFIGS[customizerState.gem];
  const metal = METAL_CONFIGS[customizerState.metal];

  // Price Calculation
  const calculatedPriceUSD = gem.basePrice + (customizerState.carat * gem.caratMultiplier) + metal.surcharge;

  // DOM Elements
  const priceEl = document.getElementById('customizer-price');
  const specGemEl = document.getElementById('customizer-spec-gem');
  const specMetalEl = document.getElementById('customizer-spec-metal');
  const specCertEl = document.getElementById('customizer-spec-cert');
  const ringImg = document.getElementById('customizer-ring-img');
  const glowRing = document.getElementById('customizer-gem-glow');

  if (priceEl) {
    priceEl.setAttribute('data-usd-price', calculatedPriceUSD);
    priceEl.textContent = formatPrice(calculatedPriceUSD);
  }
  if (specGemEl) specGemEl.textContent = gem.name;
  if (specMetalEl) specMetalEl.textContent = metal.name;
  if (specCertEl) specCertEl.textContent = gem.cert;

  if (ringImg) {
    ringImg.src = gem.img;
  }

  if (glowRing) {
    glowRing.style.boxShadow = `0 0 70px 20px ${gem.glowColor}`;
  }

  // Update button highlights
  document.querySelectorAll('[data-gem-choice]').forEach(btn => {
    if (btn.getAttribute('data-gem-choice') === customizerState.gem) {
      btn.classList.add('ring-2', 'ring-amber-400', 'border-amber-400');
    } else {
      btn.classList.remove('ring-2', 'ring-amber-400', 'border-amber-400');
    }
  });

  document.querySelectorAll('[data-metal-choice]').forEach(btn => {
    if (btn.getAttribute('data-metal-choice') === customizerState.metal) {
      btn.classList.add('ring-2', 'ring-amber-400', 'border-amber-400');
    } else {
      btn.classList.remove('ring-2', 'ring-amber-400', 'border-amber-400');
    }
  });
}

function orderCustomPiece() {
  const gem = GEM_CONFIGS[customizerState.gem];
  const metal = METAL_CONFIGS[customizerState.metal];
  const priceUSD = gem.basePrice + (customizerState.carat * gem.caratMultiplier) + metal.surcharge;

  const bespokeItem = {
    id: `custom-${Date.now()}`,
    name: `Bespoke ${gem.name} Creation (${customizerState.carat.toFixed(2)} ct)`,
    priceUSD: priceUSD,
    metal: metal.name,
    image: gem.img,
    tagline: `Crafted in ${metal.name} with certified ${gem.name}`
  };

  cart.push(bespokeItem);
  saveCart();
  openBagDrawer();
  showToast('Bespoke Creation Added to Your Bag');
  playCrystalChime(1100);
}

// ==========================================
// 8. INTERACTIVE CARAT & RING SIZER GUIDE
// ==========================================
function updateInteractiveCaratVisualizer(caratVal) {
  const carat = parseFloat(caratVal);
  const visualCircle = document.getElementById('carat-circle-visual');
  const mmDisplay = document.getElementById('carat-mm-display');
  const caratNumDisplay = document.getElementById('carat-slider-num');

  // Realistic diamond diameters for round brilliant
  // 0.5ct ~ 5.2mm, 1.0ct ~ 6.5mm, 2.0ct ~ 8.2mm, 3.0ct ~ 9.4mm, 5.0ct ~ 11.1mm
  const mm = (5.0 + Math.sqrt(carat) * 2.7).toFixed(1);
  const scalePx = 40 + (carat * 18);

  if (visualCircle) {
    visualCircle.style.width = `${scalePx}px`;
    visualCircle.style.height = `${scalePx}px`;
  }
  if (mmDisplay) mmDisplay.textContent = `~ ${mm} mm diameter`;
  if (caratNumDisplay) caratNumDisplay.textContent = `${carat.toFixed(2)} Carats`;
}

function updateRingSizeGuide(val) {
  const sizeUS = parseFloat(val);
  const circle = document.getElementById('ring-sizer-circle');
  const sizeDisplay = document.getElementById('ring-size-label');

  // US Size 4 is ~14.9mm, Size 9 is ~19.0mm
  const diameterMM = (14.9 + (sizeUS - 4) * 0.82).toFixed(1);
  const pixelDiameter = 80 + (sizeUS - 4) * 10;

  if (circle) {
    circle.style.width = `${pixelDiameter}px`;
    circle.style.height = `${pixelDiameter}px`;
  }
  if (sizeDisplay) {
    sizeDisplay.textContent = `US Size ${sizeUS} (${diameterMM} mm)`;
  }
}

// ==========================================
// 9. WISHLIST & SHOPPING BAG ENGINE
// ==========================================
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Removed from Wishlist');
  } else {
    wishlist.push(productId);
    showToast('Saved to Almaazi Private Wishlist');
    playCrystalChime(900);
  }

  localStorage.setItem('almaazi_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  renderProducts();
}

function updateWishlistBadge() {
  const badges = document.querySelectorAll('.wishlist-counter');
  badges.forEach(b => {
    b.textContent = wishlist.length;
    b.style.display = wishlist.length > 0 ? 'inline-flex' : 'none';
  });
}

function addToBag(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  cart.push(product);
  saveCart();
  openBagDrawer();
  showToast(`Added "${product.name}" to Private Bag`);
  playCrystalChime(1050);
}

function removeFromBag(index) {
  cart.splice(index, 1);
  saveCart();
  renderBagContents();
  showToast('Item Removed');
}

function saveCart() {
  localStorage.setItem('almaazi_cart', JSON.stringify(cart));
  updateBagBadge();
  renderBagContents();
}

function updateBagBadge() {
  const badges = document.querySelectorAll('.bag-counter');
  badges.forEach(b => {
    b.textContent = cart.length;
    b.style.display = cart.length > 0 ? 'inline-flex' : 'none';
  });
}

function renderBagContents() {
  const container = document.getElementById('bag-items-list');
  const subtotalEl = document.getElementById('bag-subtotal-price');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-400">
        <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-4 stroke-slate-600"></i>
        <p class="font-serif text-lg text-white mb-2">Your Private Bag is Empty</p>
        <p class="text-xs text-slate-500 max-w-xs mx-auto">Explore our High Jewellery creations or design a bespoke commission with our master artisans.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let totalUSD = 0;
  container.innerHTML = cart.map((item, index) => {
    totalUSD += item.priceUSD;
    return `
      <div class="flex items-center gap-4 py-4 border-b border-white/5">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-xl object-cover border border-white/10 bg-black/40">
        <div class="flex-1 min-w-0">
          <h4 class="font-serif text-sm text-white truncate font-medium">${item.name}</h4>
          <span class="text-xs text-slate-400 block">${item.metal || 'High Jewellery'}</span>
          <span class="text-xs text-amber-300 font-mono" data-usd-price="${item.priceUSD}">${formatPrice(item.priceUSD)}</span>
        </div>
        <button onclick="removeFromBag(${index})" class="text-slate-500 hover:text-red-400 p-2 transition-colors" title="Remove Item">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }).join('');

  if (subtotalEl) {
    subtotalEl.setAttribute('data-usd-price', totalUSD);
    subtotalEl.textContent = formatPrice(totalUSD);
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
  setTimeout(() => drawer.classList.add('pointer-events-none'), 400);
}

// ==========================================
// 10. VIP PRIVATE SALON CONSULTATION MODAL
// ==========================================
function openConsultation(pieceName = '') {
  const modal = document.getElementById('consultation-modal');
  const inputInterest = document.getElementById('consultation-interest');
  if (inputInterest && pieceName) {
    inputInterest.value = `Private Viewing: ${pieceName}`;
  }
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
  showToast('Private Salon Appointment Requested. Our concierge will contact you within 2 hours.');
  playCrystalChime(1200);
}

// ==========================================
// 11. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  const toast = document.getElementById('luxury-toast');
  if (!toast) return;

  toast.querySelector('.toast-message').textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-10');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-10');
    toast.classList.remove('opacity-100', 'translate-y-0');
  }, 3800);
}

// ==========================================
// 12. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initSparkleCanvas();
  renderProducts();
  initCustomizer();
  updateWishlistBadge();
  updateBagBadge();
  renderBagContents();
  updateInteractiveCaratVisualizer(2.0);
  updateRingSizeGuide(6);

  // Currency Selector
  const currencySelect = document.getElementById('currency-select');
  if (currencySelect) {
    currencySelect.addEventListener('change', e => {
      currentCurrency = e.target.value;
      updateAllPricesOnPage();
      updateCustomizerUI();
      renderBagContents();
      showToast(`Currency Switched to ${currentCurrency}`);
    });
  }

  // Audio Toggle
  const audioToggle = document.getElementById('audio-toggle');
  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      audioToggle.classList.toggle('text-amber-400', soundEnabled);
      audioToggle.classList.toggle('text-slate-400', !soundEnabled);
      if (soundEnabled) playCrystalChime(880);
      showToast(soundEnabled ? 'Acoustic Ambiance Enabled' : 'Acoustic Ambiance Muted');
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
});
