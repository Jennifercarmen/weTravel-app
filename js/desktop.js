$(document).ready(function() {
  $('.hidden').hide();
  $('.hidden-oyp').hide();

  $('.hide-show').click(function() {
    $('.hidden').toggle();
  });

  $('.hide-show-oyp').click(function() {
    $('.hidden-oyp').toggle();
  });
});