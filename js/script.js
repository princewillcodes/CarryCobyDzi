// Products
const products = [
    { id: 1, name: "Elegant Signature Print Tote Bag", price: 160, description: "Elevate your style with this sophisticated tote bag, featuring a timeless signature print in a rich dark hue accented by warm brown leather straps.", image: "images/bag1.jpeg" },
    { id: 2, name: "Chic Quilted Shoulder Bag with Gold Chain Detail", price: 170, description: "This stunning shoulder bag is the epitome of elegance. Featuring a classic quilted pattern in a pristine white finish.", image: "images/bag2.jpeg" },
    { id: 3, name: "Stylish Textured Flap Handbag with Ring Detail", price: 160, description: "This elegant handbag features a sophisticated black finish with a contrasting textured panel on the flap.", image: "images/bag3.jpeg" },
    { id: 4, name: "Elegant Croc-Embossed Top-Handle Bag in Soft Pink", price: 160, description: "Crafted with a soft pink material, featuring a sophisticated crocodile-embossed texture.", image: "images/bag4.jpeg" },
    { id: 5, name: "Chic Two-Tone Handbag with Textured Flap", price: 160, description: "Features a combination of smooth caramel leather and a contrasting mustard-yellow textured flap.", image: "images/bag5.jpeg" },
    { id: 6, name: "Classic Black Satchel with Embossed Detailing", price: 160, description: "A timeless black satchel crafted from high-quality leather. Structured silhouette with sturdy brass hardware.", image: "images/bag6.jpeg" },
    { id: 7, name: "Exquisite Crimson Croc-Embossed Handbag", price: 160, description: "Striking crimson hue with a luxurious croc-embossed texture.", image: "images/bag7.jpeg" },
    { id: 8, name: "Chic Monogrammed Top-Handle Bag", price: 160, description: "Sophisticated monogram print in shades of brown and maroon. Features a unique circular top handle.", image: "images/bag8.jpeg" },
    { id: 9, name: "Elegant Monogrammed Top-Handle Bag with Leather Accents", price: 160, description: "Classic monogram print on durable canvas, complemented by rich black leather trim and handles.", image: "images/bag9.jpeg" },
    { id: 10, name: "Stylish Monogrammed Mini Tote Bag", price: 150, description: "Charming mini tote with a tasteful monogram pattern in a warm, neutral tone.", image: "images/bag10.jpeg" },
    { id: 11, name: "Elegant White Top-Handle Bag with Secure Clasp", price: 160, description: "Pristine white hue exudes timeless elegance. Structured silhouette with a convenient top handle.", image: "images/bag11.jpeg" },
    { id: 12, name: "Geometric Patterned Mini Backpack with Faux Leather Trim", price: 170, description: "Sophisticated geometric pattern in brown and black with tan faux leather trim.", image: "images/bag12.jpeg" },
    { id: 13, name: "Chic Two-Tone Clutch with Textured Flap and Silver Clasp", price: 160, description: "Delightful two-tone design with a smooth white base and a textured, light beige flap.", image: "images/bag13.jpeg" },
    { id: 14, name: "Textured Black Top-Handle Bag with Scarf Accent", price: 160, description: "Crafted from a beautifully textured material with a chic scarf tied around the handle.", image: "images/bag14.jpeg" },
    { id: 15, name: "Designer-Inspired Backpack with Monogram Print and Jewel Accent", price: 170, description: "Classic tan flap paired with a monogrammed body. Features a striking blue jewel accent.", image: "images/bag15.jpeg" },
    { id: 16, name: "Classic Textured Tote Bag with Leather Accents", price: 170, description: "Textured, off-white fabric body complemented by rich brown leather trim and handles.", image: "images/bag16.jpeg" },
    { id: 17, name: "Sleek Clutch Bag with Signature Logo Clasp", price: 160, description: "Smooth, neutral-toned material with a classic flap closure secured by a silver-tone clasp.", image: "images/bag17.jpeg" },
    { id: 18, name: "Textured Silver Mini Handbag with Top Handle", price: 160, description: "Shimmering silver hue with a pebbled texture. Structured top handle and secure flap closure.", image: "images/bag18.jpeg" },
    { id: 19, name: "Charming Pink Top-Handle Bag with Lock Detail", price: 160, description: "Soft pink handbag with a structured design and a prominent polished silver lock.", image: "images/bag19.jpeg" },
    { id: 20, name: "Elegant Two-Tone Handbag with Textured Flap", price: 160, description: "Creamy white base with a finely woven textured panel on the flap.", image: "images/bag20.jpeg" },
    { id: 21, name: "Stylish Monogrammed Backpack with Faux Leather Accents", price: 170, description: "Canvas body with a repeating monogram pattern and contrasting tan faux leather trim.", image: "images/bag21.jpeg" },
    { id: 22, name: "Classic White Shoulder Bag with Gold Accent", price: 160, description: "Smooth, high-quality white material with a flap closure secured by a gold logo accent.", image: "images/bag22.jpeg" },
    { id: 23, name: "Elegant White Tote Bag with Curved Top Handles", price: 160, description: "Brilliant white tote with a sleek, polished look and gracefully curved top handles.", image: "images/bag23.jpeg" },
    { id: 24, name: "Chic Pastel Green Handbag with Embossed Clasp", price: 160, description: "Soft, pastel green hue with a structured design and an elegantly embossed clasp.", image: "images/bag24.jpeg" },
    { id: 25, name: "Classic Monogrammed Handbag with Gold Clasp", price: 160, description: "Timeless monogrammed pattern in brown and beige with rich brown trim.", image: "images/bag25.jpeg" },
    { id: 26, name: "Elegant Textured Beige Handbag with Rope Detail", price: 160, description: "Refined beige exterior with a unique rope-like detail and buckle closure.", image: "images/bag26.jpeg" },
    { id: 27, name: "Textured Beige Handbag with Rope Detail and Buckle", price: 160, description: "Sophisticated textured beige material with a unique faux rope accent.", image: "images/bag27.jpeg" },
    { id: 28, name: "Textured Beige and Cream Handbag with Blue Clasp", price: 160, description: "Textured beige body with a smooth cream top section. Striking blue clasp.", image: "images/bag28.jpeg" },
    { id: 29, name: "Elegant Brown Shoulder Bag with Double Pocket Detail", price: 160, description: "Rich brown hue with a polished finish. Features a chic double-pocket design.", image: "images/bag29.jpeg" },
    { id: 30, name: "Classic Tan Bucket Bag with Textured Finish", price: 160, description: "Warm tan shade with a subtle textured finish and two sturdy top handles.", image: "images/bag30.jpeg" },
    { id: 31, name: "Chic Black Croc-Embossed Handbag with Gold Clasp", price: 150, description: "Black handbag with croc-embossed texture and smooth leather detail.", image: "images/bag31.jpeg" },
    { id: 32, name: "Soft Beige Tote Bag with Sculpted Handles", price: 160, description: "Gentle beige hue with unique sculpted top handles for a touch of modern artistry.", image: "images/bag32.jpeg" },
    { id: 33, name: "Classic Black Tote Bag with Sculpted Handles", price: 160, description: "Smooth, slightly textured black finish with elegantly sculpted handles.", image: "images/bag33.jpeg" },
    { id: 34, name: "Pretty in Pink Tote Bag with Buckle Details", price: 170, description: "Charming pink tote with adjustable side buckle straps and button closure.", image: "images/bag34.jpeg" },
    { id: 35, name: "Chic Two-Tone Handbag with Vibrant Clasp", price: 160, description: "Combines a textured woven panel with smooth leather and a vibrant blue clasp.", image: "images/bag35.jpeg" },
    { id: 36, name: "Houndstooth Backpack with Faux Leather Trim", price: 170, description: "Classic black and white houndstooth pattern with sleek black faux leather accents.", image: "images/bag36.jpeg" },
    { id: 37, name: "Monogram Print Backpack with Contrasting Flap", price: 170, description: "Grey and black monogram print with a navy blue faux leather top flap.", image: "images/bag37.jpeg" },
    { id: 38, name: "Elegant Monogram Chain Shoulder Bag", price: 160, description: "Diamond pattern with monogram details and a sturdy gold chain strap.", image: "images/bag38.jpeg" },
    { id: 39, name: "Chic Pink Top-Handle Handbag", price: 160, description: "Smooth pink faux leather with a classic top-handle design and silver-tone twist lock.", image: "images/bag39.jpeg" }
];

