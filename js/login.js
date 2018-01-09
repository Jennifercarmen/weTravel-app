var config = {
  apiKey: 'AIzaSyDz6Bsp6T9TuR7gYIg5i-tTScsbIFeVyYo',
  authDomain: 'laboratoria-2a397.firebaseapp.com',
  databaseURL: 'https://laboratoria-2a397.firebaseio.com',
  projectId: 'laboratoria-2a397',
  storageBucket: 'laboratoria-2a397.appspot.com',
  messagingSenderId: '617399103792'
};

firebase.initializeApp(config);
var ref = new Firebase('https://laboratoria-2a397.firebaseio.com');
var user = {
  email: 'jennifercarmens@gmail.com',
  password: '1234'
};
ref.createUser(user, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Tu usuario se ha registrado');
  }
});
