<?php

/** Template Name: Blog Archive Page */

get_header();

?>

<div class="blog-content">
    <div class="page-wrap">
        <div class="flex-wrap">

            <?php get_template_part('parts/blog_post_list'); ?>

            <?php get_template_part('parts/sidebar'); ?>

        </div>
    </div>
</div>