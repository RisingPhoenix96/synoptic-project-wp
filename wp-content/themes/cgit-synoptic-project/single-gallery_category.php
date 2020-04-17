<?php

get_header();

get_template_part('parts/site_banner');

get_template_part('parts/introductory_text');

?>

<div class="portfolio-page-content">
    <div class="page-wrap">
        <div class="main-wrap">
            <div class="photo-gallery">
                <div class="image-wrap">

                    <?php get_template_part('parts/catalogue_gallery_category'); ?>

                </div>
            </div>

            <?php get_template_part('parts/sidebar_catalogue'); ?>

        </div>
    </div>
</div>



<?php get_footer() ?>