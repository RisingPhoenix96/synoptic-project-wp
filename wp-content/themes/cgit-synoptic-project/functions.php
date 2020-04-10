<?php

/** Stores all custom theme functions */

/**
 * Declare the theme directory and image directory
 */
define('THEME_DIR', get_stylesheet_directory());
define('THEME_URL', get_stylesheet_directory_uri());
define('IMAGE_DIR', THEME_DIR . '/images');
define('IMAGE_URL', THEME_URL . '/images');

/**
 * Include all files inside includes folder
 * 
 * All functions are stored as separate files inside includes to keep functions.php clean
 */
foreach (glob(__DIR__ . '/includes/*.php') as $file) {
    require_once $file;
}
