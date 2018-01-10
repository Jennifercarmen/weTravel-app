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

$(document).ready(function() {
  var validatePost = false;

  $('#message').on('input', function() {
    if ($(this).val()) {
      validatePost = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  function activeButton() {
    if (validatePost) {
      $('#btnEnviar').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('#btnEnviar').attr('disabled', 'disabled');
  }
}); 

