/**
 * Enhanced Slider Functionality
 */
document.addEventListener("DOMContentLoaded", () => {
    // Hero Slider
    const sliderWrapper = document.querySelector(".slider-wrapper")
    const slides = document.querySelectorAll(".slide")
    const prevBtn = document.querySelector(".slider-prev")
    const nextBtn = document.querySelector(".slider-next")
    const dots = document.querySelectorAll(".dot")

    if (sliderWrapper && slides.length > 0) {
        let currentSlide = 0
        const totalSlides = slides.length
        let slideInterval
        let isAnimating = false

        // Initialize slider
        updateSlider()
        startSlideInterval()

        // Previous slide button
        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                if (isAnimating) return
                isAnimating = true
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
                updateSlider()
                resetSlideInterval()
                setTimeout(() => {
                    isAnimating = false
                }, 1000)
            })
        }

        // Next slide button
        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                if (isAnimating) return
                isAnimating = true
                currentSlide = (currentSlide + 1) % totalSlides
                updateSlider()
                resetSlideInterval()
                setTimeout(() => {
                    isAnimating = false
                }, 1000)
            })
        }

        // Dot navigation
        if (dots.length > 0) {
            dots.forEach((dot, index) => {
                dot.addEventListener("click", () => {
                    if (isAnimating || currentSlide === index) return
                    isAnimating = true
                    currentSlide = index
                    updateSlider()
                    resetSlideInterval()
                    setTimeout(() => {
                        isAnimating = false
                    }, 1000)
                })
            })
        }

        // Swipe functionality for mobile
        let touchStartX = 0
        let touchEndX = 0

        sliderWrapper.addEventListener(
            "touchstart",
            (e) => {
                touchStartX = e.changedTouches[0].screenX
            },
            false,
        )

        sliderWrapper.addEventListener(
            "touchend",
            (e) => {
                touchEndX = e.changedTouches[0].screenX
                handleSwipe()
            },
            false,
        )

        function handleSwipe() {
            if (isAnimating) return

            const swipeThreshold = 50
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left - next slide
                isAnimating = true
                currentSlide = (currentSlide + 1) % totalSlides
                updateSlider()
                resetSlideInterval()
                setTimeout(() => {
                    isAnimating = false
                }, 1000)
            }

            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right - previous slide
                isAnimating = true
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
                updateSlider()
                resetSlideInterval()
                setTimeout(() => {
                    isAnimating = false
                }, 1000)
            }
        }

        // Update slider function
        function updateSlider() {
            // Update slides
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.add("active")
                } else {
                    slide.classList.remove("active")
                }
            })

            // Update dots
            if (dots.length > 0) {
                dots.forEach((dot, index) => {
                    if (index === currentSlide) {
                        dot.classList.add("active")
                    } else {
                        dot.classList.remove("active")
                    }
                })
            }
        }

        // Auto slide function
        function startSlideInterval() {
            slideInterval = setInterval(() => {
                if (isAnimating) return
                isAnimating = true
                currentSlide = (currentSlide + 1) % totalSlides
                updateSlider()
                setTimeout(() => {
                    isAnimating = false
                }, 1000)
            }, 6000)
        }

        // Reset slide interval
        function resetSlideInterval() {
            clearInterval(slideInterval)
            startSlideInterval()
        }
    }
})
