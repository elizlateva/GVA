jQuery(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('nav.menu ul').slideToggle();
        e.preventDefault();
    });

});

$(document).ready(function() {
    $("button.btn").click(function() {
        $(".select-lang ul").slideToggle();
    })
});


$(document).ready(function() {
    if ($(window).width() < 768) {
        $('nav.menu').css({ "background": "#333" });
    } else {}
});

$(function() {

    $.scrollify({
        section: "section",
        sectionName: false,
        interstitialSection: "header,footer",
        before: function(i, sections) {
            if (i < 2) {
                $("header").css({ "background": "rgba(0,0,0,0.55)" });
            } else {
                $("header").css({ "background": "#333" });
                $.scrollify.setOptions({ offset: -126 })
            }
        }
    });
});