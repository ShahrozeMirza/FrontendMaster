$(document).ready(function(){

    //BANNER SLIDER
    
    $('.banner-slider.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: 1000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
        
    });


    // CASE STUDY SLIDER

    $('.case-study-slider.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay: 1000,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
        
    });


    //RECENT WORK GALLERY AND FILTERS    
        $('.grid').isotope();
        $('.filter-list-menu button').on('click',function(){
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
    });
    
    