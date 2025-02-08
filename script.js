const products = [
    { id: 1, name: "Áo Thun", price: 150000, image: "images/ao-thun.jpg" },
    { id: 2, name: "Quần Jean", price: 250000, image: "images/quan-jean.jpg" },
    { id: 3, name: "Giày Sneaker", price: 500000, image: "images/giay.jpg" }
];

const cart = [];

function displayProducts() {
    const productContainer = document.querySelector(".products");
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()} VND</p>
            <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
        `;
        productContainer.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").textContent = cart.length;
    alert(`${product.name} đã được thêm vào giỏ hàng!`);
}

function openCart() {
    const cartModal = document.querySelector(".cart-modal");
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price.toLocaleString()} VND`;
        cartItems.appendChild(li);
    });

    cartModal.style.display = "block";
}

function closeCart() {
    document.querySelector(".cart-modal").style.display = "none";
}

document.querySelector(".cart").addEventListener("click", openCart);

displayProducts();
