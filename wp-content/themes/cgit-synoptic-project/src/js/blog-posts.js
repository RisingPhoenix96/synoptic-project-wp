/**
 * Vertically align blog posts
 * Requires castlegate-align npm library
 * https://www.npmjs.com/package/castlegate-align
 */
$(function () {
    $('.posts-wrap').align({
        selector: '> .post *',
    });
});