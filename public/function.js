$(document).ready(function() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    setInterval(rotate, 4000);

    function rotate() {
        $('.logo i').addClass('rotate').delay(1000).queue(function(next) {
            $(this).removeClass('rotate');
            next();
        })
    }

    $(window).scroll(function() {
        var top = $('body').scrollTop();
        console.log(top);
        console.log(width);
        if (width > 1380) {
            console.log('desktop');
            if (top > 1320) {
                $(document).ready(function() {
                    $('.skillbar').each(function() {
                        $(this).find('.skillbar-bar').animate({
                            width: $(this).attr('data-percent')
                        }, 6000);
                    });
                });
            }
            if (top > 1900) {
                $('#first').fadeIn();
                $('#first').addClass('slideInLeft');
            }
            if (top > 2350) {
                $('#second').fadeIn();
                $('#second').addClass('slideInRight');
            }
            if (top > 2700) {
                $('#three').fadeIn();
                $('#three').addClass('slideInLeft');
            }
        }
        // laptop
        if (width > 1000) {
            console.log('laptop');
            if (top > 1320) {
                $(document).ready(function() {
                    $('.skillbar').each(function() {
                        $(this).find('.skillbar-bar').animate({
                            width: $(this).attr('data-percent')
                        }, 6000);
                    });
                });
            }
            if (top > 2000) {
                $('#first').fadeIn();
                $('#first').addClass('slideInLeft');
            }
            if (top > 2350) {
                $('#second').fadeIn();
                $('#second').addClass('slideInRight');
            }
            if (top > 2700) {
                $('#three').fadeIn();
                $('#three').addClass('slideInLeft');
            }
        }
        // mobile
        if (width < 600) {
            console.log('Mobile');
            if (top > 2700) {
                $(document).ready(function() {
                    $('.skillbar').each(function() {
                        $(this).find('.skillbar-bar').animate({
                            width: $(this).attr('data-percent')
                        }, 6000);
                    });
                });
            }
            if (top > 3150) {
                $('#first').fadeIn();
                $('#first').addClass('slideInLeft');
            }
            if (top > 3350) {
                $('#second').fadeIn();
                $('#second').addClass('slideInRight');
            }
            if (top > 3500) {
                $('#three').fadeIn();
                $('#three').addClass('slideInLeft');
            }
        }

    })


    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})