var config = {
  apiKey: 'AIzaSyDz6Bsp6T9TuR7gYIg5i-tTScsbIFeVyYo',
  authDomain: 'laboratoria-2a397.firebaseapp.com',
  databaseURL: 'https://laboratoria-2a397.firebaseio.com',
  projectId: 'laboratoria-2a397',
  storageBucket: 'laboratoria-2a397.appspot.com',
  messagingSenderId: '617399103792'
};

firebase.initializeApp(config);
var user = null;
var usuariosConectados = null;
var usuarios = null;

var database = firebase.database();
var conectadoKey = '';
var $inifacebook = $('#inifacebook');
var $inigoogle = $('#inigoogle');
$inifacebook.on('click', signInFacebook);

$inigoogle.on('click', signInGoogle);
function initApp() {
  registrationUsers(user.uid, user.displayName, user.email,user.photoURL);
  login(user.uid, user.displayName , user.email);
  window.location.href = 'views/desktop.html';  
}
function registrationUsers(uid, name, email,photoURL) {
    firebase.database().ref('Usuarios/' + uid).set({
    name: name,
    email: email,
    photoURL:photoURL
  });
}
function login(uid, name, email) {
  firebase.database().ref('connected/' + uid).set({
    name: name,
    email: email
  });
}
function signOut() {
  firebase.auth().onAuthStateChanged(function(user) {
    database.ref('/connected/' + user.uid).remove();
    window.location.href = '../index.html';  
  });
};
function signInFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    user = result.user;
    console.log(user);
    initApp();
  }).catch(function(error) {
    var errorCode = error.code;
    console.log(errorcode);
    var errorMessage = errorMessage;
    console.log(errorMessage);
    var email = error.email;
    console.log(email);
    var credential = error.credential;
    console.log(credential);
  });
}

function signInGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    user = result.user;
    console.log(user);
    initApp();
    window.location.href = 'views/desktop.html';
  });
}
var $logout = $('.logout');
$logout.on('click', signOut);
