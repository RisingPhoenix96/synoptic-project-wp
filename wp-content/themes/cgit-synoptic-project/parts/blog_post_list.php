<?php

use function Cgit\Monolith\Core\truncateWords as mono_truncate_words;

$args = [
    'post_type' => 'post',
    'post_status' => 'publish',
    'orderby' => 'date',
    'order' => 'DESC'
];

$posts = get_posts($args);
?>

<?php if ($posts) : ?>
    <?php foreach ($posts as $post) : ?>

        <?php
        $post_content = get_post_field('post_content', $post->ID);
        $post_thumnbnail_url = get_the_post_thumbnail_url($post->ID);
        ?>

        <a class="post" href="<?= get_the_permalink($post->ID) ?>">
            <div class="content-wrap">
                <div class="post-thumbnail">

                    <?php if (has_post_thumbnail($post->ID)) : ?>
                        <img src="<?= $post_thumnbnail_url ?>" alt="">
                    <?php else : ?>
                        <img src="<?= IMAGE_URL . '/blog_post_preview_default.png' ?>" alt="">
                    <?php endif; ?>

                </div>

                <p class="post-excerpt"><?= mono_truncate_words($post_content, 30) ?></p>
                <p class="read-more-link">Read more</p>
            </div>
        </a>
    <?php endforeach; ?>
<?php endif; ?>