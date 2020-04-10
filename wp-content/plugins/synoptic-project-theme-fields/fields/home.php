<?php
add_action('acf/init', function () {
    $location = [
        [
            [
                'param' => 'page_template',
                'operator' => '==',
                'value' => 'templates/home.php',
            ],
        ],
    ];

    acf_add_local_field_group([
        'key' => 'synoptic_home_content',
        'title' => 'Home Page Content',
        'location' => $location,
        'menu_order' => 10,
        'hide_on_screen' => [
            'the_content',
            'the_excerpt',
            'featured_image'
        ],
        'fields' => [
            [
                'key' => 'synoptic_home_content__title',
                'label' => 'Title',
                'name' => 'synoptic_home_content_title',
                'type' => 'text',
            ],
            [
                'key' => 'synoptic_home_content__text',
                'label' => 'Text',
                'name' => 'synoptic_home_content_text',
                'type' => 'textarea',
            ],
            [
                'key' => 'synoptic_home_content__featured_images',
                'label' => 'Featured Images (max: 3)',
                'name' => 'synoptic_home_content_images',
                'type' => 'gallery',
                'max' => 3,
                'min_width' => 1920,
                'min_height' => 1080
            ],
        ],
    ]);
});
