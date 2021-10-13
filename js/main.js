$(document).ready(function(){
  $(".home-content").animate({
    "left": "6%"
  },900)
  $(".home-img").animate({
    "right": "0%"
  },900)

  $(window).scroll(function(){
    if($(this).scrollTop() > 1200){
      $(".booking-left").css("transform", "translateX(0%)");
      $(".booking-right").css("transform", "translateX(0%)");
    } else{
      $(".booking-left").css("transform", "translateX(-150%)");
      $(".booking-right").css("transform", "translateX(150%)");
    }
  })

  $(window).scroll(function(){
    if($(this).scrollTop() > 3650){
      $(".single-blog-left").css("transform", "translateX(0%)");
      $(".single-blog-right").css("transform", "translateX(0%)");
    } else{
      $(".single-blog-left").css("transform", "translateX(-150%)");
      $(".single-blog-right").css("transform", "translateX(150%)");
    }
  })
})