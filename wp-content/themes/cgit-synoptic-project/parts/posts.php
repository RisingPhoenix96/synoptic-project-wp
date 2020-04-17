<?php

use function Cgit\Monolith\Core\truncateWords as mono_truncate_words;

?>

<?php if (have_posts()) : ?>
    <?php while (have_posts()) : ?>

        <?php
        the_post();
        $post_content = get_post_field('post_content');
        $post_thumnbnail_url = get_the_post_thumbnail_url();
        ?>

        <a class="post" href="<?= get_the_permalink() ?>">
            <div class="content-wrap">
                <div class="post-thumbnail">

                    <?php if (has_post_thumbnail()) : ?>
                        <img src="<?= $post_thumnbnail_url ?>" alt="">
                    <?php else : ?>
                        <img src="<?= IMAGE_URL . '/blog_post_preview_default.png' ?>" alt="">
                    <?php endif; ?>

                </div>

                <p class="post-excerpt"><?= mono_truncate_words($post_content, 30) ?></p>
                <p class="read-more-link">Read more</p>
            </div>
        </a>
    <?php endwhile; ?>
<?php endif; ?>