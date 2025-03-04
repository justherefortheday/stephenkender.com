$(document).ready(function () {
    // Smooth scrolling for links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Scroll to top functionality
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });

    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});
