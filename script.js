/* ============================
   GB STORE - script.js
   ============================ */

/* ---------- BANCO DE PRODUTOS ---------- */
/* Para adicionar um novo produto, basta copiar um objeto do array
   correspondente e alterar id, name, price e image.
   O "image" deve ser exatamente o nome do arquivo que você vai colocar
   dentro da pasta "imagens/". */

const PRODUCTS = [

  // ===== CAMISAS DE TIME =====
  { id: "cam01", name: "Camisa Brasil 2026", category: "camisas", price: 249.90, image: "imagens/Brasil2026.jpg" },
  { id: "cam02", name: "Camisa Brasil 2022", category: "camisas", price: 219.90, image: "imagens/Brasil2022.jpg" },
  { id: "cam03", name: "Camisa Vasco 2026", category: "camisas", price: 229.90, image: "imagens/Vasco2026.jpg" },
  { id: "cam04", name: "Camisa Barcelona 2009", category: "camisas", price: 259.90, image: "imagens/Barcelona2009.jpg" },
  { id: "cam05", name: "Camisa Inter de Milão 2010", category: "camisas", price: 259.90, image: "imagens/InterDeMilao2010.jpg" },
  { id: "cam06", name: "Camisa Real Madrid 2026", category: "camisas", price: 249.90, image: "imagens/RealMadrid2026.jpg" },
  { id: "cam07", name: "Camisa Real Madrid 2014", category: "camisas", price: 259.90, image: "imagens/RealMadrid2014.jpg" },
  { id: "cam08", name: "Camisa Barcelona 2026", category: "camisas", price: 249.90, image: "imagens/Barcelona2026.jpg" },
  { id: "cam09", name: "Camisa Manchester City 2026", category: "camisas", price: 249.90, image: "imagens/ManchesterCity2026.jpg" },
  { id: "cam10", name: "Camisa Manchester United 2008", category: "camisas", price: 259.90, image: "imagens/ManchesterUnited2008.jpg" },
  { id: "cam11", name: "Camisa Liverpool 2026", category: "camisas", price: 249.90, image: "imagens/Liverpool2026.jpg" },
  { id: "cam12", name: "Camisa Chelsea 2012", category: "camisas", price: 259.90, image: "imagens/Chelsea2012.jpg" },
  { id: "cam13", name: "Camisa PSG 2026", category: "camisas", price: 249.90, image: "imagens/PSG2026.jpg" },
  { id: "cam14", name: "Camisa Bayern de Munique 2026", category: "camisas", price: 249.90, image: "imagens/BayernDeMunique2026.jpg" },
  { id: "cam15", name: "Camisa Milan 2007", category: "camisas", price: 259.90, image: "imagens/Milan2007.jpg" },
  { id: "cam16", name: "Camisa Juventus 2015", category: "camisas", price: 249.90, image: "imagens/Juventus2015.jpg" },
  { id: "cam17", name: "Camisa Argentina 2026", category: "camisas", price: 249.90, image: "imagens/Argentina2026.jpg" },
  { id: "cam18", name: "Camisa França 2022", category: "camisas", price: 219.90, image: "imagens/Franca2022.jpg" },
  { id: "cam19", name: "Camisa Flamengo 2026", category: "camisas", price: 229.90, image: "imagens/Flamengo2026.jpg" },
  { id: "cam20", name: "Camisa Corinthians 2026", category: "camisas", price: 229.90, image: "imagens/Corinthians2026.jpg" },

  // ===== TÊNIS ===== (nomes demonstrativos, fáceis de alterar)
  { id: "ten01", name: "Tênis GB Runner 01", category: "tenis", price: 299.90, image: "imagens/Tenis01.jpg" },
  { id: "ten02", name: "Tênis GB Runner 02", category: "tenis", price: 319.90, image: "imagens/Tenis02.jpg" },
  { id: "ten03", name: "Tênis GB Street 03", category: "tenis", price: 279.90, image: "imagens/Tenis03.jpg" },
  { id: "ten04", name: "Tênis GB Street 04", category: "tenis", price: 289.90, image: "imagens/Tenis04.jpg" },
  { id: "ten05", name: "Tênis GB Sport 05", category: "tenis", price: 309.90, image: "imagens/Tenis05.jpg" },
  { id: "ten06", name: "Tênis GB Sport 06", category: "tenis", price: 329.90, image: "imagens/Tenis06.jpg" },
  { id: "ten07", name: "Tênis GB Classic 07", category: "tenis", price: 259.90, image: "imagens/Tenis07.jpg" },
  { id: "ten08", name: "Tênis GB Classic 08", category: "tenis", price: 269.90, image: "imagens/Tenis08.jpg" },
  { id: "ten09", name: "Tênis GB Pro 09", category: "tenis", price: 349.90, image: "imagens/Tenis09.jpg" },
  { id: "ten10", name: "Tênis GB Pro 10", category: "tenis", price: 359.90, image: "imagens/Tenis10.jpg" },
  { id: "ten11", name: "Tênis GB Field 11", category: "tenis", price: 289.90, image: "imagens/Tenis11.jpg" },
  { id: "ten12", name: "Tênis GB Field 12", category: "tenis", price: 299.90, image: "imagens/Tenis12.jpg" },
  { id: "ten13", name: "Tênis GB Casual 13", category: "tenis", price: 239.90, image: "imagens/Tenis13.jpg" },
  { id: "ten14", name: "Tênis GB Casual 14", category: "tenis", price: 249.90, image: "imagens/Tenis14.jpg" },
  { id: "ten15", name: "Tênis GB Urban 15", category: "tenis", price: 279.90, image: "imagens/Tenis15.jpg" },
  { id: "ten16", name: "Tênis GB Urban 16", category: "tenis", price: 289.90, image: "imagens/Tenis16.jpg" },
  { id: "ten17", name: "Tênis GB Training 17", category: "tenis", price: 269.90, image: "imagens/Tenis17.jpg" },
  { id: "ten18", name: "Tênis GB Training 18", category: "tenis", price: 279.90, image: "imagens/Tenis18.jpg" },
  { id: "ten19", name: "Tênis GB Elite 19", category: "tenis", price: 369.90, image: "imagens/Tenis19.jpg" },
  { id: "ten20", name: "Tênis GB Elite 20", category: "tenis", price: 379.90, image: "imagens/Tenis20.jpg" },

  // ===== CALÇAS =====
  { id: "cal01", name: "Calça GB Jogger 01", category: "calcas", price: 149.90, image: "imagens/Calca01.jpg" },
  { id: "cal02", name: "Calça GB Jogger 02", category: "calcas", price: 159.90, image: "imagens/Calca02.jpg" },
  { id: "cal03", name: "Calça GB Sport 03", category: "calcas", price: 139.90, image: "imagens/Calca03.jpg" },
  { id: "cal04", name: "Calça GB Sport 04", category: "calcas", price: 144.90, image: "imagens/Calca04.jpg" },
  { id: "cal05", name: "Calça GB Moletom 05", category: "calcas", price: 129.90, image: "imagens/Calca05.jpg" },
  { id: "cal06", name: "Calça GB Moletom 06", category: "calcas", price: 134.90, image: "imagens/Calca06.jpg" },
  { id: "cal07", name: "Calça GB Slim 07", category: "calcas", price: 159.90, image: "imagens/Calca07.jpg" },
  { id: "cal08", name: "Calça GB Slim 08", category: "calcas", price: 164.90, image: "imagens/Calca08.jpg" },
  { id: "cal09", name: "Calça GB Cargo 09", category: "calcas", price: 169.90, image: "imagens/Calca09.jpg" },
  { id: "cal10", name: "Calça GB Cargo 10", category: "calcas", price: 174.90, image: "imagens/Calca10.jpg" },
  { id: "cal11", name: "Calça GB Training 11", category: "calcas", price: 149.90, image: "imagens/Calca11.jpg" },
  { id: "cal12", name: "Calça GB Training 12", category: "calcas", price: 154.90, image: "imagens/Calca12.jpg" },
  { id: "cal13", name: "Calça GB Street 13", category: "calcas", price: 139.90, image: "imagens/Calca13.jpg" },
  { id: "cal14", name: "Calça GB Street 14", category: "calcas", price: 144.90, image: "imagens/Calca14.jpg" },
  { id: "cal15", name: "Calça GB Classic 15", category: "calcas", price: 129.90, image: "imagens/Calca15.jpg" },

  // ===== ACESSÓRIOS =====
  { id: "ace01", name: "Boné GB Aba Reta", category: "acessorios", price: 79.90, image: "imagens/BoneAbaReta.jpg" },
  { id: "ace02", name: "Boné GB Aba Curva", category: "acessorios", price: 79.90, image: "imagens/BoneAbaCurva.jpg" },
  { id: "ace03", name: "Relógio GB Sport", category: "acessorios", price: 189.90, image: "imagens/RelogioSport.jpg" },
  { id: "ace04", name: "Relógio GB Classic", category: "acessorios", price: 199.90, image: "imagens/RelogioClassic.jpg" },
  { id: "ace05", name: "Meia GB Cano Alto", category: "acessorios", price: 29.90, image: "imagens/MeiaCanoAlto.jpg" },
  { id: "ace06", name: "Meia GB Cano Médio", category: "acessorios", price: 24.90, image: "imagens/MeiaCanoMedio.jpg" },
  { id: "ace07", name: "Mochila GB Urban", category: "acessorios", price: 159.90, image: "imagens/MochilaUrban.jpg" },
  { id: "ace08", name: "Mochila GB Sport", category: "acessorios", price: 169.90, image: "imagens/MochilaSport.jpg" },
  { id: "ace09", name: "Bolsa GB Shoulder", category: "acessorios", price: 129.90, image: "imagens/BolsaShoulder.jpg" },
  { id: "ace10", name: "Carteira GB Slim", category: "acessorios", price: 69.90, image: "imagens/CarteiraSlim.jpg" },
  { id: "ace11", name: "Óculos GB Sport", category: "acessorios", price: 99.90, image: "imagens/OculosSport.jpg" },
  { id: "ace12", name: "Cinto GB Classic", category: "acessorios", price: 59.90, image: "imagens/CintoClassic.jpg" },
];

