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
        [
            [
                'param' => 'page_template',
                'operator' => '==',
                'value' => 'templates/contact.php',
            ],
        ]
    ];

    acf_add_local_field_group([
        'key' => 'synoptic_introductory_text',
        'title' => 'Introductory Text',
        'location' => $location,
        'menu_order' => 10,
        'hide_on_screen' => [
            'the_content',
            'the_excerpt',
        ],
        'fields' => [
            [
                'key' => 'synoptic_introductory_text__title',
                'label' => 'Title',
                'name' => 'synoptic_introductory_text_title',
                'type' => 'text',
            ],
            [
                'key' => 'synoptic_introductory_text__text',
                'label' => 'Text',
                'name' => 'synoptic_introductory_text_text',
                'type' => 'textarea',
            ],
        ],
    ]);
});
