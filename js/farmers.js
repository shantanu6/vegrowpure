/**
 * Vegrowpure - Farmers Page JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const filterBtns = document.querySelectorAll(".filter-btn")
    const farmerCards = document.querySelectorAll(".farmer-card")
    const readMoreBtns = document.querySelectorAll(".read-more-btn")
    const farmerModal = document.getElementById("farmer-modal")
    const closeModalBtn = document.querySelector(".close-modal")
    const modalFarmerImage = document.getElementById("modal-farmer-image")
    const modalFarmerName = document.getElementById("modal-farmer-name")
    const modalFarmerLocation = document.getElementById("modal-farmer-location")
    const modalFarmerSpecialty = document.getElementById("modal-farmer-specialty")
    const modalFarmerYears = document.getElementById("modal-farmer-years")
    const modalFarmerStory = document.getElementById("modal-farmer-story")
    const modalFarmerGallery = document.getElementById("modal-farmer-gallery")
    const modalFarmerProducts = document.getElementById("modal-farmer-products")
    const farmerJoinForm = document.getElementById("farmer-join-form")

    // Farmer Data
    const farmerData = {
        rajesh: {
            name: "Rajesh Patil",
            image:
                "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
            location: "<i class='fas fa-map-marker-alt'></i> Nashik, Maharashtra",
            specialty: "<i class='fas fa-leaf'></i> <span>Specialty:</span> Tomatoes, Onions, Peppers",
            years: "<i class='fas fa-calendar-alt'></i> <span>Farming since:</span> 1995",
            story: `<p>Rajesh Patil comes from a long line of farmers spanning three generations in the fertile region of Nashik, Maharashtra. After completing his agriculture degree from Punjab Agricultural University, he returned to his ancestral 12-acre farm with a mission to revolutionize traditional farming practices.</p>
                <p>In 2005, Rajesh made the bold decision to transition his entire farm to organic methods after witnessing the deteriorating soil health and increasing dependency on chemical inputs. The transition wasn't easy – yields dropped initially, and there were challenges with pest management. However, his persistence and innovative approaches to natural farming eventually paid off.</p>
                <p>Today, Rajesh's farm is a model for sustainable agriculture in the region. He uses companion planting techniques, natural pest management, and has implemented an efficient drip irrigation system that has reduced water usage by 60%. His tomatoes are known throughout the region for their exceptional flavor and are grown without any chemical pesticides or fertilizers.</p>
                <p>Beyond farming, Rajesh is passionate about educating the next generation of farmers. He regularly hosts workshops on his farm and has partnered with local schools to create awareness about sustainable farming practices. "The soil is our greatest inheritance," Rajesh often says. "It's our duty to preserve it for future generations."</p>
                <p>Rajesh joined Vegrowpure in 2019, and the partnership has allowed him to reach urban consumers directly, ensuring fair prices for his premium organic produce while giving city dwellers access to truly farm-fresh vegetables.</p>`,
            gallery: [
                "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1708267034046-ade1ff02f20a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1598512752271-33f913a5af13?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
            products: [
                {
                    name: "Fresh Tomatoes",
                    image:
                        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹60/kg",
                },
                {
                    name: "Red Onions",
                    image:
                        "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹35/kg",
                },
                {
                    name: "Green Capsicum",
                    image:
                        "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹70/kg",
                },
            ],
        },
        lakshmi: {
            name: "Lakshmi Devi",
            image:
                "https://images.unsplash.com/photo-1708267034046-ade1ff02f20a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            location: "<i class='fas fa-map-marker-alt'></i> Mysore, Karnataka",
            specialty: "<i class='fas fa-leaf'></i> <span>Specialty:</span> Leafy Greens, Herbs",
            years: "<i class='fas fa-calendar-alt'></i> <span>Farming since:</span> 2008",
            story: `<p>Lakshmi Devi's journey into farming is not a traditional one. Born and raised in Bangalore, she spent 12 years working in the IT sector as a project manager before a burnout and a desire for a more meaningful connection to the earth led her to make a dramatic career change.</p>
                <p>In 2008, Lakshmi purchased a 5-acre plot of land outside Mysore and began her journey into organic farming. With no prior experience in agriculture, she immersed herself in learning – attending workshops, reading extensively, and seeking guidance from elder farmers in the region.</p>
                <p>Lakshmi's farm, which she named "Haritha" (meaning green in Sanskrit), specializes in growing nutrient-rich leafy greens and aromatic herbs using permaculture principles. Her approach to farming is holistic – focusing on creating a self-sustaining ecosystem where plants, insects, and microorganisms work together in harmony.</p>
                <p>Water conservation is a particular passion for Lakshmi. She has implemented an innovative rainwater harvesting system that captures monsoon rains, allowing her farm to remain productive even during dry periods. This system has become a model for other farmers in the drought-prone regions of Karnataka.</p>
                <p>"Farming reconnected me with the rhythms of nature," Lakshmi shares. "There's a profound satisfaction in growing food that nourishes both the body and the soil."</p>
                <p>Since partnering with Vegrowpure in 2020, Lakshmi has been able to expand her range of herbs and greens, knowing there's a reliable market for her carefully grown produce. Her spinach, fenugreek, and mint are particularly popular among Vegrowpure customers.</p>`,
            gallery: [
                "https://images.unsplash.com/photo-1708267034046-ade1ff02f20a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1708267034046-ade1ff02f20a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1591184510259-b6f1be3d7aff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
            products: [
                {
                    name: "Organic Spinach",
                    image:
                        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹40/bunch",
                },
                {
                    name: "Fresh Mint",
                    image:
                        "https://images.unsplash.com/photo-1628614161900-757351aa9cd2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹30/bunch",
                },
                {
                    name: "Organic Fenugreek",
                    image:
                        "https://images.unsplash.com/photo-1550016504-df45ead0f232?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹35/bunch",
                },
            ],
        },
        // Add data for other farmers similarly
        patel: {
            name: "Patel Brothers",
            image:
                "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            location: "<i class='fas fa-map-marker-alt'></i> Anand, Gujarat",
            specialty: "<i class='fas fa-leaf'></i> <span>Specialty:</span> Potatoes, Carrots, Root Vegetables",
            years: "<i class='fas fa-calendar-alt'></i> <span>Farming since:</span> 1980",
            story: `<p>The Patel brothers, Nikhil and Suresh, are second-generation farmers who have transformed their family's conventional farm into a thriving organic enterprise. Their 15-acre farm in Anand, Gujarat, has been in the family since 1980 when their father first purchased the land.</p>
                <p>Growing up on the farm, both brothers witnessed firsthand the toll that chemical-intensive farming took on the soil and on their father's health. When they took over the farm in 2005, they made a gradual but determined transition to organic methods, focusing primarily on root vegetables.</p>
                <p>The brothers have developed special techniques for growing sweeter carrots and more nutritious potatoes without chemical fertilizers. Their method involves a carefully calibrated crop rotation system and the use of indigenous microorganisms to enhance soil fertility.</p>
                <p>"Root vegetables are often overlooked, but they're the foundation of so many meals," says Nikhil. "We take pride in growing vegetables that not only taste better but also contain more nutrients because of the healthy soil they grow in."</p>
                <p>The Patel brothers are also known for their innovative water conservation techniques. They've implemented a subsurface drip irrigation system that delivers water directly to the root zone, reducing evaporation and runoff. This system has allowed them to reduce water usage by 40% compared to conventional methods.</p>
                <p>Since joining Vegrowpure in 2018, the Patels have been able to expand their variety of root vegetables, experimenting with heirloom varieties that had almost disappeared from the region. Their purple carrots and yellow beetroots have become customer favorites.</p>`,
            gallery: [
                "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                "https://images.unsplash.com/photo-1447175008436-054170c2e979?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3",
            ],
            products: [
                {
                    name: "Fresh Potatoes",
                    image:
                        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹30/kg",
                },
                {
                    name: "Organic Carrots",
                    image:
                        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹50/kg",
                },
                {
                    name: "Purple Carrots",
                    image:
                        "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                    price: "₹70/kg",
                },
            ],
        },
    }

    // Event Listeners
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            // Remove active class from all buttons
            filterBtns.forEach((b) => b.classList.remove("active"))
            // Add active class to clicked button
            btn.classList.add("active")
            // Filter farmers
            const region = btn.getAttribute("data-region")
            filterFarmers(region)
        })
    })

    readMoreBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault()
            const farmerId = btn.getAttribute("data-farmer")
            openFarmerModal(farmerId)
        })
    })

    closeModalBtn.addEventListener("click", () => {
        farmerModal.style.display = "none"
    })

    window.addEventListener("click", (e) => {
        if (e.target === farmerModal) {
            farmerModal.style.display = "none"
        }
    })

    if (farmerJoinForm) {
        farmerJoinForm.addEventListener("submit", (e) => {
            e.preventDefault()
            // In a real application, you would send this data to a server
            alert("Thank you for your interest! We'll review your application and get back to you soon.")
            farmerJoinForm.reset()
        })
    }

    // Functions
    function filterFarmers(region) {
        farmerCards.forEach((card) => {
            if (region === "all" || card.getAttribute("data-region") === region) {
                card.style.display = "flex"
            } else {
                card.style.display = "none"
            }
        })
    }

    function openFarmerModal(farmerId) {
        const farmer = farmerData[farmerId]
        if (!farmer) return

        // Set modal content
        modalFarmerImage.src = farmer.image
        modalFarmerName.textContent = farmer.name
        modalFarmerLocation.innerHTML = farmer.location
        modalFarmerSpecialty.innerHTML = farmer.specialty
        modalFarmerYears.innerHTML = farmer.years
        modalFarmerStory.innerHTML = farmer.story

        // Generate gallery
        modalFarmerGallery.innerHTML = ""
        farmer.gallery.forEach((image) => {
            const galleryItem = document.createElement("div")
            galleryItem.className = "gallery-item"
            galleryItem.innerHTML = `<img src="${image}" alt="Farm Gallery">`
            modalFarmerGallery.appendChild(galleryItem)
        })

        // Generate products
        modalFarmerProducts.innerHTML = ""
        farmer.products.forEach((product) => {
            const productCard = document.createElement("div")
            productCard.className = "product-card"
            productCard.innerHTML = `
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
            <h4>${product.name}</h4>
            <div class="product-price">${product.price}</div>
            <button class="btn btn-outline btn-view-product">View Product</button>
          </div>
        `
            modalFarmerProducts.appendChild(productCard)
        })

        // Show modal
        farmerModal.style.display = "block"
    }

    // Initialize
    // Add click event to gallery items for zooming
    document.addEventListener("click", (e) => {
        if (e.target.closest(".gallery-item")) {
            const img = e.target.closest(".gallery-item").querySelector("img")
            if (img) {
                // Create a lightbox effect
                const lightbox = document.createElement("div")
                lightbox.className = "lightbox"
                lightbox.innerHTML = `
            <div class="lightbox-content">
              <span class="close-lightbox">&times;</span>
              <img src="${img.src}" alt="Enlarged Image">
            </div>
          `
                document.body.appendChild(lightbox)

                // Close lightbox on click
                lightbox.addEventListener("click", () => {
                    lightbox.remove()
                })
            }
        }
    })
})
