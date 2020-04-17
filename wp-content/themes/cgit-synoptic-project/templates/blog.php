<?php

/** Template Name: Blog Archive Page */

get_header();

get_template_part('parts/site_banner');

?>

<div class="blog-content">
    <div class="page-wrap">
        <div class="flex-wrap">
            <div class="posts-list">
                <div class="posts-wrap">

                    <?php get_template_part('parts/blog_post_list'); ?>

                </div>
            </div>

            <?php get_template_part('parts/sidebar'); ?>

        </div>
    </div>
</div>

<?php get_footer() ?>