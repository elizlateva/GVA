jQuery(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('.menu ul').slideToggle();
        e.preventDefault();
    });
});

$(function() {

    $.scrollify({
        section: "section",
        sectionName: false,
        interstitialSection: "nav,footer",
        before: function(i, sections) {
            if (i < 2) {
                $("nav").css({ "background": "rgba(0,0,0,0.55)" });
            } else {
                $("nav").css({ "background": "#333" });
                $.scrollify.setOptions({ offset: -126 })
            }
        }
    });
});