/**
 * Vegrowpure - Products Page JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
    // Product Data Array
    const products = [
        // Vegetables
        {
            id: 1,
            name: "Fresh Tomatoes",
            category: "vegetables",
            tag: "organic",
            price: 60,
            unit: "kg",
            rating: 4.5,
            reviews: 28,
            availability: "in-stock",
            image:
                "images/vegetable/Tomato.jpg",
            description:
                "Organically grown tomatoes that are rich in flavor and nutrients. Perfect for salads, sauces, and curries.",
        },
        {
            id: 2,
            name: "Organic Spinach",
            category: "vegetables",
            tag: "bestseller",
            price: 40,
            unit: "bunch",
            rating: 5.0,
            reviews: 42,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Fresh and nutritious spinach leaves, packed with iron and vitamins. Great for salads, smoothies, and cooking.",
        },
        {
            id: 3,
            name: "Fresh Potatoes",
            category: "vegetables",
            tag: "",
            price: 30,
            unit: "kg",
            rating: 4.0,
            reviews: 35,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
            description: "Versatile potatoes perfect for boiling, mashing, roasting, or frying. A staple for any kitchen.",
        },
        {
            id: 4,
            name: "Organic Carrots",
            category: "vegetables",
            tag: "new",
            price: 50,
            unit: "kg",
            rating: 4.7,
            reviews: 19,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Sweet and crunchy carrots, rich in beta-carotene and antioxidants. Great for salads, juicing, or cooking.",
        },
        {
            id: 5,
            name: "Red Onions",
            category: "vegetables",
            tag: "",
            price: 35,
            unit: "kg",
            rating: 4.0,
            reviews: 22,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Flavorful red onions that add a punch to your salads and dishes. Milder and sweeter than regular onions.",
        },
        {
            id: 6,
            name: "Green Capsicum",
            category: "vegetables",
            tag: "organic",
            price: 70,
            unit: "kg",
            rating: 4.5,
            reviews: 15,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            description: "Crisp and juicy green capsicums, perfect for stir-fries, salads, and stuffing. Rich in vitamin C.",
        },
        {
            id: 7,
            name: "Fresh Cucumber",
            category: "vegetables",
            tag: "",
            price: 40,
            unit: "kg",
            rating: 4.0,
            reviews: 18,
            availability: "out-of-stock",
            image:
                "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Cool and refreshing cucumbers, perfect for salads, sandwiches, and detox water. Low in calories and high in water content.",
        },
        {
            id: 8,
            name: "Organic Broccoli",
            category: "vegetables",
            tag: "organic",
            price: 90,
            unit: "kg",
            rating: 5.0,
            reviews: 24,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Nutrient-dense broccoli florets, rich in vitamins, minerals, and antioxidants. Perfect for stir-fries, soups, and salads.",
        },

        // Fruits
        {
            id: 9,
            name: "Fresh Apples",
            category: "fruits",
            tag: "bestseller",
            price: 120,
            unit: "kg",
            rating: 4.8,
            reviews: 32,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Crisp and juicy apples, perfect for snacking, baking, or adding to salads. Rich in fiber and antioxidants.",
        },
        {
            id: 10,
            name: "Organic Bananas",
            category: "fruits",
            tag: "organic",
            price: 80,
            unit: "dozen",
            rating: 4.6,
            reviews: 29,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Sweet and nutritious bananas, perfect for smoothies, baking, or eating as a quick energy boost. Rich in potassium.",
        },
        {
            id: 11,
            name: "Sweet Oranges",
            category: "fruits",
            tag: "",
            price: 100,
            unit: "kg",
            rating: 4.5,
            reviews: 26,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1611329646571-689ddf8bfee9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            description: "Juicy and tangy oranges, packed with vitamin C. Perfect for juicing or eating fresh.",
        },
        {
            id: 12,
            name: "Ripe Mangoes",
            category: "fruits",
            tag: "new",
            price: 150,
            unit: "kg",
            rating: 4.9,
            reviews: 38,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Sweet and aromatic mangoes, known as the king of fruits. Perfect for desserts, smoothies, or eating fresh.",
        },
        {
            id: 13,
            name: "Fresh Strawberries",
            category: "fruits",
            tag: "organic",
            price: 200,
            unit: "box",
            rating: 4.7,
            reviews: 31,
            availability: "out-of-stock",
            image:
                "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Sweet and juicy strawberries, perfect for desserts, smoothies, or eating fresh. Rich in antioxidants.",
        },
        {
            id: 14,
            name: "Seedless Grapes",
            category: "fruits",
            tag: "",
            price: 180,
            unit: "kg",
            rating: 4.4,
            reviews: 23,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Sweet and juicy seedless grapes, perfect for snacking or adding to fruit salads. Available in green and purple varieties.",
        },
        {
            id: 15,
            name: "Ripe Watermelon",
            category: "fruits",
            tag: "bestseller",
            price: 130,
            unit: "piece",
            rating: 4.8,
            reviews: 34,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Sweet and refreshing watermelon, perfect for hot summer days. High in water content and antioxidants.",
        },
        {
            id: 16,
            name: "Fresh Pineapple",
            category: "fruits",
            tag: "",
            price: 160,
            unit: "piece",
            rating: 4.6,
            reviews: 27,
            availability: "in-stock",
            image:
                "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            description:
                "Sweet and tangy pineapple, perfect for desserts, smoothies, or grilling. Rich in vitamin C and manganese.",
        },
    ]

    // DOM Elements
    const productsContainer = document.getElementById("products-container")
    const paginationContainer = document.getElementById("pagination")
    const gridViewBtn = document.querySelector(".grid-view")
    const listViewBtn = document.querySelector(".list-view")
    const sortSelect = document.getElementById("sort-by")
    const priceFilterBtn = document.getElementById("price-filter-btn")
    const minPriceInput = document.getElementById("min-price")
    const maxPriceInput = document.getElementById("max-price")
    const resetFiltersBtn = document.getElementById("reset-filters")
    const categoryFilters = document.querySelectorAll(".category-filter")
    const tagFilters = document.querySelectorAll(".tag-filter")
    const availabilityFilters = document.querySelectorAll(".availability-filter")
    const quickViewModal = document.getElementById("quick-view-modal")
    const closeModalBtn = document.querySelector(".close-modal")
    const modalProductImage = document.getElementById("modal-product-image")
    const modalProductName = document.getElementById("modal-product-name")
    const modalProductPrice = document.getElementById("modal-product-price")
    const modalProductRating = document.getElementById("modal-product-rating")
    const modalProductAvailability = document.getElementById("modal-product-availability")
    const modalProductDescription = document.getElementById("modal-product-description")
    const modalProductUnit = document.getElementById("modal-product-unit")
    const modalQuantity = document.getElementById("modal-quantity")
    const modalAddToCartBtn = document.getElementById("modal-add-to-cart")
    const cartNotification = document.getElementById("cart-notification")
    const notificationMessage = document.getElementById("notification-message")
    const showingCount = document.getElementById("showing-count")
    const totalCount = document.getElementById("total-count")
    const allCount = document.getElementById("all-count")
    const vegetablesCount = document.getElementById("vegetables-count")
    const fruitsCount = document.getElementById("fruits-count")

    // Variables
    let currentProducts = [...products]
    let currentPage = 1
    const productsPerPage = 9
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    let currentProduct = null

    // Initialize
    updateCategoryCount()
    updateProductsDisplay()
    updateCartCount()

    // Event Listeners
    gridViewBtn.addEventListener("click", () => {
        productsContainer.classList.remove("list-layout")
        gridViewBtn.classList.add("active")
        listViewBtn.classList.remove("active")
    })

    listViewBtn.addEventListener("click", () => {
        productsContainer.classList.add("list-layout")
        listViewBtn.classList.add("active")
        gridViewBtn.classList.remove("active")
    })

    sortSelect.addEventListener("change", () => {
        sortProducts(sortSelect.value)
        updateProductsDisplay()
    })

    priceFilterBtn.addEventListener("click", () => {
        filterByPrice()
    })

    resetFiltersBtn.addEventListener("click", () => {
        resetFilters()
    })

    categoryFilters.forEach((filter) => {
        filter.addEventListener("click", (e) => {
            e.preventDefault()
            categoryFilters.forEach((f) => f.classList.remove("active"))
            filter.classList.add("active")
            filterByCategory(filter.getAttribute("data-category"))
        })
    })

    tagFilters.forEach((filter) => {
        filter.addEventListener("change", () => {
            filterProducts()
        })
    })

    availabilityFilters.forEach((filter) => {
        filter.addEventListener("change", () => {
            filterProducts()
        })
    })

    closeModalBtn.addEventListener("click", () => {
        quickViewModal.style.display = "none"
    })

    window.addEventListener("click", (e) => {
        if (e.target === quickViewModal) {
            quickViewModal.style.display = "none"
        }
    })

    // Functions
    function updateCategoryCount() {
        const allProductsCount = products.length
        const vegetablesCount = products.filter((p) => p.category === "vegetables").length
        const fruitsCount = products.filter((p) => p.category === "fruits").length

        document.getElementById("all-count").textContent = `(${allProductsCount})`
        document.getElementById("vegetables-count").textContent = `(${vegetablesCount})`
        document.getElementById("fruits-count").textContent = `(${fruitsCount})`
    }

    function updateProductsDisplay() {
        // Update counts
        totalCount.textContent = currentProducts.length

        // Calculate pagination
        const totalPages = Math.ceil(currentProducts.length / productsPerPage)
        if (currentPage > totalPages && totalPages > 0) {
            currentPage = totalPages
        }

        const startIndex = (currentPage - 1) * productsPerPage
        const endIndex = Math.min(startIndex + productsPerPage, currentProducts.length)
        const paginatedProducts = currentProducts.slice(startIndex, endIndex)

        showingCount.textContent = paginatedProducts.length

        // Clear container
        productsContainer.innerHTML = ""

        // Render products
        if (paginatedProducts.length === 0) {
            productsContainer.innerHTML =
                '<div class="no-products">No products found matching your criteria. Please try different filters.</div>'
        } else {
            paginatedProducts.forEach((product) => {
                productsContainer.appendChild(createProductCard(product))
            })
        }

        // Update pagination
        renderPagination(totalPages)
    }

    function createProductCard(product) {
        const card = document.createElement("div")
        card.className = "product-card"
        card.setAttribute("data-id", product.id)

        let tagHtml = ""
        if (product.tag) {
            tagHtml = `<div class="product-tag ${product.tag}">${product.tag.charAt(0).toUpperCase() + product.tag.slice(1)}</div>`
        }

        let ratingHtml = ""
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(product.rating)) {
                ratingHtml += '<i class="fas fa-star"></i>'
            } else if (i - 0.5 <= product.rating) {
                ratingHtml += '<i class="fas fa-star-half-alt"></i>'
            } else {
                ratingHtml += '<i class="far fa-star"></i>'
            }
        }

        const availabilityClass = product.availability === "in-stock" ? "in-stock" : "out-of-stock"
        const availabilityText = product.availability === "in-stock" ? "In Stock" : "Out of Stock"
        const buttonDisabled = product.availability === "out-of-stock" ? "disabled" : ""

        card.innerHTML = `
              <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
                  ${tagHtml}
                  <div class="product-actions">
                      <button class="action-btn quick-view" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                      <button class="action-btn add-to-wishlist"><i class="far fa-heart"></i></button>
                  </div>
              </div>
              <div class="product-info">
                  <h3>${product.name}</h3>
                  <div class="product-meta">
                      <span class="product-price">₹${product.price}/${product.unit}</span>
                      <span class="product-rating">
                          ${ratingHtml}
                          <span>(${product.rating})</span>
                      </span>
                  </div>
                  <div class="product-availability ${availabilityClass}">
                      <i class="fas ${product.availability === "in-stock" ? "fa-check-circle" : "fa-times-circle"}"></i> ${availabilityText}
                  </div>
                  <p class="product-description">${product.description}</p>
                  <button class="btn btn-add-cart ${buttonDisabled}" data-id="${product.id}" ${buttonDisabled}>
                      <i class="fas fa-shopping-cart"></i> Add to Cart
                  </button>
              </div>
          `

        // Add event listeners
        const quickViewBtn = card.querySelector(".quick-view")
        quickViewBtn.addEventListener("click", () => {
            openQuickView(product.id)
        })

        const addToCartBtn = card.querySelector(".btn-add-cart")
        if (!buttonDisabled) {
            addToCartBtn.addEventListener("click", () => {
                addToCart(product.id, 1)
            })
        }

        return card
    }

    function renderPagination(totalPages) {
        paginationContainer.innerHTML = ""

        if (totalPages <= 1) return

        // Previous button
        const prevBtn = document.createElement("a")
        prevBtn.href = "#"
        prevBtn.className = "page-link page-prev"
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>'
        prevBtn.addEventListener("click", (e) => {
            e.preventDefault()
            if (currentPage > 1) {
                currentPage--
                updateProductsDisplay()
            }
        })
        paginationContainer.appendChild(prevBtn)

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("a")
            pageLink.href = "#"
            pageLink.className = `page-link ${i === currentPage ? "active" : ""}`
            pageLink.textContent = i
            pageLink.addEventListener("click", (e) => {
                e.preventDefault()
                currentPage = i
                updateProductsDisplay()
            })
            paginationContainer.appendChild(pageLink)
        }

        // Next button
        const nextBtn = document.createElement("a")
        nextBtn.href = "#"
        nextBtn.className = "page-link page-next"
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>'
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault()
            if (currentPage < totalPages) {
                currentPage++
                updateProductsDisplay()
            }
        })
        paginationContainer.appendChild(nextBtn)
    }

    function sortProducts(sortBy) {
        switch (sortBy) {
            case "price-low":
                currentProducts.sort((a, b) => a.price - b.price)
                break
            case "price-high":
                currentProducts.sort((a, b) => b.price - a.price)
                break
            case "newest":
                currentProducts.sort((a, b) => {
                    if (a.tag === "new" && b.tag !== "new") return -1
                    if (a.tag !== "new" && b.tag === "new") return 1
                    return 0
                })
                break
            case "rating":
                currentProducts.sort((a, b) => b.rating - a.rating)
                break
            default: // popularity (bestseller)
                currentProducts.sort((a, b) => {
                    if (a.tag === "bestseller" && b.tag !== "bestseller") return -1
                    if (a.tag !== "bestseller" && b.tag === "bestseller") return 1
                    return 0
                })
        }
    }

    function filterByPrice() {
        currentPage = 1
        filterProducts()
    }

    function filterByCategory(category) {
        if (category === "all") {
            currentProducts = [...products]
        } else {
            currentProducts = products.filter((p) => p.category === category)
        }

        currentPage = 1
        filterProducts()
    }

    function filterProducts() {
        // Get filter values
        const minPrice = Number.parseInt(minPriceInput.value)
        const maxPrice = Number.parseInt(maxPriceInput.value)
        const selectedCategory = document.querySelector(".category-filter.active").getAttribute("data-category")
        const selectedTags = Array.from(tagFilters)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value)
        const selectedAvailability = Array.from(availabilityFilters)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value)

        // Apply filters
        currentProducts = products.filter((product) => {
            // Category filter
            if (selectedCategory !== "all" && product.category !== selectedCategory) {
                return false
            }

            // Price filter
            if (product.price < minPrice || product.price > maxPrice) {
                return false
            }

            // Tag filter
            if (selectedTags.length > 0 && !selectedTags.includes(product.tag)) {
                return false
            }

            // Availability filter
            if (selectedAvailability.length > 0 && !selectedAvailability.includes(product.availability)) {
                return false
            }

            return true
        })

        // Apply current sort
        sortProducts(sortSelect.value)
        updateProductsDisplay()
    }

    function resetFilters() {
        // Reset price filter
        minPriceInput.value = 0
        maxPriceInput.value = 500

        // Reset category filter
        categoryFilters.forEach((filter) => {
            filter.classList.remove("active")
            if (filter.getAttribute("data-category") === "all") {
                filter.classList.add("active")
            }
        })

        // Reset tag filters
        tagFilters.forEach((checkbox) => {
            checkbox.checked = false
        })

        // Reset availability filters
        availabilityFilters.forEach((checkbox) => {
            if (checkbox.value === "in-stock") {
                checkbox.checked = true
            } else {
                checkbox.checked = false
            }
        })

        // Reset products
        currentProducts = [...products]
        currentPage = 1

        // Apply default sort
        sortSelect.value = "popularity"
        sortProducts("popularity")

        // Update display
        updateProductsDisplay()
    }

    function openQuickView(productId) {
        const product = products.find((p) => p.id === productId)
        if (!product) return

        currentProduct = product

        // Set modal content
        modalProductImage.src = product.image
        modalProductName.textContent = product.name
        modalProductPrice.textContent = `₹${product.price}/${product.unit}`

        // Set rating stars
        let ratingHtml = ""
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(product.rating)) {
                ratingHtml += '<i class="fas fa-star"></i>'
            } else if (i - 0.5 <= product.rating) {
                ratingHtml += '<i class="fas fa-star-half-alt"></i>'
            } else {
                ratingHtml += '<i class="far fa-star"></i>'
            }
        }
        modalProductRating.innerHTML = `${ratingHtml} <span>(${product.rating} - ${product.reviews} reviews)</span>`

        // Set availability
        const availabilityClass = product.availability === "in-stock" ? "in-stock" : "out-of-stock"
        const availabilityText = product.availability === "in-stock" ? "In Stock" : "Out of Stock"
        modalProductAvailability.className = `product-quick-availability ${availabilityClass}`
        modalProductAvailability.innerHTML = `<i class="fas ${product.availability === "in-stock" ? "fa-check-circle" : "fa-times-circle"}"></i> ${availabilityText}`

        modalProductDescription.textContent = product.description
        modalProductUnit.textContent = product.unit
        modalQuantity.value = 1

        // Disable add to cart button if out of stock
        if (product.availability === "out-of-stock") {
            modalAddToCartBtn.classList.add("disabled")
            modalAddToCartBtn.disabled = true
        } else {
            modalAddToCartBtn.classList.remove("disabled")
            modalAddToCartBtn.disabled = false
        }

        // Show modal
        quickViewModal.style.display = "block"

        // Add event listeners
        const quantityInput = document.getElementById("modal-quantity")
        const minusBtn = document.querySelector(".quantity-btn.minus")
        const plusBtn = document.querySelector(".quantity-btn.plus")

        minusBtn.addEventListener("click", () => {
            const value = Number.parseInt(quantityInput.value)
            if (value > 1) {
                quantityInput.value = value - 1
            }
        })

        plusBtn.addEventListener("click", () => {
            const value = Number.parseInt(quantityInput.value)
            if (value < 10) {
                quantityInput.value = value + 1
            }
        })

        modalAddToCartBtn.addEventListener("click", () => {
            const quantity = Number.parseInt(quantityInput.value)
            addToCart(product.id, quantity)
            quickViewModal.style.display = "none"
        })
    }

    function addToCart(productId, quantity) {
        const product = products.find((p) => p.id === productId)
        if (!product || product.availability === "out-of-stock") return

        // Check if product already in cart
        const existingItem = cart.find((item) => item.id === productId)

        if (existingItem) {
            existingItem.quantity += quantity
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                unit: product.unit,
                quantity: quantity,
            })
        }

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(cart))

        // Update cart count
        updateCartCount()

        // Show notification
        showNotification(`${product.name} added to cart!`)
    }

    function updateCartCount() {
        const cartCount = document.querySelector(".cart-count")

        let totalItems = 0
        cart.forEach((item) => {
            totalItems += item.quantity
        })

        cartCount.textContent = totalItems
    }

    function showNotification(message) {
        // Check if notification container exists, if not create it
        let notificationContainer = document.querySelector('.notification-container');

        if (!notificationContainer) {
            notificationContainer = document.createElement('div');
            notificationContainer.className = 'notification-container';
            document.body.appendChild(notificationContainer);
        }

        // Create notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="notification-message">${message}</div>
        `;

        // Add notification to container
        notificationContainer.appendChild(notification);

        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 1000);
    }

    // Initialize quantity buttons in modal
    function initQuantityButtons() {
        const quantityBtns = document.querySelectorAll(".quantity-btn")
        quantityBtns.forEach((btn) => {
            btn.addEventListener("click", function () {
                const input = this.parentElement.querySelector("input")
                const currentValue = Number.parseInt(input.value)

                if (this.classList.contains("minus") && currentValue > 1) {
                    input.value = currentValue - 1
                } else if (this.classList.contains("plus") && currentValue < 10) {
                    input.value = currentValue + 1
                }
            })
        })
    }

    // Initialize
    initQuantityButtons()
})