const WHATSAPP_NUMBER = "5521982082151";

/* ---------- HELPERS ---------- */
function formatPrice(value) {
  return "R$ " + value.toFixed(2).replace(".", ",");
}

function getCart() {
  return JSON.parse(localStorage.getItem("gb_cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("gb_cart", JSON.stringify(cart));
}

/* ---------- MENU HAMBÚRGUER ---------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("open");
    });
  });
}

/* ---------- CARRINHO: PAINEL ---------- */
const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

function openCartPanel() {
  cartPanel?.classList.add("open");
  cartOverlay?.classList.add("open");
}
function closeCartPanel() {
  cartPanel?.classList.remove("open");
  cartOverlay?.classList.remove("open");
}

cartBtn?.addEventListener("click", openCartPanel);
closeCart?.addEventListener("click", closeCartPanel);
cartOverlay?.addEventListener("click", closeCartPanel);

/* ---------- RENDERIZAR CARRINHO ---------- */
function renderCart() {
  const cart = getCart();
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartCountEl = document.getElementById("cartCount");

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  if (cartCountEl) cartCountEl.textContent = totalItems;

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Seu carrinho está vazio.</p>`;
  } else {
    cartItemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">${formatPrice(item.price)}</span>
          <div class="cart-item-controls">
            <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
            <span class="qty-value">${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
            <button class="remove-item" data-action="remove" data-id="${item.id}">remover</button>
          </div>
        </div>
      </div>
    `).join("");
  }

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(total);
}

