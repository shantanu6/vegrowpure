<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        <?php echo isset($pageTitle) ? $pageTitle : 'Vegrowpure'; ?>
    </title>
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
</head>

<body>
    <header>
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                    <a href="index.php">
                        <img src="/images/logo.png" alt="Vegrowpure Logo">
                    </a>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="index.php" <?php echo basename($_SERVER['PHP_SELF'])=='index.php'
                                ? 'class="active"' : '' ; ?>>Home</a></li>
                        <li><a href="about.php" <?php echo basename($_SERVER['PHP_SELF'])=='about.php'
                                ? 'class="active"' : '' ; ?>>About Us</a></li>
                        <li><a href="products.html" <?php echo basename($_SERVER['PHP_SELF'])=='products.html'
                                ? 'class="active"' : '' ; ?>>Products</a></li>
                        <li><a href="careers.php" <?php echo basename($_SERVER['PHP_SELF'])=='careers.php'
                                ? 'class="active"' : '' ; ?>>Careers</a></li>
                        <li><a href="contact.php" <?php echo basename($_SERVER['PHP_SELF'])=='contact.php'
                                ? 'class="active"' : '' ; ?>>Contact</a></li>
                    </ul>
                </nav>
                <div class="header-actions">
                    <a href="login.php" class="btn btn-outline">Login</a>
                    <a href="cart.php" class="cart-icon"><i class="fas fa-shopping-cart"></i> <span
                            class="cart-count">0</span></a>
                    <button class="mobile-menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>