<?php
$home_gallery = get_field('synoptic_home_content_images');
?>

<?php if ($home_gallery) : ?>
    <div class="home-image-gallery --hidden">
        <?php foreach ($home_gallery as $image) : ?>
            <div class="slide" style="background-image: url(<?= $image['url'] ?>)"></div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>