/* ---------- AÇÕES DO CARRINHO ---------- */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart(cart);
  renderCart();
  openCartPanel();
}

function changeQty(productId, action) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  if (action === "inc") item.qty += 1;
  if (action === "dec") item.qty -= 1;
  if (action === "remove" || item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }

  saveCart(cart);
  renderCart();
}

document.getElementById("cartItems")?.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  const id = btn.dataset.id;
  const action = btn.dataset.action;
  changeQty(id, action);
});

/* ---------- FINALIZAR PEDIDO (WHATSAPP) ---------- */
document.getElementById("checkoutBtn")?.addEventListener("click", () => {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let message = "Olá! Gostaria de fazer o seguinte pedido na GB Store:\n\n";
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.qty * item.price;
    total += subtotal;
    message += `• ${item.name}\n  Qtd: ${item.qty} | Preço unit.: ${formatPrice(item.price)} | Subtotal: ${formatPrice(subtotal)}\n\n`;
  });

  message += `Total do pedido: ${formatPrice(total)}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});

/* ---------- CARDS DE PRODUTO (HTML) ---------- */
function productCardHTML(product) {
  return `
    <div class="product-card">
      <div class="product-img">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">${categoryLabel(product.category)}</span>
        <span class="product-name">${product.name}</span>
        <span class="product-price">${formatPrice(product.price)}</span>
        <button class="btn-add" data-action="add" data-id="${product.id}">Adicionar ao carrinho</button>
      </div>
    </div>
  `;
}

function categoryLabel(cat) {
  const labels = {
    camisas: "Camisa de Time",
    tenis: "Tênis",
    calcas: "Calça",
    acessorios: "Acessório"
  };
  return labels[cat] || cat;
}

/* ---------- PÁGINA INÍCIO: DESTAQUES ---------- */
const featuredGrid = document.getElementById("featuredGrid");
if (featuredGrid) {
  const featuredIds = ["cam01", "cam04", "cam05", "ten01", "cal01", "ace01", "cam19", "ten09"];
  const featured = PRODUCTS.filter(p => featuredIds.includes(p.id));
  featuredGrid.innerHTML = featured.map(productCardHTML).join("");
}

/* ---------- PÁGINA PRODUTOS: CATÁLOGO ---------- */
const productsSection = document.getElementById("productsSection");

if (productsSection) {
  const searchInput = document.getElementById("searchInput");
  const filterChips = document.querySelectorAll(".filter-chip");
  const sortSelect = document.getElementById("sortSelect");

  let currentCategory = "todos";
  let currentSearch = "";
  let currentSort = "relevancia";

  // Detecta categoria vinda pela URL (?categoria=camisas)
  const urlParams = new URLSearchParams(window.location.search);
  const categoriaUrl = urlParams.get("categoria");
  if (categoriaUrl) currentCategory = categoriaUrl;

  function renderProducts() {
    let list = [...PRODUCTS];

    if (currentCategory !== "todos") {
      list = list.filter(p => p.category === currentCategory);
    }

    if (currentSearch.trim() !== "") {
      const term = currentSearch.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(term));
    }

    if (currentSort === "menor-preco") {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === "maior-preco") {
      list.sort((a, b) => b.price - a.price);
    }

    if (list.length === 0) {
      productsSection.innerHTML = `<p class="no-results">Nenhum produto encontrado.</p>`;
      return;
    }

    if (currentCategory !== "todos") {
      productsSection.innerHTML = `
        <div class="products-grid">${list.map(productCardHTML).join("")}</div>
      `;
    } else {
      const categories = ["camisas", "tenis", "calcas", "acessorios"];
      productsSection.innerHTML = categories.map(cat => {
        const items = list.filter(p => p.category === cat);
        if (items.length === 0) return "";
        return `
          <h2 class="category-title">${categoryLabel(cat)}s</h2>
          <div class="products-grid">${items.map(productCardHTML).join("")}</div>
        `;
      }).join("");
    }
  }

  searchInput?.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderProducts();
  });

  filterChips.forEach(chip => {
    if (chip.dataset.category === currentCategory) chip.classList.add("active");
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.dataset.category;
      renderProducts();
    });
  });

  sortSelect?.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  renderProducts();
}

/* ---------- DELEGAÇÃO GLOBAL: BOTÃO ADICIONAR ---------- */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action='add']");
  if (btn) {
    addToCart(btn.dataset.id);
  }
});

/* ---------- INICIALIZAÇÃO ---------- */
renderCart();