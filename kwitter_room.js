
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD_4Gd-CiYXgVu0p2OfxMVU6tNErSpbwso",
      authDomain: "kwitter-3214f.firebaseapp.com",
      databaseURL: "https://kwitter-3214f-default-rtdb.firebaseio.com",
      projectId: "kwitter-3214f",
      storageBucket: "kwitter-3214f.appspot.com",
      messagingSenderId: "717249081573",
      appId: "1:717249081573:web:0612b255524253dbc0a40c",
      measurementId: "G-YNG23TP7X0"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
