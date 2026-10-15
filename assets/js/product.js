/**
 * ALMAAZI — Product Detail Page Logic
 * Reads ?id=<productId> from URL, renders the full luxury product page.
 */

// Extended luxury metadata for all 12 products
const DETAILS = {
  // Rings
  r1: {
    badge: "Maison Signature",
    cut: "Round Brilliant Cut",
    carat: "0.50 ct • Color F • Clarity VS1",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["US 5", "US 6", "US 7", "US 8"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold (Au750)" },
      { label: "Centre Stone", value: "0.50ct Natural Brilliant Diamond" },
      { label: "Color / Clarity", value: "F Color / VS1 Clarity" },
      { label: "Setting",     value: "Four-Prong High Solitaire" },
      { label: "Band Width",  value: "1.6mm Comfort Fit" },
      { label: "Origin",      value: "Handcrafted in Private Atelier" }
    ],
    care: "Clean with lukewarm water, mild soap, and a soft-bristled brush. Store individually in your Almaazi suede pouch to preserve its mirror luster.",
    story: "The Aurora Solitaire was conceived around the purity of morning light. Cast in 18k solid gold with a slender, knife-edge band, the central stone sits elevated in four hand-filed claws to catch and disperse ambient light with every subtle gesture."
  },
  r2: {
    badge: "Iconic Eternity",
    cut: "Full Pavé Micro-Brilliant",
    carat: "0.85 ct Total Weight",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["US 5", "US 6", "US 7", "US 8"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold" },
      { label: "Gemstones",   value: "Continuous Pavé Natural Diamonds" },
      { label: "Diamond Cut", value: "Round Brilliant • 0.85ctw" },
      { label: "Setting",     value: "French Micro-Grain Pavé" },
      { label: "Band Width",  value: "2.1mm" },
      { label: "Certification", value: "Almaazi Maison Certificate" }
    ],
    care: "Gently wipe with our included microfiber polishing cloth. Avoid high-impact activities to protect micro-pavé prongs.",
    story: "An unbroken horizon of calibrated diamonds, each precisely aligned under magnification to create a ribbon of seamless sparkle. The Éternité Band represents timeless devotion, made to be worn alone or stacked alongside a solitaire."
  },
  r3: {
    badge: "Haute Brilliance",
    cut: "Cushion Centre with Halo",
    carat: "1.10 ct Total Weight",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["US 5", "US 6", "US 7", "US 8"],
    specs: [
      { label: "Material",    value: "18k Solid Gold (Multi-tone)" },
      { label: "Centre Stone", value: "0.70ct Radiant Cushion Cut" },
      { label: "Halo Accent", value: "0.40ctw Micro-Pavé Surround" },
      { label: "Setting",     value: "Scalloped Cathedral Halo" },
      { label: "Band Width",  value: "1.8mm" },
      { label: "Hallmark",    value: "Almaazi Stamp & Fineness Mark" }
    ],
    care: "Rinse with lukewarm water and dry with a lint-free cloth. Complimentary annual ultrasonic cleaning available upon request.",
    story: "Drawing inspiration from vintage European heirlooms, the Lumière Halo cradles its radiant centre stone in a delicate constellation of micro-pavé diamonds, dramatically expanding its perceived spread while preserving refined proportions."
  },

  // Bracelets
  b1: {
    badge: "Atelier Classic",
    cut: "Continuous Brilliant Line",
    carat: "1.20 ct Total Weight",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["16 cm (Petite)", "17 cm (Standard)", "18 cm (Relaxed)"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold" },
      { label: "Diamonds",    value: "54 Matched Round Brilliants" },
      { label: "Clasp System", value: "Concealed Box Clasp with Dual Safety" },
      { label: "Flexibility", value: "Articulated Individual Collets" },
      { label: "Total Length", value: "17.5 cm (Adjustable links available)" },
      { label: "Provenance",  value: "Hand-assembled in Maison Atelier" }
    ],
    care: "Fasten clasp before storage. Lay flat in the jewelry coffer. Avoid contact with hairsprays, lotions, and chlorinated pools.",
    story: "Crafted with fluid articulation, each four-prong link of the Tennis Éclat pivots freely against its neighbor. The result is gold and diamond that mimics liquid movement, draping effortlessly across the wrist from dawn into evening."
  },
  b2: {
    badge: "Minimalist Luxe",
    cut: "Hand-Linked Solid Gold",
    carat: "Solid Gold • No Stones",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["16 cm", "17.5 cm", "19 cm"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold" },
      { label: "Chain Link",  value: "Custom Elongated Oval Rolo" },
      { label: "Clasp",       value: "Engraved Almaazi Lobster Trigger" },
      { label: "Finish",      value: "High-Mirror Hand Polish" },
      { label: "Weight",      value: "Approx. 6.8 grams" },
      { label: "Layering",    value: "Designed for effortless stacking" }
    ],
    care: "Buff periodically with a dry gold cloth. Can be worn continually; gold will acquire an authentic, gentle patina over decades.",
    story: "Simplicity carried to perfection. The Sérénité Chain Bracelet features custom-drawn 18k gold wire, formed and soldered one link at a time to ensure silky glide against skin. Unpretentious quiet luxury in its truest form."
  },
  b3: {
    badge: "Heritage Craft",
    cut: "Fine Wire Filigree",
    carat: "High Karat Solid Gold",
    hallmark: "Au875 (21k Solid Gold)",
    sizes: ["Small (56mm)", "Medium (60mm)", "Large (64mm)"],
    specs: [
      { label: "Material",    value: "21k High-Karat Solid Gold" },
      { label: "Technique",   value: "Hand-Twisted Granulated Filigree" },
      { label: "Profile",     value: "Semi-Rigid Open Cuff" },
      { label: "Finish",      value: "Satin Warm Tone with Burnished Edges" },
      { label: "Thickness",   value: "3.2mm Structured Core" },
      { label: "Hallmark",    value: "Certified 21k Gold Guarantee" }
    ],
    care: "High-karat gold is naturally supple. Slip gently sideways over the wrist rather than pulling open. Keep separate from harder gems.",
    story: "An homage to ancient gold-working traditions. Drawn into gossamer threads of 21k gold, the filigree motifs are nestled inside an architectural border, catching light through rhythmic voids and golden shadows."
  },

  // Earrings
  e1: {
    badge: "Celestial Drop",
    cut: "Geometric Diamond Stars",
    carat: "0.45 ct Total Weight",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["Standard Drop (35mm)"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold" },
      { label: "Stones",      value: "Pavé Diamonds in Star Collets" },
      { label: "Drop Length", value: "35mm Total Drop" },
      { label: "Backing",     value: "Comfort Bell Back with Silicone Core" },
      { label: "Movement",    value: "Dual-Joint Articulated Sway" },
      { label: "Weight",      value: "Ultra-Lightweight (2.4g per ear)" }
    ],
    care: "Wipe posts with alcohol wipe periodically. Store suspended in ear slots of your jewelry case to avoid chain bending.",
    story: "Designed to animate with every turn of the head. The Stella Drop Earrings suspend delicate star silhouettes from whispering gold threads, capturing fleeting glints of luminescence without ever pulling on the lobe."
  },
  e2: {
    badge: "Timeless Pure",
    cut: "Selected Japanese Akoya",
    carat: "Grade AAA Natural Pearls",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["7.0 - 7.5mm Diameter"],
    specs: [
      { label: "Material",    value: "18k Solid Gold Posts & Cups" },
      { label: "Pearls",      value: "Authentic Akoya Cultured Pearls (7mm)" },
      { label: "Luster",      value: "Mirror Sharp Overtones" },
      { label: "Post Length", value: "10.5mm Hypoallergenic Post" },
      { label: "Backing",     value: "Secure 18k Gold Push-Backs" },
      { label: "Color",       value: "Natural White with Rose Blush" }
    ],
    care: "Pearls are organic gems: put on after makeup and perfume. Wipe clean with damp chamois. Never submerge in ultrasonic cleaners.",
    story: "The quintessential piece of every jewelry collection. Hand-paired Akoya pearls, chosen for mirror luster and silky surface clarity, mounted in minimalist 18k solid gold cups that seem to float upon the ear."
  },
  e3: {
    badge: "Modern Sculptural",
    cut: "Graduated Interlocking",
    carat: "Solid Gold Sculpture",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["Diameter 24mm"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold" },
      { label: "Structure",   value: "Triple Linked Cascading Rings" },
      { label: "Closure",     value: "Seamless Click-Lock Hinge" },
      { label: "Width",       value: "2.8mm Tubular Contour" },
      { label: "Comfort",     value: "Featherweight Hollow Core Architecture" },
      { label: "Hallmark",    value: "Laser-inscribed Almaazi Logo" }
    ],
    care: "Inspect hinges annually. Polish gently with a dry microfiber cloth to maintain mirror gloss.",
    story: "A harmonious dialogue between fluid circles. Three concentric rings interlock and cascade gently forward, offering sculptural dimension and flattering face-framing presence from day to midnight."
  },

  // Necklaces
  n1: {
    badge: "Everyday Solitaire",
    cut: "Brilliant Diamond Solitaire",
    carat: "0.30 ct Solitaire Diamond",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["40cm + 5cm Extender"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold" },
      { label: "Centre Diamond", value: "0.30ct Natural Round Brilliant" },
      { label: "Clarity/Color", value: "F-G Color • VS Clarity" },
      { label: "Setting",     value: "Floating Bezel Slide" },
      { label: "Chain",       value: "1.0mm Diamond-Cut Cable Chain" },
      { label: "Length",      value: "Adjustable 40cm / 42.5cm / 45cm" }
    ],
    care: "Fasten clasp before setting down to prevent knots. Lay flat in soft pouch. Wipe pendant with dry cloth.",
    story: "A drop of pure light resting at the hollow of the collarbone. Suspended on a diamond-cut chain that catches subtle sparks, the floating bezel lets the stone illuminate your skin without bulk or distraction."
  },
  n2: {
    badge: "Effortless Layer",
    cut: "Triple Graduated Chains",
    carat: "Solid Gold Multi-Strand",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["38cm / 42cm / 46cm Multi-Tier"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold" },
      { label: "Chains",      value: "Micro-Box, Cable & Satellite Strands" },
      { label: "Clasp",       value: "Single Tangle-Free Multi-Ring Clasp" },
      { label: "Textures",    value: "Mirror Polished with Beaded Accents" },
      { label: "Weight",      value: "Approx. 7.5 grams" },
      { label: "Versatility", value: "Engineered not to twist or tangle" }
    ],
    care: "Hang vertically when storing to keep all three tiers aligned. Store unclasped.",
    story: "The coveted multi-necklace layered look, masterfully solved into a single unified piece. Three distinct chain gauges sit at harmonious intervals, cascading with natural grace across any neckline."
  },
  n3: {
    badge: "Keepsake Talisman",
    cut: "Sculpted Solid Gold Heart",
    carat: "Solid 18k Heart Pendant",
    hallmark: "Au750 (18k Solid Gold)",
    sizes: ["42cm + 3cm Extender"],
    specs: [
      { label: "Material",    value: "18k Solid Yellow Gold" },
      { label: "Pendant Size", value: "11mm x 12mm Solid Cast Form" },
      { label: "Finish",      value: "Soft Brushed Front, Polished Rim" },
      { label: "Chain",       value: "Fine Anchor Link 1.1mm" },
      { label: "Customization", value: "Engravable Reverse (Complimentary)" },
      { label: "Packaging",   value: "Signature Ribboned Obsidian Box" }
    ],
    care: "Clean with mild soapy water. Can be personalized with custom initial engraving through our bespoke service.",
    story: "Substantial in weight yet soft in contour. The Amour Heart avoids cliché through its gentle asymmetrical curve and organic rounded facets. A modern keepsake to hold close to the chest."
  }
};

