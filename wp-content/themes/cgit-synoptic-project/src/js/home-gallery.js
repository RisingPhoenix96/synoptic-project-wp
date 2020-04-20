/**
 * Creates the homepage background image slider
 * Requires tiny-slider npm library
 * https://www.npmjs.com/package/tiny-slider
 */
$(function () {
    $('.home-image-gallery').removeClass('--hidden');

    var homeGallery = tns({
        container: '.home-image-gallery',
        mode: 'gallery',
        items: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 7000,
        speed: 2500,
        loop: true,
        nav: false,
        mouseDrag: false,
        arrowKeys: false,
        touch: false,
        controls: false,
    });
});