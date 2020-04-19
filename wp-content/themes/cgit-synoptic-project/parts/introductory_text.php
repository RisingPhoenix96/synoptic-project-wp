<?php
// Fetch content from the page's introductory content fields
$intro_text_title = get_field('synoptic_introductory_text_title');
$intro_text_text = get_field('synoptic_introductory_text_text');
?>

<?php if ($intro_text_title || $intro_text_text) : ?>
    <!-- If introductory content exists on this page then display it -->
    <div class="introductory-text">
        <div class="page-wrap  --small-wrap">
            <h3 class="title"><?= $intro_text_title ?></h3>
            <p class="text"><?= $intro_text_text ?></p>
        </div>
    </div>
<?php endif; ?>