// State variables
let currentQty = 1;
let selectedMetal = "18k Yellow Gold";
let selectedSize = "";
let activeImgIndex = 0;

// Quantity stepper
function setQty(delta) {
  currentQty = Math.max(1, currentQty + delta);
  const el = document.getElementById("qty-display");
  if (el) el.textContent = currentQty;
}

// Metal option selector
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

// Size option selector
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

// Gallery thumbnail switcher
function switchGalleryImage(index, imgSrc) {
  activeImgIndex = index;
  const mainImg = document.getElementById("gallery-main-img");
  if (!mainImg) return;

  mainImg.style.opacity = "0.2";
  setTimeout(() => {
    mainImg.src = imgSrc;
    // Adjust scale/position for macro zoom view simulation
    if (index === 1) {
      mainImg.style.transform = "scale(1.5)";
      mainImg.style.objectPosition = "center 40%";
    } else if (index === 2) {
      mainImg.style.transform = "scale(1.2)";
      mainImg.style.objectPosition = "center 60%";
    } else {
      mainImg.style.transform = "scale(1)";
      mainImg.style.objectPosition = "center center";
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

// Toast message handler
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

// Add to Cart with tactile feedback
function addToCartDetailed(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const btn = document.getElementById("add-to-bag-btn");
  const originalText = btn ? btn.innerHTML : "";

  // Add item with custom metal & size
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

// Size guide modal toggle
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

// Share current product
function shareProduct() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href);
    showToast("Product link copied to clipboard");
  } else {
    showToast("Share: " + window.location.href);
  }
}

// Toggle Wishlist
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

// Render main product page
function renderProduct(product) {
  const category = CATEGORIES.find(c => c.id === product.category);
  const extra = DETAILS[product.id] || {};
  const specs = extra.specs || [];
  const story = extra.story || product.description;
  const care = extra.care || "";
  const sizes = extra.sizes || [];

  if (sizes.length > 0 && !selectedSize) {
    selectedSize = sizes[1] || sizes[0];
  }

  const root = document.getElementById("product-root");
  if (!root) return;

  root.innerHTML = `
    <div class="page-enter max-w-7xl mx-auto">

      <!-- Breadcrumbs and Back Navigation -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12">
        <nav class="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-obsidian/45">
          <a href="index.html" class="hover:text-obsidian transition-colors">Maison</a>
          <span class="opacity-30">/</span>
          <a href="index.html#${product.category}" class="hover:text-obsidian transition-colors">${category ? category.label : "Collection"}</a>
          <span class="opacity-30">/</span>
          <span class="text-obsidian/80 font-medium">${product.name}</span>
        </nav>

        <a href="index.html#${product.category}" class="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-obsidian/50 hover:text-obsidian transition-colors">
          <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
          <span>Back to ${category ? category.label : "Collection"}</span>
        </a>
      </div>

      <!-- Main Showcase Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

        <!-- LEFT COLUMN: Image Presentation & Gallery (7 cols) -->
        <div class="lg:col-span-7 flex flex-col gap-4">
          
          <!-- Main Hero Image Frame -->
          <div class="gallery-main-frame relative squircle overflow-hidden bg-obsidian/5 border border-obsidian/10 aspect-square group">
            <img 
              id="gallery-main-img" 
              src="${product.image}" 
              alt="${product.name}" 
              class="gallery-main-img h-full w-full object-cover"
            />
            
            <!-- Quiet Luxury Badge Pill -->
            <div class="absolute top-5 left-5 pointer-events-none">
              <span class="glass-soft squircle-sm px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-obsidian/75 font-mono">
                ${extra.badge || "Handcrafted Luxury"}
              </span>
            </div>

            <!-- Subtle zoom prompt on hover -->
            <div class="absolute bottom-5 right-5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span class="glass-soft squircle-sm px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-obsidian/60">
                Hover to magnify
              </span>
            </div>
          </div>

          <!-- Thumbnails Row -->
          <div class="grid grid-cols-3 gap-3 sm:gap-4">
            <!-- Studio Full -->
            <button 
              type="button" 
              onclick="switchGalleryImage(0, '${product.image}')" 
              class="thumb-item squircle-sm overflow-hidden bg-obsidian/5 border border-obsidian/10 aspect-square p-1 ring-2 ring-obsidian opacity-100 transition-all cursor-pointer"
            >
              <img src="${product.image}" alt="Studio Angle" class="h-full w-full object-cover rounded-xl" />
            </button>

            <!-- Macro Facet Angle -->
            <button 
              type="button" 
              onclick="switchGalleryImage(1, '${product.image}')" 
              class="thumb-item squircle-sm overflow-hidden bg-obsidian/5 border border-obsidian/10 aspect-square p-1 opacity-40 hover:opacity-100 transition-all cursor-pointer"
            >
              <div class="h-full w-full overflow-hidden rounded-xl">
                <img src="${product.image}" alt="Macro Detail" class="h-full w-full object-cover scale-150 origin-center" />
              </div>
            </button>

            <!-- Lifestyle / Proportion View -->
            <button 
              type="button" 
              onclick="switchGalleryImage(2, '${product.image}')" 
              class="thumb-item squircle-sm overflow-hidden bg-obsidian/5 border border-obsidian/10 aspect-square p-1 opacity-40 hover:opacity-100 transition-all cursor-pointer"
            >
              <div class="h-full w-full overflow-hidden rounded-xl">
                <img src="${product.image}" alt="Profile View" class="h-full w-full object-cover scale-125 origin-bottom" />
              </div>
            </button>
          </div>

          <!-- Hallmark & Craftsmanship Micro-Strip -->
          <div class="glass squircle-sm p-4 mt-2 flex items-center justify-between text-[11px] text-obsidian/60 tracking-wider">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-obsidian/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${extra.hallmark || "Au750 Hallmarked"}
            </span>
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-obsidian/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Complimentary Insured Courier
            </span>
          </div>

        </div>

        <!-- RIGHT COLUMN: Details & Purchase Controls (5 cols) -->
        <div class="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">

          <!-- Collection Tag -->
          <div class="flex items-center gap-3 mb-3">
            <span class="text-[11px] uppercase tracking-[0.3em] text-obsidian/50 font-mono">
              ${category ? category.label : "High Jewellery"} — Collection
            </span>
            <span class="h-px w-6 bg-obsidian/20"></span>
          </div>

          <!-- Product Title -->
          <h1 class="font-heading font-light text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.08] text-obsidian mb-2">
            ${product.name}
          </h1>

          <!-- Material & Diamond Breakdown -->
          <p class="text-[12px] uppercase tracking-[0.16em] text-obsidian/50 mb-5">
            ${product.material}
          </p>

          <!-- Price & Fulfillment -->
          <div class="pb-6 mb-7 border-b border-obsidian/10 flex items-baseline justify-between">
            <div>
              <span class="font-heading font-normal text-3xl sm:text-4xl text-obsidian">${product.price}</span>
              <span class="block text-[11px] text-obsidian/45 tracking-wide mt-1">Includes luxury coffer, certificate & courier</span>
            </div>
            <span class="text-[11px] uppercase tracking-[0.18em] text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              In Stock
            </span>
          </div>

          <!-- Editorial Description -->
          <p class="text-[15px] leading-[1.8] text-obsidian/70 font-light mb-8">
            ${story}
          </p>

          <!-- Metal Color Selector -->
          <div class="mb-7">
            <div class="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] mb-3">
              <span class="text-obsidian/50">Alloy Selection:</span>
              <span id="selected-metal-label" class="font-medium text-obsidian">${selectedMetal}</span>
            </div>
            <div class="flex items-center gap-3">
              <!-- Yellow Gold -->
              <button 
                type="button" 
                onclick="selectMetal('18k Yellow Gold')" 
                data-metal="18k Yellow Gold" 
                title="18k Yellow Gold" 
                class="metal-swatch-btn h-8 w-8 rounded-full bg-[#f3e5ab] border border-obsidian/20 shadow-sm ring-2 ring-obsidian scale-110 transition-all cursor-pointer"
              ></button>
              <!-- White Gold -->
              <button 
                type="button" 
                onclick="selectMetal('18k White Gold')" 
                data-metal="18k White Gold" 
                title="18k White Gold" 
                class="metal-swatch-btn h-8 w-8 rounded-full bg-[#e8e8e8] border border-obsidian/20 shadow-sm transition-all cursor-pointer"
              ></button>
              <!-- Rose Gold -->
              <button 
                type="button" 
                onclick="selectMetal('18k Rose Gold')" 
                data-metal="18k Rose Gold" 
                title="18k Rose Gold" 
                class="metal-swatch-btn h-8 w-8 rounded-full bg-[#f5d0c5] border border-obsidian/20 shadow-sm transition-all cursor-pointer"
              ></button>
            </div>
          </div>

          <!-- Size Selector (If applicable) -->
          ${sizes.length > 0 ? `
          <div class="mb-8">
            <div class="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] mb-3">
              <span class="text-obsidian/50">Select Size:</span>
              <button onclick="toggleSizeGuide(true)" class="text-obsidian/60 hover:text-obsidian underline underline-offset-4 cursor-pointer">
                Size Guide
              </button>
            </div>
            <div class="flex flex-wrap gap-2">
              ${sizes.map((s, idx) => `
                <button 
                  type="button" 
                  onclick="selectSize('${s}')" 
                  data-size="${s}" 
                  class="size-pill-btn px-4 py-2.5 rounded-full text-[12px] border ${idx === 1 ? 'bg-obsidian text-alabaster border-obsidian' : 'text-obsidian/70 border-obsidian/15 hover:border-obsidian/40'} transition-all cursor-pointer"
                >
                  ${s}
                </button>
              `).join("")}
            </div>
          </div>` : ""}

          <!-- Quantity Stepper & Add to Bag CTA -->
          <div class="flex items-center gap-3 mb-4">
            <!-- Stepper -->
            <div class="flex items-center gap-1 border border-obsidian/20 rounded-full px-3 py-2 bg-alabaster">
              <button 
                type="button" 
                onclick="setQty(-1)" 
                class="w-7 h-7 grid place-items-center rounded-full hover:bg-obsidian/10 text-obsidian/70 transition-colors"
                aria-label="Decrease quantity"
              >
                &minus;
              </button>
              <span id="qty-display" class="w-8 text-center font-mono text-[13px] text-obsidian font-medium">1</span>
              <button 
                type="button" 
                onclick="setQty(1)" 
                class="w-7 h-7 grid place-items-center rounded-full hover:bg-obsidian/10 text-obsidian/70 transition-colors"
                aria-label="Increase quantity"
              >
                &#43;
              </button>
            </div>

            <!-- Primary Add to Bag Button -->
            <button 
              id="add-to-bag-btn" 
              onclick="addToCartDetailed('${product.id}')" 
              class="flex-1 bg-obsidian text-alabaster squircle py-4 px-6 text-[11px] uppercase tracking-[0.22em] hover:bg-obsidian/90 active:scale-[0.99] transition-all cursor-pointer shadow-sm"
            >
              Add to Bag
            </button>
          </div>

          <!-- Wishlist & Share Secondary Actions -->
          <div class="grid grid-cols-2 gap-3 mb-10">
            <button 
              type="button" 
              onclick="toggleWishlist(this)" 
              data-saved="false" 
              class="glass squircle-sm py-3 px-4 text-[11px] uppercase tracking-[0.16em] text-obsidian/75 hover:text-obsidian hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <span>Save Piece</span>
            </button>

            <button 
              type="button" 
              onclick="shareProduct()" 
              class="glass squircle-sm py-3 px-4 text-[11px] uppercase tracking-[0.16em] text-obsidian/75 hover:text-obsidian hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              <span>Share Creation</span>
            </button>
          </div>

          <!-- Luxury Expandable Accordions -->
          <div class="space-y-0 border-t border-obsidian/10">

            <!-- 1. Specifications -->
            <details class="group border-b border-obsidian/10 py-4.5" open>
              <summary class="flex items-center justify-between cursor-pointer list-none text-[12px] uppercase tracking-[0.2em] text-obsidian font-medium select-none">
                <span>Craftsmanship &amp; Hallmarks</span>
                <svg class="accordion-chevron h-4 w-4 text-obsidian/50 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div class="pt-4 pb-2 space-y-2.5 text-[13px]">
                ${specs.map(item => `
                  <div class="flex items-baseline justify-between border-b border-obsidian/5 pb-2">
                    <span class="text-obsidian/45 text-[11px] uppercase tracking-wider font-mono">${item.label}</span>
                    <span class="text-obsidian/80 font-medium">${item.value}</span>
                  </div>
                `).join("")}
              </div>
            </details>

            <!-- 2. Complimentary Delivery & Returns -->
            <details class="group border-b border-obsidian/10 py-4.5">
              <summary class="flex items-center justify-between cursor-pointer list-none text-[12px] uppercase tracking-[0.2em] text-obsidian font-medium select-none">
                <span>Complimentary Delivery &amp; Returns</span>
                <svg class="accordion-chevron h-4 w-4 text-obsidian/50 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div class="pt-4 pb-2 text-[14px] leading-relaxed text-obsidian/65 font-light space-y-2">
                <p>Every Almaazi creation is dispatched via armored, fully insured courier with signature verification upon delivery. Delivery takes 3–5 business days.</p>
                <p>Should your piece not suit you completely, we provide 14-day complimentary exchanges and returns in original, unworn condition with intact security seal.</p>
              </div>
            </details>

            <!-- 3. Care & Maintenance -->
            <details class="group border-b border-obsidian/10 py-4.5">
              <summary class="flex items-center justify-between cursor-pointer list-none text-[12px] uppercase tracking-[0.2em] text-obsidian font-medium select-none">
                <span>Care &amp; Longevity</span>
                <svg class="accordion-chevron h-4 w-4 text-obsidian/50 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div class="pt-4 pb-2 text-[14px] leading-relaxed text-obsidian/65 font-light">
                <p>${care || "Clean gently using lukewarm water and our complimentary microfiber cloth. Store individually to prevent contact scratches."}</p>
              </div>
            </details>

            <!-- 4. Bespoke Inquiries -->
            <details class="group border-b border-obsidian/10 py-4.5">
              <summary class="flex items-center justify-between cursor-pointer list-none text-[12px] uppercase tracking-[0.2em] text-obsidian font-medium select-none">
                <span>Bespoke &amp; Engraving</span>
                <svg class="accordion-chevron h-4 w-4 text-obsidian/50 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
              </summary>
              <div class="pt-4 pb-2 text-[14px] leading-relaxed text-obsidian/65 font-light">
                <p>Looking for a distinct diamond carat weight, platinum setting, or personalized inner inscription? Contact our private concierge at <a href="mailto:concierge@almaazi.com" class="underline underline-offset-4 text-obsidian">concierge@almaazi.com</a>.</p>
              </div>
            </details>

          </div>

        </div>

      </div>

    </div>
  `;
}

// Render "You May Also Like" from the same collection
function renderRelated(product) {
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
  const root = document.getElementById("related-root");
  if (!root || related.length === 0) return;

  const category = CATEGORIES.find(c => c.id === product.category);

  root.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="pt-16 pb-10 border-t border-obsidian/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span class="block text-[11px] uppercase tracking-[0.3em] text-obsidian/45 mb-2 font-mono">
            Harmonious Pairings
          </span>
          <h2 class="font-heading text-3xl sm:text-4xl text-obsidian">
            More from the ${category ? category.label : "Maison"} Collection
          </h2>
        </div>

        <a href="index.html#${product.category}" class="text-[11px] uppercase tracking-[0.2em] text-obsidian/60 hover:text-obsidian flex items-center gap-2">
          <span>View All ${category ? category.label : "Pieces"}</span>
          <span>&rarr;</span>
        </a>
      </div>

      <!-- 3 Matching Product Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        ${related.map(p => `
          <a href="product.html?id=${p.id}" class="group squircle bg-alabaster border border-obsidian/10 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-lg">
            
            <div class="relative aspect-square overflow-hidden bg-obsidian/5">
              <img 
                src="${p.image}" 
                alt="${p.name}" 
                class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-obsidian/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div class="p-5 sm:p-6 flex flex-col gap-1">
              <h3 class="font-heading text-xl sm:text-[1.35rem] leading-tight text-obsidian">
                ${p.name}
              </h3>
              <p class="text-[12px] uppercase tracking-[0.12em] text-obsidian/45">
                ${p.material}
              </p>
              <div class="mt-3 flex items-center justify-between">
                <span class="font-body text-[15px] text-obsidian/80">${p.price}</span>
                <span class="text-[11px] uppercase tracking-[0.16em] text-obsidian/50 group-hover:text-obsidian transition-colors">
                  Explore &rarr;
                </span>
              </div>
            </div>

          </a>
        `).join("")}
      </div>
    </div>
  `;
}

// Initialization on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "r1";
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  if (product) {
    document.title = `${product.name} — ALMAAZI Handcrafted Luxury`;
    renderProduct(product);
    renderRelated(product);
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
});
