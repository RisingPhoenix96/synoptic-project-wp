<?php
// Fetch the list of available categories
$gallery_categories = get_posts([
    'post_type' => 'gallery_category',
    'orderby' => 'title',
    'order' => 'ASC',
    'posts_per_page' => -1,
]);
?>

<div class="sidebar">
    <h4>Categories</h4>
    <ul>
        <!-- Display the list of categories here -->
        <?php foreach ($gallery_categories as $category) : ?>
            <li><a href="<?= get_the_permalink($category->ID) ?>" class="<?= is_single($category->ID) ? 'catalogue_sidebar_active' : '' ?>"><?= $category->post_title ?></a></li>
        <?php endforeach; ?>
    </ul>
</div>