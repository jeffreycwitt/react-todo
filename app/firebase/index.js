import firebase from 'firebase';

try {
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBJ27RC3GFfL4AdOhYgc_cRd4ajE3cRsIc",
      authDomain: "jefftodoapp.firebaseapp.com",
      databaseURL: "https://jefftodoapp.firebaseio.com",
      projectId: "jefftodoapp",
      storageBucket: "jefftodoapp.appspot.com",
      messagingSenderId: "819190747257"
    };
    firebase.initializeApp(config);
}
catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase;
