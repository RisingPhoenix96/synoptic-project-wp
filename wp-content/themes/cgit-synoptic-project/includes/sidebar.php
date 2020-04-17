<?php

// Register blog sidebar
register_sidebar([
    'name' => 'Blog Archive Sidebar',
    'class' => 'sidebar',
    'description' => 'Sidebar for the blog archive page.',
    'before_widget' => '<div class="sidebar">',
    'after_widget' => '</div>',
    'before_title' => '<h4>',
    'after_title' => '</h4>',
]);
