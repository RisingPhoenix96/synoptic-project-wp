<?php

// Use the Monolith class' truncateWords method as a new function called "mono_truncate_words"
use function Cgit\Monolith\Core\truncateWords as mono_truncate_words;

/**
 * Fetch all blog posts using using get_posts()
 * Function arguments are stored in the $args array
 */
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
        /**
         * Get the current post's content using get_post_field('post_content')
         * Get the URL of the current post's featured image using get_the_post_thumbnail_url()
         */
        $post_content = get_post_field('post_content', $post->ID);
        $post_thumnbnail_url = get_the_post_thumbnail_url($post->ID);
        ?>

        <a class="post" href="<?= get_the_permalink($post->ID) ?>">
            <div class="content-wrap">
                <div class="post-thumbnail">

                    <?php if (has_post_thumbnail($post->ID)) : ?>
                        <!-- If the post has a featured image then display it -->
                        <img src="<?= $post_thumnbnail_url ?>" alt="">

                    <?php else : ?>
                        <!-- If the post does not have a featured image then display the theme's default featured image -->
                        <img src="<?= IMAGE_URL . '/blog_post_preview_default.png' ?>" alt="">

                    <?php endif; ?>

                </div>

                <!-- Display the post's custom excerpt -->
                <p class="post-excerpt"><?= mono_truncate_words($post_content, 30) ?></p>
                <p class="read-more-link">Read more</p>
            </div>
        </a>
    <?php endforeach; ?>
<?php endif; ?>