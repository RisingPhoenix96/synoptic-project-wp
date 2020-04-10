<!DOCTYPE html>
<html <?php language_attributes() ?>>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head() ?>
</head>

<body>
    <header class="site-header --no-js">
        <div class="flex-wrap">
            <h1 class="logo">
                <a href="/"><img src="<?= IMAGE_URL ?>/logos/logo.jpg" alt="Alt text goes here"></a>
            </h1>
            <nav class="main-nav">
                <?php
                wp_nav_menu([
                    'menu' => 'Main Navigation Menu',
                    'theme_location' => 'Header Menu',
                ]);
                ?>
            </nav>
        </div>
        </div>
        <div class="header-mobile-cta --hidden">
            <a href="#" class="button nav-toggle">
                <img src="<?= IMAGE_URL ?>/icons/menu.svg" alt="Menu">
            </a>
        </div>
    </header>