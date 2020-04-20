<?php

// Use the Monolith class' truncateWords method as a new function called "mono_truncate_words"
use function Cgit\Monolith\Core\truncateWords as mono_truncate_words;

?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : ?>

        <?php
        /**
         * Use the WordPress loop to display content
         * the_post() keeps track of the current post in the loop
         */
        the_post();

        /**
         * Get the current post's content using get_post_field('post_content')
         * Get the URL of the current post's featured image using get_the_post_thumbnail_url()
         */
        $post_content = get_post_field('post_content');
        $post_thumnbnail_url = get_the_post_thumbnail_url();
        ?>

        <a class="post" href="<?= get_the_permalink() ?>">
            <div class="content-wrap">
                <div class="post-thumbnail">

                    <?php if (has_post_thumbnail()) : ?>
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
    <?php endwhile; ?>
<?php endif; ?>