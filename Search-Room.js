//Linking Firebase
var firebaseConfig = {
    apiKey: "AIzaSyARLISVIGhao1YPds0HkMOL_2lyVTpkw70",
    authDomain: "the-futuristic.firebaseapp.com",
    databaseURL: "https://the-futuristic-default-rtdb.firebaseio.com",
    projectId: "the-futuristic",
    storageBucket: "the-futuristic.appspot.com",
    messagingSenderId: "688069893134",
    appId: "1:688069893134:web:e8728265cc31a8ad15305f"
};
firebase.initializeApp(firebaseConfig)

//Variables
var searched;

function Sea() {
    searched = document.getElementById("searched").value;
    localStorage.setItem("Crystal Room", searched);
    firebase.database().ref("/").child(searched).update({
        status: "Created"
    });

    window.location = " Chat.html";
    localStorage.setItem("Crystal Room", searched);
}