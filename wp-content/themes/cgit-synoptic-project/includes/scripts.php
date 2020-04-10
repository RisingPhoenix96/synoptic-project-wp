<?php

/** Enqueue the CSS and Javascript required by the theme */

add_action('wp_enqueue_scripts', function () {
    terminus_enqueue([
        'css/style.css',
        '//fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;1,300&display=swap',
    ]);

    terminus_enqueue('/js/script.js');
});
