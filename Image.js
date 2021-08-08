//Linking Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCBG5OvrCheQR9tGtuei1D69P3SZV19EaM",
    authDomain: "web-cam-chat.firebaseapp.com",
    databaseURL: "https://web-cam-chat-default-rtdb.firebaseio.com",
    projectId: "web-cam-chat",
    storageBucket: "web-cam-chat.appspot.com",
    messagingSenderId: "185701538317",
    appId: "1:185701538317:web:0e2acee860ed000b821344"
};
firebase.initializeApp(firebaseConfig);


//Linking Webcam
Webcam.set({
    height: 400,
    width: 500,
    image_format: 'png',
    png_quality: 100,
});
Webcam.attach('WebCam');


//Variables
var Room = localStorage.getItem('Crystal Room');
var Name = localStorage.getItem('Crystal Name');

function Picture() {
    Webcam.snap(function (Snap) {
        console.log("done!");
        UserPic = Snap;
    });

    firebase.database().ref(Room).push({
        Image: UserPic,
        Person: Name
    });
}

function getData2() {
    firebase.database().ref("/" + Room).on('value', function (snapshot) {
        document.getElementById("Sent").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "status") {
                firebase_message_id = childKey;
                message_data = childData;
                MessgaeRecivied = message_data['Image'];
                NameRecivied = message_data['Person'];
                TextShown = '<div id = "Shared"><H3 id = "Name"> Shared By ' + NameRecivied + '</H3>'+'<img id = "UserPic" src = "' + MessgaeRecivied + '"></div><br>';
                document.getElementById("Sent").innerHTML += TextShown;
            }
        });
    });
}
getData2();