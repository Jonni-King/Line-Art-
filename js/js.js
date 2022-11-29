// (function ($) {
//   $(function () {
//     $("form-select,select").styler();
//   });
// })(jQuery);


$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        appendArrows:$('.btn'),
        rows:3,
        touchThreshold:7,
        touchMove:true,
        variableWidth:true,
        centerMode:true,
        slidesToshow:5,
        slidesToScroll:15,
        adaptiveHeight: true,
        speed:500,
        responsive:[
          {
            breakpoint:450,
            settings: {
              slidesToshow:1
            }
          }
        ],
        responsive:[
          {
            breakpoint:1100,
            settings: {
              dots:true
            }
          }
        ]
    });

    let slickSlide = document.querySelectorAll('.slick-slide')
    slickSlide.forEach((el, index) => {

      if (index <= 5) {
        el.classList.add('nav_photo')
      } else if (index <= 10) {
        el.classList.add('nav_diz')
      } else if (index <= 15) {
        el.classList.add('nav_rel')
      } else if (index <= 18) {
        el.classList.add('nav_video')
      } else {
        el.classList.add('nav_top-20')
      }

      
    })


    $(".nav li button").on('click', function(){
      let filter = $(this).data('filter');
      $(".slider").slick('slickUnfilter');
      
      if (filter == 'nav_photo') {
        $(".slider").slick('slickFilter','.nav_photo');
      }
      else if(filter == 'nav_diz'){
        $(".slider").slick('slickFilter','.nav_diz');
      }
      else if(filter == 'nav_rel'){
        $(".slider").slick('slickFilter','.nav_rel');
      }
      else if(filter == 'nav_video'){
        $(".slider").slick('slickFilter','.nav_video');
      }
      else if(filter == 'nav_top-20'){
        $(".slider").slick('slickFilter','.nav_top-20');
      }
      else if(filter == 'all'){
        $(".slider").slick('slickUnfilter');
      }

    })
});



  $('.nav-btn-img').on('click', function (){
    $('.header__top ul').slideToggle();
  });





