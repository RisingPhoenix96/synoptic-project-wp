<?php

/**
 * Plugin Name: Synoptic Post Types
 * Description: Provides custom post types for the the custom WordPress theme.
 */

// Check theme
$theme = wp_get_theme();

if ($theme->get_stylesheet() != 'cgit-synoptic-project') {
    return;
}

// Add fields
foreach (glob(__DIR__ . '/components/*.php') as $path) {
    require_once $path;
}
