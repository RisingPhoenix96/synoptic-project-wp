<?php
add_action('acf/init', function () {
    $location = [
        [
            [
                'param' => 'page_type',
                'operator' => '==',
                'value' => 'default',
            ],
        ],
        [
            [
                'param' => 'page_type',
                'operator' => '==',
                'value' => 'post',
            ],
        ],
        [
            [
                'param' => 'page_template',
                'operator' => '==',
                'value' => 'templates/catalogue.php',
            ],
        ],
        [
            [
                'param' => 'page_template',
                'operator' => '==',
                'value' => 'templates/rich_text.php',
            ],
        ],
        [
            [
                'param' => 'page_template',
                'operator' => '==',
                'value' => 'templates/contact.php',
            ],
        ],
        [
            [
                'param' => 'page_template',
                'operator' => '!==',
                'value' => 'templates/home.php',
            ],
        ],
    ];

    acf_add_local_field_group([
        'key' => 'synoptic_banner',
        'title' => 'Banner',
        'location' => $location,
        'menu_order' => 10,
        'hide_on_screen' => [
            'the_excerpt',
        ],
        'fields' => [
            [
                'key' => 'synoptic_banner_image',
                'label' => 'Banner Image',
                'name' => 'synoptic_banner_image',
                'type' => 'image',
                'min_width' => 1920,
                'min_height' => 274,
            ],
        ],
    ]);
});
