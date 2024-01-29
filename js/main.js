var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween:0,
    centeredSlides:true,
     spaceBetween:30,
     autoplay:{
      delay:2000,
      disableOnInteraction:false
     },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView: 1
      },
      600:{
        slidesPerView: 3
      },
      1000:{
        slidesPerView: 5
      }
    }
  });
//owlCarousel
  $(document).ready(function(){
    $("#owl-demo1").owlCarousel({
      items:5,
      loop:true,
      autoplay:true,
      margin:30,
      autoplayTimeout:2000,
      animateIn:true,
      responsive:{
        0:{
          items:2
        },
        600:{
          items:3
        },
        1000:{
          items:5
        }
      }
    });
  });
  $(document).ready(function(){
    $("#owl-demo2").owlCarousel({
      items:3,
      loop:true,
      autoplay:true,
      margin:30,
      autoplayTimeout:3500,
      animateIn:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });
  });

  $(document).ready(function(){
    $("#owl-demo3").owlCarousel({
      items:6,
      loop:true,
      autoplay:true,
      margin:30,
      autoplayTimeout:3000,
      animateIn:true,
      rtl:true,
      responsive:{
        0:{
          items:3
        },
        600:{
          items:4
        },
        1000:{
          items:6
        }
      }
    });
  });

//counter
let nums = document.querySelectorAll('.num');
 
function counter(el) {
  let goal = el.dataset.goal;
  let count =setInterval(() => {
    el.textContent++;
    if(el.textContent == goal){
      clearInterval(count)
    }
  }, 5000/goal);
}
nums.forEach((num=>counter(num)));
//arrow when scroll
let startOfevents = $('.main-slider').offset().top;


$(window).scroll(function(){

if ($(window).scrollTop() > startOfevents) {
  $('.arrowTop').fadeIn(1000).css('display','flex')
} else {
  $('.arrowTop').fadeOut(1000)
}
})

$('.arrowTop').click(function(){
  $('html,body').animate({scrollTop:0},1000)
})


