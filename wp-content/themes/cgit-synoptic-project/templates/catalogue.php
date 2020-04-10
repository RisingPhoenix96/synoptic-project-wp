<?php

/** Template Name: Photo Archive Page */

get_header();

get_template_part('parts/introductory_text');

?>

<div class="portfolio-page-content">
    <div class="page-wrap">
        <div class="main-wrap">

            <?php get_template_part('parts/catalogue_gallery'); ?>

            <?php get_template_part('parts/sidebar'); ?>

        </div>
    </div>
</div>