<?php

/** Enqueue the CSS and Javascript required by the theme */

add_action('wp_enqueue_scripts', function () {
    terminus_enqueue([
        'css/style.css',
        '//fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet"',
    ]);

    terminus_enqueue('js/script.js');
});
