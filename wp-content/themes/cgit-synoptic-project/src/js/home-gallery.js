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