<?php
// Fetch content from the homepage's content fields
$home_content_title = get_field('synoptic_home_content_title');
$home_content_text = get_field('synoptic_home_content_text');
?>

<?php if ($home_content_title || $home_content_text) : ?>
    <!-- If content exists then display it on the page -->
    <div class="homepage-content-gallery-text">
        <h2 class="title"><?= $home_content_title ?: '' ?></h2>
        <p class="text"><?= $home_content_text ?: '' ?></p>
    </div>
<?php endif; ?>