var firebaseConfig = {
      apiKey: "AIzaSyC6Y2IquQyHPiQrIenImOHpyaXqjB5UDZM",
      authDomain: "kwitter-88f17.firebaseapp.com",
      projectId: "kwitter-88f17",
      storageBucket: "kwitter-88f17.appspot.com",
      messagingSenderId: "1010933585097",
      appId: "1:1010933585097:web:f4bd5c110afdaf12496918"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 
      //End code
      });});}
getData();
