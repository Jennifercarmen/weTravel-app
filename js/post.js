// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDz6Bsp6T9TuR7gYIg5i-tTScsbIFeVyYo',
  authDomain: 'laboratoria-2a397.firebaseapp.com',
  databaseURL: 'https://laboratoria-2a397.firebaseio.com',
  projectId: 'laboratoria-2a397',
  storageBucket: 'laboratoria-2a397.appspot.com',
  messagingSenderId: '617399103792'
};
firebase.initializeApp(config);
var $usersconect = $('.users');

// Mustra en pantalla los datos a publicar con los datos almacenados en firebase
firebase.database().ref('connected').on('value', function(snapshot) {
  var html = '';
  snapshot.forEach(function(e) {
    var element = e.val();
    var name = element.name;
    var email = element.email;
    html += '<li>' +
      '<img src="../assets/images/active.png" class="responsive-image" alt="active" width="10px">' +
      ' ' + name + ' </li>';
  });
  $($usersconect).append(html);
});

/* ----------------------Post---------------------------*/
// Creaciòn de variables tomando el cuenta el id de cada elemento
var $txtMensaje = $('#message');
var $btnEnviar = $('#btnEnviar');
var $chatUl = $('#chatUl');

// Funciòn del evento click, para almacenar los datos en firebase
$btnEnviar.on('click', function() {
  var mensaje = $txtMensaje.val();
  var meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
  var f = new Date();
  var fecha = f.getDate() + ' de ' + meses[f.getMonth()] + ' de ' + f.getFullYear();
  var hora = f.getHours() + ':' + f.getMinutes();
  firebase.auth().onAuthStateChanged(function(user) {
    firebase.database().ref('post').push({

      uid: user.uid,
      photoURL: user.photoURL,
      name: user.displayName,
      message: mensaje,
      email: user.email,
      fecha: fecha,
      hora: hora
    });
  });
});

// Mustra en pantalla los datos a publicar con los datos almacenados en firebase
firebase.database().ref('post').on('value', function(snapshot) {
  var html = '';
  snapshot.forEach(function(e) {
    var element = e.val();
    var photoURL = element.photoURL;
    var name = element.name;
    var email = element.email;
    var mensaje = element.message;
    var fecha = element.fecha;
    var hora = element.hora;
    var uid = element.uid;

    html += '<div class="post">' +
      '<div class="tweet-je">' +
      '<div class="row">' +
      '<div class="col s3">' +
      '<img class="responsive-img profile-img" id="img-user" src=' + photoURL + ' alt="">' +
      '</div>' +
      '<div class="col s9">' +
      '<br>' + '<div class="deletepost"><i class="material-icons delete" >delete</i></div>' +
      '<span class="name_user bold">' + name + '</span>' +
      '<br>' +
      '<span class="fecha_post">' +
      fecha + ' - ' + hora +
      '</span>' +
      '</div>' +
      '</div>' +
      '<div class="row">' +
      '<div class="col s12"> ' +
      '<p id="postdesc"> ' +
      mensaje +
      '</p>' +
      '</div>' +
      '</div>' +
      '<div class="row">' +
      '<button class="btn waves-effect waves-light" id=' + hora + uid + ' >Submit' +
      '<i class="material-icons right">send</i>' +
      '</button>          </div>' +
      '<div class="row">' +
      '<div class="col s4"><i class="tiny material-icons icon_post">favorite_border</i></div>' +
      '<div class="col s4"><i class="tiny material-icons icon_post">message</i></div>' +
      '<div class="col s4"><i class="tiny material-icons icon_post">share</i>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>/';
    var $idbtn = hora + uid;
    $('#' + $idbtn).on('click', function() {
      window.location.href = 'chat.html';
    });
  });

  $($chatUl).append(html);
});

$('#camino').on('click', function() {
  window.location.href = 'chat.html';
});
var $messages = $('#messages');

$messages.on('click', function() {
  window.location.href = 'chat.html';
});
/* $('.change_cities').on('click',function() {
  $('.hide').hide();
});*/

// .............Filtros................
// Filtros del input


$(document).ready(function() {
  $('.search').keyup(function() {
    var name = $(this).val().toLowerCase();
    $('.collection').hide();
    $('.collection').each(function() {
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
  firebase.auth().onAuthStateChanged(function(user) {
    firebase.database().ref('/connected/' + user.uid).remove();
    window.location.href = 'main.html';
  });
};
var $logout = $('.logout');
$logout.on('click', signOut);