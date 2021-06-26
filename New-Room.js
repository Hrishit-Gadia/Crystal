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

// Variables
var UserName;
var RoomName = "";
var FinalRoom
UserName = localStorage.getItem("Crystal Name");
var Current = localStorage.getItem("Current");

//Functions
function NewRoom() {
    RoomName = document.getElementById("text").value;
    if (RoomName == "") {
        window.alert("Hey " + UserName + " You would not be able to chat without the room name");
        window.location = "New-Room.html"
    }
    else {
      FinalRoom = document.getElementById("text").value;
    }
    firebase.database().ref("/").child(FinalRoom).update({
        status: "Created"
    });
    localStorage.setItem("Crystal Room", FinalRoom);
    document.getElementById("text").value = "";
    var Value = Current + "<Br>" + FinalRoom + "<Br>";
    localStorage.setItem("Current", Value);
    ShowInfo();
} // NewRoom() Function Successfull


function ShowInfo() {
    //Main Function

    document.getElementById("Alert").innerHTML = "Your New Room " + "(" + RoomName + ")" + " is created <a href= 'Chat.html'>Click Here To start Chatting</a>"
    document.getElementById("Alert").style.display = "inline-block";
    setTimeout(RemoveInfo, 5000);
}

function RemoveInfo() {
    document.getElementById("Alert").style.display = "none";
}
var Value = Current + "<br> <h2>hello</h2>";
localStorage.setItem("Current", Value);