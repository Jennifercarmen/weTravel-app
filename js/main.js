var config = {
  apiKey: 'AIzaSyDz6Bsp6T9TuR7gYIg5i-tTScsbIFeVyYo',
  authDomain: 'laboratoria-2a397.firebaseapp.com',
  databaseURL: 'https://laboratoria-2a397.firebaseio.com',
  projectId: 'laboratoria-2a397',
  storageBucket: 'laboratoria-2a397.appspot.com',
  messagingSenderId: '617399103792'
};
  
firebase.initializeApp(config);
  
function signInFacebook() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    window.location.href = 'home.html';
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
    window.location.href = 'home.html';
  });
}
var $inifacebook = $('#inifacebook');
var $inigoogle = $('#inigoogle');
$inifacebook.on('click', signInFacebook);
$inigoogle.on('click', signInGoogle);