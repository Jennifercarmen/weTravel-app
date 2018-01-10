$('.modal').modal();
var $imageUser = $('#img-user');
var $nameUser = $('#name-user');

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    console.log(displayName);
    console.log(email);
    console.log(emailVerified);
    console.log(photoURL);
    console.log(isAnonymous);
    console.log(providerData);
    $imageUser.attr('src', photoURL);
    $nameUser.text(displayName);
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

$('.button-collapse').sideNav();

var $message = $('#message');
$message.on('click', function() {
  window.location.href = 'chat.html';
});
var $foto = $('#foto');
$foto.on('click', function() {
  window.location.href = 'fotos.html';
});
var $viaje= $('#viaje');
$viaje.on('click', function() {
  window.location.href = 'viajes.html';
});