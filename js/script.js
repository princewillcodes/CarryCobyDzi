// Configuration
const API_URL = "https://script.google.com/macros/s/AKfycbzI-CB3C81kesSeVKYpfpfXS2g9XNntmOpWlvEwTWSciapuLms2oUUz-4KBdlxuc5TBzg/exec";
let products = [];
let cart = [];

// --- 1. DATA INITIALIZATION ---
async function loadProducts() {
    const grid = document.getElementById('product-grid');
    const timestamp = new Date().getTime();
    
    try {
        const response = await fetch(`${API_URL}?t=${timestamp}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const data = await response.json();
        
        products = data.map(item => ({
            id: parseInt(item.id),
            name: item.name,
            price: parseFloat(item.price),
            description: item.description,
            image: item.image,
            category: item.category ? item.category.toLowerCase().trim() : 'handbag'
        }));

        renderGrid(products);
    } catch (error) {
        console.error("Store Error:", error);
        if (grid) grid.innerHTML = '<p class="text-center w-full py-12">Unable to load collection. Please refresh.</p>';
    }
}

// --- 2. UI RENDERING ---
function renderGrid(itemsToDisplay) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = itemsToDisplay.map(product => `
        <div class="group cursor-pointer" onclick="openDetails(${product.id})">
            <div class="relative w-full aspect-[4/5] bg-stone-100 overflow-hidden rounded-sm">
                <img src="${product.image}" loading="lazy" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <div class="hidden md:block absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                </div>
            </div>
            <div class="mt-4 px-1 text-center md:text-left">
                <h3 class="text-[10px] md:text-xs uppercase tracking-[0.15em] font-medium truncate">${product.name}</h3>
                <p class="text-stone-500 text-[11px] mt-1 font-semibold">GHS ${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

// --- 3. NAVIGATION & VIEW CONTROLLER ---
function showView(viewName) {
    const home = document.getElementById('home-view');
    const shop = document.getElementById('shop-view');
    const shopBtn = document.querySelector('button[onclick="showView(\'shop\')"]');

    if (viewName === 'shop') {
        home.classList.add('hidden');
        shop.classList.remove('hidden');
        shopBtn.classList.add('border-b', 'border-black');
    } else {
        home.classList.remove('hidden');
        shop.classList.add('hidden');
        shopBtn.classList.remove('border-b', 'border-black');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 4. FILTER LOGIC ---
function filterCategory(targetCategory) {
    const buttons = document.querySelectorAll('.cat-btn');
    
    buttons.forEach(btn => {
        // We look at the 'onclick' attribute to see what category it's supposed to represent
        // This is much safer than checking the visible text like "Clutches"
        const btnCall = btn.getAttribute('onclick');
        const isActive = btnCall.includes(`'${targetCategory}'`);

        if (isActive) {
            btn.style.color = "#4A3728";
            btn.style.fontWeight = "700";
            btn.style.borderBottom = "2px solid #4A3728";
            btn.style.opacity = "1";
        } else {
            btn.style.color = "#a8a29e";
            btn.style.fontWeight = "400";
            btn.style.borderBottom = "2px solid transparent";
            btn.style.opacity = "0.6";
        }
    });

    // Run the actual filter
    const filtered = (targetCategory === 'all') 
        ? products 
        : products.filter(p => p.category === targetCategory);
        
    renderGrid(filtered);
}






// --- 5. PANEL & CART LOGIC ---
function openDetails(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const panel = document.getElementById('detailPanel');
    const content = document.getElementById('panelContent');

    content.innerHTML = `
        <div class="mb-10 relative aspect-[4/5] overflow-hidden rounded-sm shadow-sm">
            <img src="${product.image}" class="absolute inset-0 w-full h-full object-cover">
        </div>
        <h2 class="text-2xl font-serif mb-2 italic">${product.name}</h2>
        <p class="text-xl font-bold mb-8 text-[#4A3728]">GHS ${product.price.toFixed(2)}</p>
        <div class="border-t border-stone-100 pt-8 mb-12">
            <p class="text-stone-600 text-sm leading-relaxed">${product.description}</p>
        </div>
        <button onclick="addToCart(${product.id})" class="w-full bg-[#4A3728] text-white py-5 flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.2em] active:scale-95 transition-transform">
            <i class="fa-solid fa-cart-plus"></i> Add to Bag
        </button>
    `;
    panel.classList.remove('translate-x-full');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        updateCartUI();
        document.getElementById('detailPanel').classList.add('translate-x-full');
        
        const count = document.getElementById('cart-count');
        count.classList.add('scale-150', 'bg-green-600');
        setTimeout(() => count.classList.remove('scale-150', 'bg-green-600'), 400);
    }
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const container = document.getElementById('cart-items');
    const totalElem = document.getElementById('cart-total');

    if (cart.length === 0) {
        container.innerHTML = `<p class="text-stone-400 italic text-center mt-32">Your bag is empty.</p>`;
        totalElem.innerText = `GHS 0.00`;
    } else {
        container.innerHTML = cart.map((item, index) => `
            <div class="flex gap-5 items-center mb-6">
                <img src="${item.image}" class="w-20 h-24 object-cover rounded shadow-sm">
                <div class="flex-grow">
                    <h4 class="text-[10px] font-bold uppercase tracking-widest leading-tight">${item.name}</h4>
                    <p class="text-stone-500 text-xs mt-1">GHS ${item.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${index})" class="text-[9px] text-red-400 uppercase mt-3 font-semibold border-b border-red-100">Remove</button>
                </div>
            </div>
        `).join('');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalElem.innerText = `GHS ${total.toFixed(2)}`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkoutWhatsApp() {
    if (cart.length === 0) return;
    const phoneNumber = "233555900504";
    let message = "Hi Dzi! I'd like to place an order:%0A%0A";
    cart.forEach((item, i) => message += `${i + 1}. ${item.name} (GHS ${item.price.toFixed(2)})%0A`);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `%0A*Total: GHS ${total.toFixed(2)}*`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// --- 6. GLOBAL HELPERS ---
function closePanel() { document.getElementById('detailPanel').classList.add('translate-x-full'); }
function openCart() { document.getElementById('cartPanel').classList.remove('translate-x-full'); }
function closeCart() { document.getElementById('cartPanel').classList.add('translate-x-full'); }
function scrollToShopTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

window.onscroll = function() {
    const topBtn = document.getElementById('backToTop');
    const shopView = document.getElementById('shop-view');
    if (!shopView.classList.contains('hidden') && window.scrollY > 500) {
        topBtn.classList.remove('translate-y-24', 'opacity-0');
        topBtn.classList.add('translate-y-0', 'opacity-100');
    } else {
        topBtn.classList.add('translate-y-24', 'opacity-0');
        topBtn.classList.remove('translate-y-0', 'opacity-100');
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', loadProducts);
