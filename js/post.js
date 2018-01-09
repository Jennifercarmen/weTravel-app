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


/* ----------------------Post---------------------------*/
// Creaciòn de variables tomando el cuenta el id de cada elemento
var $txtMensaje = $('#message');
var $btnEnviar = $('#btnEnviar');
var $chatUl = $('#chatUl');

// Funciòn del evento click, para almacenar los datos en firebase
$btnEnviar.on('click', function() {
  var mensaje = $txtMensaje.val();
  firebase.database().ref('post').push({
    message: mensaje
  });
});

// Mustra en pantalla los datos a publicar con los datos almacenados en firebase
firebase.database().ref('post').on('value', function(snapshot) {
  var html = '';
  snapshot.forEach(function(e) {
    var element = e.val();

    var mensaje = element.message;
    html += '<div class="div_color">' + mensaje + '<div class="style_icons">' +'<i class="tiny material-icons icon_post">favorite_border</i>' + '<i class="tiny material-icons icon_post">message</i>' + '<i class="tiny material-icons icon_post">share</i>'+ '</div>' + '</div>';
    
  });
  $($chatUl).append(html);
});
