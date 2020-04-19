<div class="image">
    <?php if (has_post_thumbnail()) : ?>
        <!-- Display the post's featured image -->
        <?= get_the_post_thumbnail(null, 'rich_text_featured_image') ?>
    <?php else : ?>
        <!-- Display the theme's default featured image if no specific image is set -->
        <img src="<?= IMAGE_URL . '/post_default.png' ?>" alt="">
    <?php endif; ?>
</div>
<div class="text">
    <?php
    // If the page or post has content then display the content
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            the_content();
        }
    }
    ?>
</div>