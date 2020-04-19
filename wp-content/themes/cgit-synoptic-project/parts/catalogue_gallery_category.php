<?php
// Fetch the current catalogue page's images
$catalogue_gallery = get_field('synoptic_catalogue_gallery_images');
$catalogue_gallery_images = get_field('synoptic_gallery_category_images');
?>

<?php if ($catalogue_gallery_images) : ?>
    <!-- If the category has images then display the images -->
    <?php foreach ($catalogue_gallery_images as $catalogue_image) : ?>
        <a class="gallery-popup-image" data-lightbox="gallery" href="<?= $catalogue_image['url'] ?>">
            <!-- Display the preview image using a custom image size -->
            <img src="<?= $catalogue_image['sizes']['photo_catalogue_preview'] ?>" alt="<?= $catalogue_image['alt'] ?>">
        </a>
    <?php endforeach; ?>
<?php endif; ?>