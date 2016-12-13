$(document).ready(function(){

  $(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
  });

  $(document).on('scroll',function(){
    if (($(document).scrollTop()>=$('#about').offset().top-30 && $(document).scrollTop()<$('#skills').offset().top-30) ||
       ($(document).scrollTop()>=$('#skillsCubes').offset().top-30 && $(document).scrollTop()<$('#portfolio').offset().top-30) ||
       ($(document).scrollTop()>=$('#projects').offset().top-30 && $(document).scrollTop()<$('#contact').offset().top-30)) {
      $('.icon-white').removeClass('icon-white').addClass('icon-black');
    }
    else {
      $('.icon-black').removeClass('icon-black').addClass('icon-white');
    }
  });

  $('.icon').hover(function(){
    $(this).siblings('.navTitle').show('slide', {direction: 'left'}, 50);
  }, function () {
    $(this).siblings('.navTitle').hide('slide', { direction: 'left'}, 50);
  });

  $(document).on('scroll',function(){
    if ($(document).scrollTop()>=$('#home').offset().top-30 && $(document).scrollTop()<$('#about').offset().top-30) {
      $('.glyphicon-home').addClass('pulse');
    }
    else {
      $('.glyphicon-home').removeClass('pulse');
    }
  });

  $(document).on('scroll',function(){
    if ($(document).scrollTop()>=$('#about').offset().top-30 && $(document).scrollTop()<$('#skills').offset().top-30) {
      $('.glyphicon-user').addClass('pulse');
    }
    else {
      $('.glyphicon-user').removeClass('pulse');
    }
  });

  $(document).on('scroll',function(){
    if ($(document).scrollTop()>=$('#skills').offset().top-30 && $(document).scrollTop()<$('#portfolio').offset().top-30) {
      $('.glyphicon-wrench').addClass('pulse');
    }
    else {
      $('.glyphicon-wrench').removeClass('pulse');
    }
  });

  $(document).on('scroll',function(){
    if ($(document).scrollTop()>=$('#portfolio').offset().top-30 && $(document).scrollTop()<$('#contact').offset().top-30) {
      $('.glyphicon-briefcase').addClass('pulse');
    }
    else {
      $('.glyphicon-briefcase').removeClass('pulse');
    }
  });

  $(document).on('scroll',function(){
    if ($(document).scrollTop()>=$('#contact').offset().top-30) {
      $('.glyphicon-envelope').addClass('pulse');
    }
    else {
      $('.glyphicon-envelope').removeClass('pulse');
    }
  });

  $('.darken').hover(function(){
    $(this).children('.project-info').removeClass('displayNone').addClass('display');
  }, function() {
    $(this).children('.project-info').removeClass('display').addClass('displayNone');
  });

  $('.project-info').hover(function(){
    $(this).siblings('.screenshot').addClass('opacity');
  }, function() {
    $(this).siblings('.screenshot').removeClass('opacity');
  });

});
