$('.button-collapse').sideNav();
// llamamos al chat
var $message = $('#message');
var $post = $('#post');
$message.on('click', function() {
  window.location.href = 'chat.html';
});
$post.on('click', function() {
  window.location.href = 'post.html';
});

