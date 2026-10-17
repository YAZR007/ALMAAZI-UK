/**
 * ALMAAZI — Dedicated Collection Page Logic
 * Reads ?category=<category_id> (rings, bracelets, earrings, necklaces)
 * Renders ONLY the pieces belonging to that category with luxury banner and sorting.
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
    <div class="relative squircle overflow-hidden mb-8 sm:mb-12 shadow-sm">
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
    <div class="flex items-center justify-between pb-6 mb-8 border-b border-obsidian/10">
      <span class="text-[11px] uppercase tracking-[0.2em] text-obsidian/50 font-mono">
        Showing ${items.length} Creations
      </span>

      <div class="flex items-center gap-2">
        <span class="text-[11px] uppercase tracking-[0.18em] text-obsidian/45 hidden sm:inline">Sort:</span>
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

    <!-- Product Grid for Just This Category -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      ${items.map(p => `
        <a href="product.html?id=${p.id}" class="group squircle bg-alabaster border border-obsidian/10 overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-xl active:scale-[0.99]">
          
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
              <span class="font-body text-[15px] text-obsidian/85 font-medium">${p.price}</span>
              <span class="text-[11px] uppercase tracking-[0.16em] text-obsidian/50 group-hover:text-obsidian transition-colors">
                View Creation &rarr;
              </span>
            </div>
          </div>

        </a>
      `).join("")}
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
