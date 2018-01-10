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
  images.on('value', function(snapshot) {
    var datos = snapshot.val();
    var result = '';
    for (var key in datos) {
      result += '<img width="150px" height="120px" src="' + datos[key].url + '"/>';
    }
    document.getElementById('images-firebase').innerHTML = result;
  });
}
function uploadImage() {
  var imageUpload = fichero.files[0];
  var uploadImages = StorageRef.child('images/' + imageUpload.name).put(imageUpload);
  document.getElementById('progress').className = '';

  uploadImages.on('state_changed', 
    function(snapshot) {
      // se va mostrando el progreso de la subida de la imagen
    }, function(error) {
      // Gestionar el error si se produce
      alert('Hubo un error');
    }, function() {
      // cuando se ha subido exitosamente
      var downloadURL = uploadImages.snapshot.downloadURL;
      createNodeFirebase(imageUpload.name, downloadURL);
      document.getElementById('progress').className = 'hide';
    });
};

function createNodeFirebase(nameImage, downloadURL) {
  images.push({name: nameImage, 
    url: downloadURL});
}