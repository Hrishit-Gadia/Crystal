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

// Variables
var Texts;
var Room = localStorage.getItem("Crystal Room");
var Person = localStorage.getItem("Crystal Name");
var MessgaeRecivied;
var NameRecivied;
var TextShown;
var randomColor;
var Texted = "Empty";

//Functions
function Send() {
    Person = localStorage.getItem("Crystal Name");
    Texted = document.getElementById("Text").value;
    firebase.database().ref(Room).push({
        Name: Person,
        Message: Texted
    });

    document.getElementById("Text").value = "";
}

function getData() {
    firebase.database().ref("/" + Room).on('value', function (snapshot) {
        document.getElementById("Messages").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "status") {
                firebase_message_id = childKey;
                message_data = childData;
                MessgaeRecivied = message_data['Message'];
                NameRecivied = message_data['Name'];

                if (MessgaeRecivied == "") {}
                else {
                    TextShown = "<div class ='TextMessage'><H3 id = 'name'>" + NameRecivied + "</H3>" + "<h2>" + MessgaeRecivied + "</h2></div>"

                    document.getElementById("Messages").innerHTML += TextShown;
                }
            }
        });
    });
}
getData();