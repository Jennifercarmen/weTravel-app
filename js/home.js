$('.button-collapse').sideNav();
// llamamos al chat
var $messages = $('#messages');
var $post = $('#post');
$messages.on('click', function() {
  window.location.href = 'chat.html';
});
$post.on('click', function() {
  window.location.href = 'post.html';
});

