
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
var $imageUser = $('#img-user');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var photoURL = user.photoURL;
    $imageUser.attr('src', photoURL);
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

/* ------------------------CHAT------------------------------*/
// Creaciòn de variables tomando el cuenta el id de cada elemento
var $txtNombre = $('#nombre');
var $txtMensaje = $('#messageChat');
var $btnEnviar = $('#btnEnviar');
var $chatFun = $('#chatFun');
var $mostrar = $('#mostrar');
var $cerrar = $('#cerrar');
  
// Funciòn del evento click, para almacenar los datos en firebase
$btnEnviar.on('click', function() {
  var mensaje = $txtMensaje.val();
  firebase.auth().onAuthStateChanged(function(user) {
    firebase.database().ref('chat').push({
      uid: user.uid,
      name: user.displayName,
      message: mensaje
    });
  });
});
// Mustra en pantalla los datos a publicar con los datos almacenados en firebase
firebase.database().ref('chat').on('value', function(snapshot) {
  var html = '';
  snapshot.forEach(function(e) {
    var element = e.val();
    var nombre = element.name;
    var mensaje = element.message;
    html += '<div><b>' + nombre + ': </b>' + mensaje + '</div>';
   
  });
  $($chatFun).append(html);
}); 

