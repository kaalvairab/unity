$(document).ready(function(){


    // CAROUSELS

    // SERVICS IMG
    $('.services .carousel-img').slick({
        
        prevArrow: '<button type="button" class="slick-prev"><i class="fi-xtllxl-arrow-simple-thin"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fi-xtlrxl-arrow-simple-thin"></i></button>',
     
    });


    // SERVICES TXT
    $('.services .carousel-txt').slick({
        arrows:false,
        dots: true,
          customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i++]).data();
    return '<a class="dot">'+i+'</a>';
            },
    });

    // Vertical SLIDER
    $('.v-carousel .v-slider').slick({

        arrows:true,
        nextArrow:'<button type="button" class="slick-prev"><i class="fi-xtldxl-arrow-simple-thin"></i></button',
        prevArrow:'<button type="button" class="slick-next"><i class="fi-xtluxl-arrow-simple-thin"></i></button',
        vertical:true,
        dots: true,
        customPaging : function(slider, i) {
                        var thumb = $(slider.$slides[i++]).data();
                        return '<a class="dot">' +'0'+i+'</a>';
                                },
    });


    // ISOTOP FILTERING
   
      let $grid = $('.portfolio .grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
      
      });
      
      $('.portfolio .navigation .filter button').on("click", function () {

        
        
        var value = $(this).attr('data-name');
        console.log('value ->', value);
      
        $grid.isotope({
          filter: value,
        })
      
        
        $(this).addClass('active');

        console.log()
        
        $(this).parent().siblings().children().removeClass('active')
     
      
        
       
      
      })


      // TESTIMONIAL SLIDER
      $('.testimonials .testimonial-slider').slick({
         slidesToShow: 1,
                          slidesToScroll: 1,
                          infinite: true,
                          dots: false,
                          arrows: false,
                          speed: 1,
                          touchMove: true,
                          fade:true,
                          responsive: [{
                              breakpoint: 769,
                              settings: {
                                  arrows: false,
                                  dots: false,
                                  touchMove: true
                              }
                          }]
        
        });

        $(document).on("click",".testimonials .testimonial-slider-nav img",function(){
        
          var di = $(this).data("index");
          $( '.testimonials .testimonial-slider' ).slick('slickGoTo', di);

          $(this).parent().siblings().children().removeClass('active')
          $(this).addClass('active')



});   
    


      

  });