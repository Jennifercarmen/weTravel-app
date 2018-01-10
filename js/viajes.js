$(document).ready(function() {
  $('.collapsible').collapsible();
});
     
var $foto = $('#foto');
$foto.on('click', function() {
  window.location.href = 'fotos.html';
});
var $notificacion = $('#notification');
$notificacion.on('click', function() {
  window.location.href = 'viajes.html';
});

var $publication = $('#publication');
$publication.on('click', function() {
  window.location.href = 'home.html';
});
 var $viajes = $('#viajes');
 $viajes.on('click', function() {
  window.location.href = 'viajes.html';
});
var $message = $('#message');
$message.on('click', function() {
 window.location.href = 'chat.html';
});