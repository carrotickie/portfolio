(function() {
  'use strict';

  function scrollNav() {
    $('a[href^="#"]').click(function(){
      //Toggle Class
      $(".active").removeClass("active");
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 51
      }, 200);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }

  $(function() {
    scrollNav();
  });
}());
