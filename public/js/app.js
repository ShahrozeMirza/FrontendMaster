$(document).ready(function () {

    //BANNER SLIDER

    $('.banner-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: 1000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']

    });


    // CASE STUDY SLIDER

    $('.case-study-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: 1000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']

    });


    //RECENT WORK GALLERY AND FILTERS    
    $('.grid').isotope();
    $('.filter-list-menu button').on('click', function () {
        $value = $(this).attr('data-name');
        console.log($value);
        $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            filter: $value
        });

    });

    $('.venobox').venobox({
        // settings here
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.form-right form#contact-form').materializeInputs();

    //Smooth Scroll Code Start
    
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top 
                    }, 1200, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    //Smooth Scroll Code End

    //Add active Class on selected Button

    $(".navbar a").on("click",function(){
        $("a").removeClass("active");
        $(this).addClass("active");
    })

    //Fix Menu Bar On Top
    
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 0){
            $(".menu-wrapper").addClass("fixed-top");
            $("header").css("padding-top","106px");
            $(".bg-fixed-menu").css("height","100%");
        }
        else{
            $(".menu-wrapper").removeClass("fixed-top");
            $("header").css("padding-top","0px");
            
        }
        if($(window).scrollTop() < 150){
            $(".bg-fixed-menu").css("height","0");
        }
    })

});

