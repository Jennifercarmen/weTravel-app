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
$('.button-collapse').sideNav();

