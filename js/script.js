$(document).ready(function(){

  $(document).on('scroll',function(){
    if (($(document).scrollTop()>=$('#about').offset().top-30 && $(document).scrollTop()<$('#portfolio').offset().top-30) ||
       ($(document).scrollTop()>=$('#projects').offset().top-30 && $(document).scrollTop()<$('#contact').offset().top-30)){
      $('.icon-white').removeClass('icon-white').addClass('icon-black');
    }
    else {
      $('.icon-black').removeClass('icon-black').addClass('icon-white');
    }
  });

  $('.icon').hover(function(){
    $('.navTitle').show('slide', {direction: 'left'}, 50);
  }, function () {
    $('.navTitle').hide('slide', { direction: 'left'}, 50);
  });

  $('.icon1').hover(function(){
    $('.navTitle1').show('slide', {direction: 'left'}, 50);
  }, function () {
    $('.navTitle1').hide('slide', { direction: 'left'}, 50);
  });

  $('.icon2').hover(function(){
    $('.navTitle2').show('slide', {direction: 'left'}, 50);
  }, function () {
    $('.navTitle2').hide('slide', {direction: 'left'}, 50);
  });

  $('.icon3').hover(function(){
    $('.navTitle3').show('slide', {direction: 'left'}, 50);
  }, function () {
    $('.navTitle3').hide('slide', {direction: 'left'}, 50);
  });

  $('.icon4').hover(function(){
    $('.navTitle4').show('slide', {direction: 'left'}, 50);
  }, function () {
    $('.navTitle4').hide('slide', {direction: 'left'}, 50);
  });

  $(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
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
