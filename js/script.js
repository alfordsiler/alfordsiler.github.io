$(document).ready(function(){

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

});
