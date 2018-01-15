$('.modal').modal();
// Creaciòn de variables tomando el cuenta el id de cada elemento

var $usersconect = $('.users');
var $boxPost=$('#boxPost');
var $inputpost = $('#messagepost');
var fichero = $('#fichero');

// Abrir modal al dar click en textarea
$inputpost.on('click', function () {
  $('#modalpost').modal('open');
});
// cargar imagen en div
fichero.on('change', function (ev) {
  var file = ev.target.files[0];
  var fr = new FileReader();
  fr.onload = function (ev2) {
    $('#imagepost').attr('src', ev2.target.result);
  };
  fr.readAsDataURL(file);
});
// Mustra en pantalla los datos a publicar con los datos almacenados en firebase
firebase.database().ref('connected').on('value', function (snapshot) {
  var html = '';
  snapshot.forEach(function (e) {
    var element = e.val();
    var name = element.name;
    var email = element.email;
    html += '<li>' +
      '<img src="../assets/images/active.png" class="responsive-img" alt="active" width="10px">' +
      ' ' + name + ' </li>';
  });
  $($usersconect).append(html);
});


var $messages = $('#messages');


$messages.on('click', function () {
  window.location.href = 'chat.html';
});


// .............Filtros................
// Filtros del input


$(document).ready(function () {
  $('.search').keyup(function () {
    var name = $(this).val().toLowerCase();
    $('.collection').hide();
    $('.collection').each(function () {
      var search = $(this).text();
      if (search.indexOf(name) !== -1) {
        $(this).show();
      }
    });
  });
});


// filtro por nombre

// .............Fin Filtros................

function signOut() {
  firebase.auth().onAuthStateChanged(function (user) {
    firebase.database().ref('/connected/' + user.uid).remove();
    window.location.href = 'main.html';
  });
};
var $logout = $('.logout');
$logout.on('click', signOut);

// ---------------------Enlaces------------------
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
  window.location.href = 'home.html';
});
var $viajes = $('#viajes');
$viajes.on('click', function () {
  window.location.href = 'viajes.html';
});
$messages.on('click', function () {
  window.location.href = 'chat.html';
});
