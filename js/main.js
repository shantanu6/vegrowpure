/**
 * Vegrowpure - Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });

        backToTopButton.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Hero Slider
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dots = document.querySelectorAll('.dot');

    if (sliderWrapper && slides.length > 0) {
        let currentSlide = 0;
        const totalSlides = slides.length;
        let slideInterval;

        // Initialize slider
        updateSlider();
        startSlideInterval();

        // Previous slide button
        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
                resetSlideInterval();
            });
        }

        // Next slide button
        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
                resetSlideInterval();
            });
        }

        // Dot navigation
        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function () {
                    currentSlide = index;
                    updateSlider();
                    resetSlideInterval();
                });
            });
        }

        // Update slider function
        function updateSlider() {
            // Update slides
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });

            // Update dots
            if (dots.length > 0) {
                dots.forEach((dot, index) => {
                    if (index === currentSlide) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
        }

        // Auto slide function
        function startSlideInterval() {
            slideInterval = setInterval(function () {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }, 5000);
        }

        // Reset slide interval
        function resetSlideInterval() {
            clearInterval(slideInterval);
            startSlideInterval();
        }
    }

    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonialPrev = document.querySelector('.testimonial-prev');
    const testimonialNext = document.querySelector('.testimonial-next');

    if (testimonialSlider && testimonialPrev && testimonialNext) {
        let slideIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        const totalSlides = testimonials.length;

        // Initialize slider
        updateTestimonialSlider();

        testimonialPrev.addEventListener('click', function () {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            updateTestimonialSlider();
        });

        testimonialNext.addEventListener('click', function () {
            slideIndex = (slideIndex + 1) % totalSlides;
            updateTestimonialSlider();
        });

        function updateTestimonialSlider() {
            const slideWidth = testimonials[0].offsetWidth + 30; // Card width + margin
            testimonialSlider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        }

        // Update slider on window resize
        window.addEventListener('resize', updateTestimonialSlider);
    }

    // Product View Toggle (Grid/List)
    const gridViewBtn = document.querySelector('.grid-view');
    const listViewBtn = document.querySelector('.list-view');
    const productsGrid = document.querySelector('.products-grid');

    if (gridViewBtn && listViewBtn && productsGrid) {
        gridViewBtn.addEventListener('click', function () {
            productsGrid.classList.remove('list-layout');
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });

        listViewBtn.addEventListener('click', function () {
            productsGrid.classList.add('list-layout');
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });
    }

    // Price Range Slider
    const sliderMin = document.querySelector('.slider-min');
    const sliderMax = document.querySelector('.slider-max');
    const sliderTrack = document.querySelector('.slider-track');
    const minPriceInput = document.querySelector('.price-input:first-child input');
    const maxPriceInput = document.querySelector('.price-input:last-child input');

    if (sliderMin && sliderMax && sliderTrack && minPriceInput && maxPriceInput) {
        // Set initial values
        let minValue = parseInt(sliderMin.value);
        let maxValue = parseInt(sliderMax.value);

        // Update slider track
        updateSliderTrack();

        // Update slider on input change
        sliderMin.addEventListener('input', function () {
            minValue = parseInt(sliderMin.value);
            if (minValue > maxValue) {
                minValue = maxValue;
                sliderMin.value = minValue;
            }
            minPriceInput.value = minValue;
            updateSliderTrack();
        });

        sliderMax.addEventListener('input', function () {
            maxValue = parseInt(sliderMax.value);
            if (maxValue < minValue) {
                maxValue = minValue;
                sliderMax.value = maxValue;
            }
            maxPriceInput.value = maxValue;
            updateSliderTrack();
        });

        // Update slider on input field change
        minPriceInput.addEventListener('input', function () {
            minValue = parseInt(minPriceInput.value);
            if (minValue < 0) {
                minValue = 0;
                minPriceInput.value = minValue;
            }
            if (minValue > maxValue) {
                minValue = maxValue;
                minPriceInput.value = minValue;
            }
            sliderMin.value = minValue;
            updateSliderTrack();
        });

        maxPriceInput.addEventListener('input', function () {
            maxValue = parseInt(maxPriceInput.value);
            if (maxValue > 500) {
                maxValue = 500;
                maxPriceInput.value = maxValue;
            }
            if (maxValue < minValue) {
                maxValue = minValue;
                maxPriceInput.value = maxValue;
            }
            sliderMax.value = maxValue;
            updateSliderTrack();
        });

        function updateSliderTrack() {
            const percent1 = (minValue / 500) * 100;
            const percent2 = (maxValue / 500) * 100;
            sliderTrack.style.left = percent1 + '%';
            sliderTrack.style.width = (percent2 - percent1) + '%';
        }
    }

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.btn-add-cart, .btn-add-to-cart');
    const cartCount = document.querySelector('.cart-count');

    if (addToCartButtons.length > 0 && cartCount) {
        let count = parseInt(cartCount.textContent) || 0;

        addToCartButtons.forEach(button => {
            button.addEventListener('click', function () {
                count++;
                cartCount.textContent = count;

                // Show add to cart animation
                const productCard = this.closest('.product-card');
                if (productCard) {
                    productCard.classList.add('added');

                    setTimeout(() => {
                        productCard.classList.remove('added');
                    }, 1000);
                }

                // Show notification
                showNotification('Product added to cart!');
            });
        });
    }

    // Notification Function
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
        }, 3000);
    }

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();

            if (email) {
                // Here you would typically send the email to your server
                // For demo purposes, we'll just show a success message
                showNotification('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Product Detail Page - Thumbnail Images
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainProductImage = document.getElementById('main-product-image');

    if (thumbnails.length > 0 && mainProductImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function () {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));

                // Add active class to clicked thumbnail
                this.classList.add('active');

                // Update main image
                const imageUrl = this.getAttribute('data-image');
                mainProductImage.src = imageUrl;
            });
        });
    }

    // Product Quantity Buttons
    const quantityInputs = document.querySelectorAll('.quantity-input');

    if (quantityInputs.length > 0) {
        quantityInputs.forEach(input => {
            const minusBtn = input.querySelector('.minus');
            const plusBtn = input.querySelector('.plus');
            const inputField = input.querySelector('input');

            minusBtn.addEventListener('click', function () {
                let value = parseInt(inputField.value);
                if (value > 1) {
                    value--;
                    inputField.value = value;

                    // If in cart page, update subtotal
                    updateCartSubtotal(input);
                }
            });

            plusBtn.addEventListener('click', function () {
                let value = parseInt(inputField.value);
                const max = parseInt(inputField.getAttribute('max')) || 10;
                if (value < max) {
                    value++;
                    inputField.value = value;

                    // If in cart page, update subtotal
                    updateCartSubtotal(input);
                }
            });

            inputField.addEventListener('change', function () {
                let value = parseInt(this.value);
                const min = parseInt(this.getAttribute('min')) || 1;
                const max = parseInt(this.getAttribute('max')) || 10;

                if (value < min) {
                    value = min;
                    this.value = value;
                } else if (value > max) {
                    value = max;
                    this.value = value;
                }

                // If in cart page, update subtotal
                updateCartSubtotal(input);
            });
        });
    }

    // Update Cart Subtotal
    function updateCartSubtotal(quantityInput) {
        const cartItem = quantityInput.closest('.cart-item');
        if (cartItem) {
            const priceText = cartItem.querySelector('.price-col').textContent;
            const price = parseInt(priceText.replace(/[^\d]/g, ''));
            const quantity = parseInt(quantityInput.querySelector('input').value);
            const subtotalElement = cartItem.querySelector('.subtotal-col');

            if (price && quantity && subtotalElement) {
                const subtotal = price * quantity;
                subtotalElement.textContent = `₹${subtotal}`;

                // Update cart total
                updateCartTotal();
            }
        }
    }

    // Update Cart Total
    function updateCartTotal() {
        const subtotalElements = document.querySelectorAll('.subtotal-col');
        let total = 0;

        subtotalElements.forEach(element => {
            const subtotal = parseInt(element.textContent.replace(/[^\d]/g, ''));
            if (subtotal) {
                total += subtotal;
            }
        });

        const subtotalElement = document.querySelector('.summary-row:first-child span:last-child');
        const totalElement = document.querySelector('.summary-row.total span:last-child');

        if (subtotalElement && totalElement) {
            subtotalElement.textContent = `₹${total}`;

            // Add shipping cost
            const shippingText = document.querySelector('.summary-row:nth-child(2) span:last-child').textContent;
            const shipping = parseInt(shippingText.replace(/[^\d]/g, ''));

            // Subtract discount
            const discountText = document.querySelector('.summary-row.discount span:last-child').textContent;
            const discount = parseInt(discountText.replace(/[^\d]/g, ''));

            const finalTotal = total + shipping - discount;
            totalElement.textContent = `₹${finalTotal}`;
        }
    }

    // Remove Cart Item
    const removeButtons = document.querySelectorAll('.remove-btn');

    if (removeButtons.length > 0) {
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const cartItem = this.closest('.cart-item');

                // Add fade-out animation
                cartItem.style.opacity = '0';
                cartItem.style.height = '0';
                cartItem.style.margin = '0';
                cartItem.style.padding = '0';
                cartItem.style.overflow = 'hidden';
                cartItem.style.transition = 'all 0.3s ease';

                // Remove item after animation
                setTimeout(() => {
                    cartItem.remove();

                    // Update cart count
                    const cartCount = document.querySelector('.cart-count');
                    let count = parseInt(cartCount.textContent);
                    if (count > 0) {
                        count--;
                        cartCount.textContent = count;
                    }

                    // Update cart total
                    updateCartTotal();

                    // Show notification
                    showNotification('Product removed from cart!');

                    // If no items left, redirect to products page
                    const cartItems = document.querySelectorAll('.cart-item');
                    if (cartItems.length === 0) {
                        // Redirect to products page after showing a message
                        showNotification('Your cart is empty. Redirecting to products...');
                        setTimeout(() => {
                            window.location.href = 'products.html';
                        }, 2000);
                    }
                }, 300);
            });
        });
    }

    // Product Detail Page - Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');

            header.addEventListener('click', function () {
                // Toggle active class
                item.classList.toggle('active');

                // Close other accordion items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });

        // Open first accordion item by default
        accordionItems[0].classList.add('active');
    }

    // Product Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Show corresponding content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Rating Select
    const ratingStars = document.querySelectorAll('.rating-select i');

    if (ratingStars.length > 0) {
        ratingStars.forEach(star => {
            star.addEventListener('click', function () {
                const rating = parseInt(this.getAttribute('data-rating'));

                // Update stars
                ratingStars.forEach(s => {
                    const starRating = parseInt(s.getAttribute('data-rating'));
                    if (starRating <= rating) {
                        s.className = 'fas fa-star active';
                    } else {
                        s.className = 'far fa-star';
                    }
                });
            });

            star.addEventListener('mouseover', function () {
                const rating = parseInt(this.getAttribute('data-rating'));

                // Update stars on hover
                ratingStars.forEach(s => {
                    const starRating = parseInt(s.getAttribute('data-rating'));
                    if (starRating <= rating) {
                        s.className = 'fas fa-star';
                    } else {
                        s.className = 'far fa-star';
                    }
                });
            });

            star.addEventListener('mouseout', function () {
                // Reset to selected rating
                const selectedRating = document.querySelector('.rating-select i.active');
                const rating = selectedRating ? parseInt(selectedRating.getAttribute('data-rating')) : 0;

                ratingStars.forEach(s => {
                    const starRating = parseInt(s.getAttribute('data-rating'));
                    if (starRating <= rating) {
                        s.className = 'fas fa-star active';
                    } else {
                        s.className = 'far fa-star';
                    }
                });
            });
        });
    }

    // Toggle Password Visibility
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    if (togglePasswordButtons.length > 0) {
        togglePasswordButtons.forEach(button => {
            button.addEventListener('click', function () {
                const passwordField = this.previousElementSibling;
                const type = passwordField.getAttribute('type');

                if (type === 'password') {
                    passwordField.setAttribute('type', 'text');
                    this.innerHTML = '<i class="far fa-eye-slash"></i>';
                } else {
                    passwordField.setAttribute('type', 'password');
                    this.innerHTML = '<i class="far fa-eye"></i>';
                }
            });
        });
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', function () {
                // Toggle active class
                item.classList.toggle('active');

                // Close other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });

        // Open first FAQ item by default
        faqItems[0].classList.add('active');
    }

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = this.querySelector('#name').value.trim();
            const email = this.querySelector('#email').value.trim();
            const subject = this.querySelector('#subject').value.trim();
            const message = this.querySelector('#message').value.trim();

            if (name && email && subject && message) {
                // Here you would typically send the form data to your server
                // For demo purposes, we'll just show a success message
                showNotification('Your message has been sent successfully!');

                // Reset form
                this.reset();
            } else {
                showNotification('Please fill in all required fields.');
            }
        });
    }

    // Careers Page - Job Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const jobCards = document.querySelectorAll('.job-card');

    if (filterButtons.length > 0 && jobCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Get filter value
                const filter = this.getAttribute('data-filter');

                // Filter job cards
                jobCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    // In main.js
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.querySelectorAll(".cart-count").forEach(el => {
            el.textContent = count;
        });
    }

    // Call this when the page loads
    document.addEventListener("DOMContentLoaded", updateCartCount);
});
