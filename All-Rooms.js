//Linking FireBase
var firebaseConfig = {
    apiKey: "AIzaSyARLISVIGhao1YPds0HkMOL_2lyVTpkw70",
    authDomain: "the-futuristic.firebaseapp.com",
    databaseURL: "https://the-futuristic-default-rtdb.firebaseio.com",
    projectId: "the-futuristic",
    storageBucket: "the-futuristic.appspot.com",
    messagingSenderId: "688069893134",
    appId: "1:688069893134:web:e8728265cc31a8ad15305f"
};
firebase.initializeApp(firebaseConfig);

//Variables
var Display;
var Rooms;

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("The Rooms").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Rooms = childKey;
                console.log(Rooms);
                Display = "<div id = " + Rooms + " class = 'Rooms' onclick = 'go(this.id)'> @" + Rooms + "</div><br>";
                document.getElementById("The Rooms").innerHTML += Display ;
          });
    });
}
getData();

function go(name) {
    window.location = "Chat.html";
    localStorage.setItem("Crystal Room", name);
}