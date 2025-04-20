<footer>
    <div class="container">
        <div class="footer-top">
            <div class="footer-column">
                <div class="footer-logo">
                    <img src="/images/logo.png" alt="Vegrowpure Logo">
                </div>
                <p>Connecting farmers directly with consumers for fresh, organic vegetables at fair prices.</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div class="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="careers.php">Careers</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Customer Service</h3>
                <ul>
                    <li><a href="faq.php">FAQ</a></li>
                    <li><a href="shipping-policy.php">Shipping Policy</a></li>
                    <li><a href="return-policy.php">Return Policy</a></li>
                    <li><a href="privacy-policy.php">Privacy Policy</a></li>
                    <li><a href="terms-conditions.php">Terms & Conditions</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Contact Us</h3>
                <ul class="contact-info">
                    <li><i class="fas fa-map-marker-alt"></i> 123 Farm Road, Mumbai, Maharashtra, India</li>
                    <li><i class="fas fa-phone-alt"></i> +91 7030727648</li>
                    <li><i class="fas fa-envelope"></i> info@vegrowpure.in</li>
                    <li><i class="fas fa-clock"></i> Mon - Sat: 8:00 AM - 8:00 PM</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy;
                <?php echo date('Y'); ?> Vegrowpure. All Rights Reserved.
            </p>
            <div class="payment-methods">
                <img src="/images/payment-methods.png" alt="Payment Methods">
            </div>
        </div>
    </div>
</footer>

<!-- Back to Top Button -->
<a href="#" class="back-to-top" id="backToTop">
    <i class="fas fa-arrow-up"></i>
</a>

<!-- JavaScript -->
<script src="/js/main.js"></script>
<?php if (isset($pageSpecificJS)): ?>
<script src="/js/<?php echo $pageSpecificJS; ?>"></script>
<?php endif; ?>
</body>

</html>