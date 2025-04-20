/**
 * Vegrowpure - Enhanced JavaScript Functionality
 */

document.addEventListener("DOMContentLoaded", () => {
    // Header Scroll Effect
    const header = document.querySelector("header")

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled")
        } else {
            header.classList.remove("scrolled")
        }
    })

    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(".feature-card, .why-choose-item, .product-card, .step, .section-title")

        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top
            const screenPosition = window.innerHeight / 1.2

            if (elementPosition < screenPosition) {
                if (element.classList.contains("feature-card")) {
                    element.classList.add("fade-in-up")
                } else if (element.classList.contains("why-choose-item")) {
                    element.classList.add("fade-in-left")
                } else if (element.classList.contains("product-card")) {
                    element.classList.add("fade-in")
                } else if (element.classList.contains("step")) {
                    element.classList.add("fade-in-up")
                } else if (element.classList.contains("section-title")) {
                    element.classList.add("fade-in")
                }
            }
        })
    }

    // Run on load
    animateOnScroll()

    // Run on scroll
    window.addEventListener("scroll", animateOnScroll)

    // Enhanced Mobile Menu
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mainNav = document.querySelector(".main-nav")
    const body = document.body

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active")
            this.classList.toggle("active")

            // Prevent body scrolling when menu is open
            if (mainNav.classList.contains("active")) {
                body.style.overflow = "hidden"
            } else {
                body.style.overflow = ""
            }
        })
    }

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
        if (mainNav && mainNav.classList.contains("active")) {
            if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                mainNav.classList.remove("active")
                mobileMenuToggle.classList.remove("active")
                body.style.overflow = ""
            }
        }
    })

    // Enhanced Add to Cart Animation
    const addToCartButtons = document.querySelectorAll(".btn-add-cart, .btn-add-to-cart")

    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach((button) => {
            button.addEventListener("click", function (e) {
                // Create ripple effect
                const ripple = document.createElement("span")
                ripple.classList.add("cart-ripple")
                this.appendChild(ripple)

                const x = e.clientX - e.target.getBoundingClientRect().left
                const y = e.clientY - e.target.getBoundingClientRect().top

                ripple.style.left = `${x}px`
                ripple.style.top = `${y}px`

                setTimeout(() => {
                    ripple.remove()
                }, 600)

                // Update cart count
                const cartCount = document.querySelector(".cart-count")
                const count = Number.parseInt(cartCount.textContent)
                cartCount.textContent = count + 1

                // Animate cart icon
                const cartIcon = document.querySelector(".cart-icon")
                cartIcon.classList.add("cart-bounce")

                setTimeout(() => {
                    cartIcon.classList.remove("cart-bounce")
                }, 500)

                // Show notification
                showNotification("Product added to cart!")
            })
        })
    }

    // Enhanced Notification Function
    function showNotification(message, type = "success") {
        // Check if notification container exists, if not create it
        let notificationContainer = document.querySelector(".notification-container")

        if (!notificationContainer) {
            notificationContainer = document.createElement("div")
            notificationContainer.className = "notification-container"
            document.body.appendChild(notificationContainer)
        }

        // Create notification
        const notification = document.createElement("div")
        notification.className = `notification ${type}`

        let icon = "check-circle"
        if (type === "error") icon = "x-circle"
        if (type === "warning") icon = "alert-triangle"
        if (type === "info") icon = "info"

        notification.innerHTML = `
        <div class="notification-icon">
          <i class="fas fa-${icon}"></i>
        </div>
        <div class="notification-message">${message}</div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
      `

        // Add notification to container
        notificationContainer.appendChild(notification)

        // Show notification
        setTimeout(() => {
            notification.classList.add("show")
        }, 10)

        // Close button functionality
        const closeBtn = notification.querySelector(".notification-close")
        closeBtn.addEventListener("click", () => {
            notification.classList.remove("show")
            setTimeout(() => {
                notification.remove()
            }, 300)
        })

        // Remove notification after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.classList.remove("show")
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove()
                    }
                }, 300)
            }
        }, 5000)
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')

    anchorLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            if (targetId === "#") return

            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                const headerHeight = document.querySelector("header").offsetHeight
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth",
                })
            }
        })
    })

    // Intersection Observer for revealing elements on scroll
    if ("IntersectionObserver" in window) {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed")
                    observer.unobserve(entry.target)
                }
            })
        }, observerOptions)

        const elementsToReveal = document.querySelectorAll(".feature-card, .product-card, .why-choose-item, .step")
        elementsToReveal.forEach((element) => {
            element.classList.add("reveal-element")
            observer.observe(element)
        })
    }
})
