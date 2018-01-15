$('.button-collapse').sideNav();
window.onload = inicializar;
var StorageRef;
var fichero;
var images;
function inicializar() {
  fichero = document.getElementById('fichero');
  fichero.addEventListener('change', uploadImage, false);
  StorageRef = firebase.storage().ref();
  images = firebase.database().ref().child('images');
  viewImages();
}
function viewImages() {

  firebase.auth().onAuthStateChanged(function (user) {
    firebase.database().ref('images').on('child_added', function (snapshot) {
      var result = '';
      var uiduser = user.uid;
      var uid = snapshot.val().uid;
      var ruta = snapshot.val().url;
      var $boximage = $('#images-firebase');
      if (uiduser === uid) {


        result += '<img width="150px" height="120px" src="' + ruta + '"/>';
        $boximage.append(result);

      }
    });
  });
}
function uploadImage() {
  var imageUpload = fichero.files[0];
  var uploadImages = StorageRef.child('images/' + imageUpload.name).put(imageUpload);
  document.getElementById('progress').className = '';
  uploadImages.on('state_changed',
    function (snapshot) {
      // se va mostrando el progreso de la subida de la imagen
    }, function (error) {
      // Gestionar el error si se produce
      alert('Hubo un error');
    }, function () {
      // cuando se ha subido exitosamente
      var downloadURL = uploadImages.snapshot.downloadURL;
      firebase.auth().onAuthStateChanged(function (user) {
        createNodeFirebase(imageUpload.name, downloadURL, user.uid);
      });
      document.getElementById('progress').className = 'hide';
    });
};

function createNodeFirebase(nameImage, downloadURL, uid) {
  images.push({
    name: nameImage,
    url: downloadURL,
    uid: uid
  });
}
//---------------------Enlaces------------------
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
var $message = $('#message');
$message.on('click', function () {
  window.location.href = 'chat.html';
});