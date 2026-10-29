/**
 * ALMAAZI — Dedicated Collection Page Logic
 * Renders large-format Tiffany-style 3-column product cards.
 */

let currentSort = "featured";

function setSort(val) {
  currentSort = val;
  const params = new URLSearchParams(window.location.search);
  const catId = params.get("category") || "rings";
  renderCategoryPage(catId);
}

function renderCategoryPage(catId) {
  const category = CATEGORIES.find(c => c.id === catId) || CATEGORIES[0];
  let items = PRODUCTS.filter(p => p.category === category.id);

  if (currentSort === "price-low") {
    items = [...items].sort((a, b) => a.numericPrice - b.numericPrice);
  } else if (currentSort === "price-high") {
    items = [...items].sort((a, b) => b.numericPrice - a.numericPrice);
  }

  // Update Page Title
  document.title = `ALMAAZI — ${category.label} Collection`;

  // Highlight active nav link
  document.querySelectorAll(".cat-nav-link").forEach(link => {
    if (link.getAttribute("data-cat") === category.id) {
      link.classList.add("text-obsidian", "font-medium");
      link.querySelector("span")?.classList.remove("scale-x-0");
      link.querySelector("span")?.classList.add("scale-x-100");
    } else {
      link.classList.remove("text-obsidian", "font-medium");
      link.querySelector("span")?.classList.remove("scale-x-100");
      link.querySelector("span")?.classList.add("scale-x-0");
    }
  });

  const root = document.getElementById("collection-root");
  if (!root) return;

  root.innerHTML = `
    <!-- Breadcrumb & Collection Switcher Tabs -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
      <nav class="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-obsidian/45">
        <a href="index.html" class="hover:text-obsidian transition-colors">Maison</a>
        <span class="opacity-30">/</span>
        <span class="text-obsidian font-medium">${category.label}</span>
      </nav>

      <!-- Category Switcher Pills -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        ${CATEGORIES.map(c => `
          <a 
            href="collection.html?category=${c.id}" 
            class="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-[0.16em] transition-all whitespace-nowrap ${c.id === category.id ? 'bg-obsidian text-alabaster shadow-sm' : 'glass text-obsidian/70 hover:text-obsidian hover:bg-white'}"
          >
            ${c.label}
          </a>
        `).join("")}
      </div>
    </div>

    <!-- Category Hero Banner -->
    <div class="relative squircle overflow-hidden mb-12 sm:mb-16 shadow-sm">
      <div class="min-h-[220px] sm:min-h-0 aspect-[4/3] sm:aspect-[16/6] w-full">
        <img src="${category.banner}" alt="${category.label}" class="h-full w-full object-cover" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-alabaster/90 via-alabaster/40 to-transparent sm:from-alabaster/70 sm:via-alabaster/10"></div>
      <div class="absolute inset-0 flex items-center">
        <div class="px-5 py-6 sm:px-12 lg:px-16 max-w-xl">
          <span class="block text-[10px] sm:text-[12px] uppercase tracking-[0.25em] text-obsidian/50 mb-1.5 sm:mb-3 font-mono">
            Dedicated Collection
          </span>
          <h1 class="font-heading text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-obsidian">
            ${category.label}
          </h1>
          <p class="mt-2.5 sm:mt-4 max-w-xs sm:max-w-sm text-[13px] sm:text-[15px] text-obsidian/70 leading-relaxed font-light">
            ${category.blurb}
          </p>
        </div>
      </div>
    </div>

    <!-- Collection Toolbar: Count & Sort -->
    <div class="flex items-center justify-between pb-6 mb-12 border-b border-obsidian/10">
      <span class="text-[11px] uppercase tracking-[0.2em] text-obsidian/50 font-mono">
        ${items.length} Products
      </span>

      <div class="flex items-center gap-2">
        <span class="text-[11px] uppercase tracking-[0.18em] text-obsidian/45 hidden sm:inline">Sort by:</span>
        <select 
          onchange="setSort(this.value)" 
          class="glass squircle-sm px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-obsidian bg-transparent border border-obsidian/10 outline-none cursor-pointer"
        >
          <option value="featured" ${currentSort === 'featured' ? 'selected' : ''}>Featured</option>
          <option value="price-low" ${currentSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
          <option value="price-high" ${currentSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
        </select>
      </div>
    </div>

    <!-- Doubled Card Size 3-Column Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
      ${items.map(p => {
        const primaryImg = p.images && p.images[0] ? p.images[0] : p.image;
        const secondaryImg = p.images && p.images[1] ? p.images[1] : primaryImg;

        return `
          <a href="product.html?id=${p.id}" class="group flex flex-col text-center cursor-pointer pb-8">
            
            <!-- Extra-Large Image Canvas Frame -->
            <div class="relative w-full aspect-square bg-[#fcfcfb] overflow-hidden mb-6 rounded-lg">
              <!-- Primary Image: Large ring view -->
              <img 
                src="${primaryImg}" 
                alt="${p.name}" 
                class="absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-500 ease-out group-hover:opacity-0 p-2 sm:p-4 scale-110"
                draggable="false"
              />
              <!-- Secondary Image: Model view -->
              <img 
                src="${secondaryImg}" 
                alt="${p.name} - Model View" 
                class="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
                draggable="false"
              />
            </div>

            <!-- Prominent Typography -->
            <div class="flex flex-col items-center gap-2 px-2">
              <h3 class="font-heading text-2xl sm:text-3xl text-obsidian font-normal tracking-wide">
                ${p.name}
              </h3>
              <p class="text-[13px] sm:text-[14px] text-obsidian/60 font-light tracking-wide max-w-xs leading-snug">
                ${p.material}
              </p>
              <div class="mt-1 text-[16px] sm:text-[17px] text-obsidian font-body font-medium">
                ${p.price}
              </div>
            </div>

          </a>
        `;
      }).join("")}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const catId = params.get("category") || "rings";
  renderCategoryPage(catId);
  updateCartBadge();
  renderCartDrawer();
});