let cart = [];

// --- VIEW CONTROLLER ---
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

// --- CATEGORY LOGIC ---
function getCategory(id) {
    const totes = [1, 10, 16, 23, 30, 32, 33, 34]; 
    const backpacks = [12, 15, 21, 36, 37];
    const clutches = [13, 17];
    
    if (totes.includes(id)) return 'tote';
    if (backpacks.includes(id)) return 'backpack';
    if (clutches.includes(id)) return 'clutch';
    return 'handbag'; 
}

function filterCategory(category) {
    // 1. Manage Active State (Highlighting)
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-cat', 'font-bold', 'text-[#4A3728]');
        btn.classList.add('text-stone-400');
    });
    
    // Use currentTarget to ensure we get the button element
    event.currentTarget.classList.add('active-cat', 'font-bold', 'text-[#4A3728]');
    event.currentTarget.classList.remove('text-stone-400');

    // 2. Filter products
    const filtered = category === 'all' 
        ? products 
        : products.filter(p => getCategory(p.id) === category);

    // 3. Render filtered items
    renderGrid(filtered);
}

// --- RENDER GRID ---
function renderGrid(itemsToDisplay) {
    const grid = document.getElementById('product-grid');
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

// --- PANEL LOGIC ---
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

function closePanel() {
    document.getElementById('detailPanel').classList.add('translate-x-full');
}

// --- CART LOGIC ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        updateCartUI();
        closePanel();
        
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
            <div class="flex gap-5 items-center">
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

function openCart() {
    document.getElementById('cartPanel').classList.remove('translate-x-full');
}

function closeCart() {
    document.getElementById('cartPanel').classList.add('translate-x-full');
}

function checkoutWhatsApp() {
    if (cart.length === 0) return;
    const phoneNumber = "233555900504";
    let message = "Hi Dzi! I'd like to place an order:%0A%0A";
    cart.forEach((item, i) => message += `${i + 1}. ${item.name} (GHS ${item.price})%0A`);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    message += `%0A*Total: GHS ${total.toFixed(2)}*`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    message = "Please add a screenshot of the exact product(s) as well";
}

// Initial Load
renderGrid(products);


function scrollToShopTop() {
    // Scrolls to the top of the page, but the filters will be right there waiting
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



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
