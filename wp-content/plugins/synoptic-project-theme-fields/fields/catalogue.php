<?php
add_action('acf/init', function () {
    $location = [
        [
            [
                'param' => 'page_template',
                'operator' => '==',
                'value' => 'templates/catalogue.php',
            ],
        ],
    ];

    acf_add_local_field_group([
        'key' => 'synoptic_catalogue_gallery',
        'title' => 'Photo Catalogue',
        'location' => $location,
        'menu_order' => 10,
        'hide_on_screen' => [
            'the_content',
            'the_excerpt',
        ],
        'fields' => [
            [
                'key' => 'synoptic_catalogue_gallery__images',
                'label' => 'Images',
                'name' => 'synoptic_catalogue_gallery_images',
                'type' => 'gallery',
            ],
        ],
    ]);
});
