<?php
$banner_image = get_field('synoptic_banner_image');
$banner_title = get_the_title();
?>

<div class="site-banner" <?= $banner_image ? "style='background-image: url(" . $banner_image['sizes']['site_banner'] . ")'" : "" ?>>
    <div class="page-wrap">
        <div class="text-box --small">
            <h2 class="title"><?= $banner_title ?></h2>
        </div>
    </div>
</div>