<?php
// Fetch all images from the homepage's gallery field
$home_gallery = get_field('synoptic_home_content_images');
?>

<?php if ($home_gallery) : ?>
    <!-- If gallery images exist then display them on the page -->
    <div class="home-image-gallery --hidden">
        <?php foreach ($home_gallery as $image) : ?>
            <div class="slide" style="background-image: url(<?= $image['url'] ?>)"></div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>