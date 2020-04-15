<div class="image">
    <?php if (has_post_thumbnail()) : ?>
        <?= get_the_post_thumbnail(null, 'rich_text_featured_image') ?>
    <?php else : ?>
        <img src="<?= IMAGE_URL . '/post_default.png' ?>" alt="">
    <?php endif; ?>
</div>
<div class="text">
    <?php
    if (have_posts()) {
        while (have_posts()) {
            the_post();
            the_content();
        }
    }
    ?>
</div>