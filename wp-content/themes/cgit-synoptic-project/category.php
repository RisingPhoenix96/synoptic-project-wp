<?php

get_header();

get_template_part('parts/site_banner');

?>

<div class="blog-content">
    <div class="page-wrap">
        <div class="flex-wrap">
            <div class="posts-list">
                <div class="posts-wrap">

                    <?php get_template_part('parts/posts'); ?>

                </div>
            </div>

            <?php dynamic_sidebar('Blog Archive Sidebar'); ?>

        </div>
    </div>
</div>

<?php get_footer() ?>