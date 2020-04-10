<?php

/**
 * Plugin Name: Synoptic Project Theme Fields
 * Description: Provides custom fields for the synoptic project theme
 */

// Check if the current theme is the correct one
$theme = wp_get_theme();

if ($theme->get_stylesheet() !== 'cgit-synoptic-project') {
    return;
}

// Add all PHP files in the fields folder
foreach (glob(__DIR__ . '/fields/*.php') as $file) {
    require_once $file;
}
