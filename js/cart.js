document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartSummary = document.querySelector(".cart-summary");
    const updateCartBtn = document.querySelector(".cart-update .btn");
    const applyCouponBtn = document.querySelector(".coupon-form .btn");
    const cartCount = document.querySelector(".cart-count");

    // Initialize cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartDisplay();

    // Event Listeners
    updateCartBtn.addEventListener("click", updateCart);
    applyCouponBtn.addEventListener("click", applyCoupon);

    // Functions
    function updateCartDisplay() {
        // Clear existing items
        cartItemsContainer.innerHTML = "";

        // Remove header if cart is empty
        if (cart.length === 0) {
            const emptyCart = document.createElement("div");
            emptyCart.className = "empty-cart";
            emptyCart.innerHTML = `
                <p>Your cart is empty</p>
                <a href="products.html" class="btn btn-primary">Continue Shopping</a>
            `;
            cartItemsContainer.appendChild(emptyCart);
            updateCartSummary();
            return;
        }

        // Re-add header if cart has items
        const header = document.createElement("div");
        header.className = "cart-header";
        header.innerHTML = `
            <div class="cart-header-item product-col">Product</div>
            <div class="cart-header-item price-col">Price</div>
            <div class="cart-header-item quantity-col">Quantity</div>
            <div class="cart-header-item subtotal-col">Subtotal</div>
            <div class="cart-header-item remove-col"></div>
        `;
        cartItemsContainer.appendChild(header);

        // Add cart items
        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.className = "cart-item";
            cartItem.innerHTML = `
                <div class="product-col">
                    <div class="product-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="product-details">
                        <h3>${item.name}</h3>
                        <p class="product-variant">${item.unit}</p>
                    </div>
                </div>
                <div class="price-col">₹${item.price}/${item.unit}</div>
                <div class="quantity-col">
                    <div class="quantity-input">
                        <button class="quantity-btn minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
                        <input type="number" value="${item.quantity}" min="1" max="10" data-id="${item.id}">
                        <button class="quantity-btn plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <div class="subtotal-col">₹${item.price * item.quantity}</div>
                <div class="remove-col">
                    <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Add event listeners to new elements
        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", removeItem);
        });

        document.querySelectorAll(".quantity-btn.minus").forEach(btn => {
            btn.addEventListener("click", decreaseQuantity);
        });

        document.querySelectorAll(".quantity-btn.plus").forEach(btn => {
            btn.addEventListener("click", increaseQuantity);
        });

        document.querySelectorAll(".quantity-input input").forEach(input => {
            input.addEventListener("change", updateQuantity);
        });

        updateCartSummary();
        updateCartCount();
    }

    function updateCartSummary() {
        if (cart.length === 0) {
            cartSummary.innerHTML = `
                <h2>Cart Totals</h2>
                <div class="empty-cart-message">
                    <p>Your cart is empty</p>
                    <a href="products.html" class="btn btn-primary btn-block">Continue Shopping</a>
                </div>
            `;
            return;
        }

        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 500 ? 0 : 50;
        const discount = 0; // Can be calculated if coupons are implemented
        const total = subtotal + shipping - discount;

        // Add free shipping message if applicable
        const freeShippingMessage = subtotal < 500
            ? `<div class="free-shipping-message undervalue">🚚 Add ₹${500 - subtotal} more to get free shipping!</div>`
            : `<div class="free-shipping-message">🎉 You've qualified for free shipping!</div>`;


        cartSummary.innerHTML = `
            <h2>Cart Totals</h2>
            <div class="summary-row">
                <span>Subtotal</span>
                <span>₹${subtotal}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            <div class="summary-row discount">
                <span>Discount</span>
                <span>-₹${discount}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>₹${total}</span>
            </div>
            <div class="summary-row total">
                ${freeShippingMessage}
            </div>
            <a href="checkout.html" class="btn btn-primary btn-block">Proceed to Checkout</a>
            <div class="continue-shopping">
                <a href="products.html"><i class="fas fa-arrow-left"></i> Continue Shopping</a>
            </div>
        `;
    }

    function removeItem(e) {
        const productId = parseInt(e.target.closest("button").getAttribute("data-id"));
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }

    function decreaseQuantity(e) {
        const productId = parseInt(e.target.closest("button").getAttribute("data-id"));
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            item.quantity--;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    }

    function increaseQuantity(e) {
        const productId = parseInt(e.target.closest("button").getAttribute("data-id"));
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity < 10) {
            item.quantity++;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartDisplay();
        }
    }

    function updateQuantity(e) {
        const productId = parseInt(e.target.getAttribute("data-id"));
        const newQuantity = parseInt(e.target.value);

        if (newQuantity >= 1 && newQuantity <= 10) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartDisplay();
            }
        } else {
            // Reset to previous value if invalid
            e.target.value = cart.find(item => item.id === productId).quantity;
        }
    }

    function updateCart() {
        // This would handle any bulk updates if needed
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Cart updated successfully!");
    }

    function applyCoupon() {
        // Coupon functionality can be implemented here
        alert("Coupon functionality will be implemented soon!");
    }

    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = count;
    }
});