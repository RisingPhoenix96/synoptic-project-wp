<?php
add_action('acf/init', function () {
    $location = [
        [
            [
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'gallery_category',
            ],
        ],
    ];

    acf_add_local_field_group([
        'key' => 'synoptic_gallery_category',
        'title' => 'Images in this Category',
        'location' => $location,
        'menu_order' => 10,
        'hide_on_screen' => [
            'the_excerpt',
        ],
        'fields' => [
            [
                'key' => 'synoptic_gallery_category__images',
                'label' => 'Select Images',
                'name' => 'synoptic_gallery_category_images',
                'type' => 'gallery',
            ],
        ],
    ]);
});
