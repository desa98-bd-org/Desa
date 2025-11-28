$(document).ready(function () {
    $('.page_slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:3000,
    rewind:true,
    mouseDrag:false,
    smartSpeed:450,
    nav:true,
    dots:false,
    navText:[' ',' '],
    animateOut: 'fadeOut',
    items:1,
});

});

$(document).ready(function () {
    $('.owl-actiiviteis').owlCarousel({
    loop:true,
    autoplay:true,
    autoplaySpeed:3000,
    dots:false,
    items:3,
        responsive: {
            0: {
                items: 1
            },
            479: {
                items: 1
            },
            768: {
                items: 2
            },
            979: {
                items: 3
            },
            1199: {
                items: 3
            }
        },
});

});


$(document).ready(function() {
        //change the integers below to match the height of your upper dive, which I called
        //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
        //to figure out what the scroll position is when exactly you want to fix the nav
        //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
        //you know the position.
        $(window).scroll(function () { 

          console.log($(window).scrollTop());
          //
          if ($(window).scrollTop() > 10) {
            $('.header-top-style-2').addClass('sticky_nav');
          }

          if ($(window).scrollTop() < 10) {
            $('.header-top-style-2').removeClass('sticky_nav');
          }
          //
          //
        });
      });
