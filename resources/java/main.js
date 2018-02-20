$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    slidesToSroll: 1,
    arrows: false,
    autoplaySpeed: 4000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
    var lastScrollTop = 0;
    $(window).scroll(function(){
      var scrollTop = $(this).scrollTop();
      if (scrollTop - lastScrollTop > 50){
        var navHeight = $('.navbar').css('height');
        $('.navbar').animate({top: '-' + navHeight}, 150);
        lastScrollTop = scrollTop;
      } else if (lastScrollTop - scrollTop > 50) {
        $('.navbar').animate({top: '0px'}, 150);
        lastScrollTop = scrollTop;
      };
  });
});

// Acc code
//   var lastScrollTop = 0;
//   $(window).scroll(function(){
//     var scrollTop = $(this).scrollTop();
//     if (scrollTop - lastScrollTop > 50){
//       var navHeight = $('.navbar').css('height');
//       $('.navbar').animate({top: '-' + navHeight}, 150);
//       lastScrollTop = scrollTop;
//     } else if (lastScrollTop - scrollTop > 50) {
//       $('.navbar').animate({top: '0px'}, 150);
//       lastScrollTop = scrollTop;
//     }

// my code
// var scrollX = 0;
// $(window).scroll(function(){
//   var scrollTop = $(this).scrollTop();
//   if (scrollTop - scrollX > 50){
//     var navHeight = $('.navbar').css('height');
//     $('navbar').animate({top: '-' + navHeight}, 150);
//     scrollX = scrollTop;
//   } else if (scrollX - scrollTop > 50) {
//     $('.navbar').animate({top: '0px'}, 150);
//     scrollX = scrollTop;
//   }
