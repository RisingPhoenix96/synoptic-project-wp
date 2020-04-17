<?php

/** Template Name: Home Page */

get_header();

?>

<div class="homepage-content-gallery">
    <div class="page-wrap">
        <?php get_template_part('/parts/home_content'); ?>
    </div>
    <?php get_template_part('/parts/home_gallery'); ?>
</div>

<?php get_footer() ?>