jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').slideToggle();
        e.preventDefault();
    });
});

$(function() {
    // $("section").css({
    //     "height": $("section").height()
    // });
    $.scrollify({
        section: "section",
        sectionName: false,
        interstitialSection: "nav,footer",
        offset: -126
    });
});