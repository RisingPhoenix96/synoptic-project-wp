<?php

/**
 * Register the custom post type
 */
add_action('init', function () {
    $name = 'Gallery Categories';
    $name_singular = 'Gallery Category';

    register_post_type('gallery_category', [
        'label' => $name,
        'labels' => [
            'name' => $name,
            'singular_name' => $name_singular,
            'add_new_item' => 'Add New ' . $name_singular,
            'edit_item' => 'Edit ' . $name_singular,
            'new_item' => 'New ' . $name_singular,
            'view_item' => 'View ' . $name_singular,
            'search_items' => 'Search ' . $name,
            'not_found' => 'No ' . $name . ' found',
            'not_found_in_trash' => 'No ' . $name . ' found in Trash',
            'parent_item_colon' => 'Parent ' . $name_singular . ':',
            'all_items' => 'All ' . $name,
            'archives' => $name_singular . ' Archives',
        ],
        'rewrite' => [
            'slug' => 'photo-catalogue/category'
        ],
        'supports' => [
            'title',
            'editor',
            'revisions',
            'page-attributes',
        ],
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-images-alt',
    ]);
});
