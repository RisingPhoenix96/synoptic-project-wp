/**
 * Header and nav functionality
 */
$(function () {

    var header = $('.site-header');
    var nav = $('.main-nav');
    var subnavToggle = $('.submenu-toggle');
    var mobileCta = $('.header-mobile-cta');
    var navToggle = $('.nav-toggle');
    var hidden = '--hidden';
    var noJS = '--no-js';

    /**
     * Remove/add classes when JS is enabled
     * Optimize header and nav for use when JS is disabled
     * Good for usability
     */
    header.removeClass(noJS);
    nav.addClass(hidden);
    mobileCta.removeClass(hidden);
    $('.sub-menu').addClass(hidden);

    /** Append subnav toggle button */
    $('.menu-item-has-children').append("<button class='submenu-toggle'></button>");

    /**
     * Nav toggle functionality
     * Works by toggling a CSS class on and off on a "click" event
     */
    navToggle.on('click', function () {

        nav.toggleClass(hidden);

    });

    /**
     * Subnav toggle functionality
     * If a subnav exists, add toggle functionality as main nav above
     */
    $('.submenu-toggle').each(function () {

        $(this).on('click', function () {

            var submenu = $(this).prev('.sub-menu');

            submenu.toggleClass(hidden);

        });

    });

});