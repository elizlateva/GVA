jQuery(document).ready(function() {
    $('.toggle-nav').click(function(e) {
        $(this).toggleClass('active');
        $('nav.menu ul').slideToggle();
        e.preventDefault();
    });

    $("button.btn").click(function() {
        $(".select-lang ul").slideToggle();
    })

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content.open').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {

        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $(this).next().slideDown(300).addClass('open');
        }
    });

    if ($(window).width() < 768) {
        $('nav.menu').css({ "background": "#333" });
    } else {}

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