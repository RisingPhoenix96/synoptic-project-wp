<?php
$banner_image = get_field('synoptic_banner_image');
$banner_title = get_the_title();
?>

<div class="site-banner" <?= $banner_image ? "style='background-image: url(" . $banner_image['sizes']['site_banner'] . ")'" : "" ?>>
    <div class="page-wrap">
        <div class="text-box --small">

            <?php if (is_category()) : ?>
                <!-- If the current page is a category page then display the category title -->
                <h2 class="title"><?= get_the_category()[0]->name ?></h2>

            <?php elseif (is_single()) : ?>
                <!-- If the current page is a single post page then display the post's title -->
                <h2 class="title"><?= get_the_title() ?></h2>

            <?php else : ?>
                <!-- If the current page is any other page that has a set banner title then display the title -->
                <h2 class="title"><?= $banner_title ?></h2>

            <?php endif; ?>

        </div>
    </div>
</div>