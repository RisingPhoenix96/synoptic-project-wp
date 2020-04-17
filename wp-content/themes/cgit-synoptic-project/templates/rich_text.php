<?php

/** Template Name: Rich Text Page */

get_header();

get_template_part('parts/site_banner');

?>

<div class="about-me-page-content">
    <div class="page-wrap">
        <div class="content">
            <?php get_template_part('parts/rich_text_content') ?>
        </div>
    </div>
</div>

<?php get_footer() ?>