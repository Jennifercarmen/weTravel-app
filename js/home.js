$('.button-collapse').sideNav();
// llamamos al chat
var $messages = $('#messages');
var $post = $('#post');
$messages.on('click', function () {
  window.location.href = 'chat.html';
});
$post.on('click', function () {
  window.location.href = 'post.html';
});

$(document).ready(function () {
  var validatePost = false;

  $('#writepost').on('input', function () {
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
var $foto = $('#foto');
$foto.on('click', function () {
  window.location.href = 'fotos.html';
});
var $notificacion = $('#notification');
$notificacion.on('click', function () {
  window.location.href = 'viajes.html';
});

var $publication = $('#publication');
$publication.on('click', function () {
  window.location.href = 'desktop.html';
});

