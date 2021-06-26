
function Update() {
    var RecentRooms = localStorage.getItem("Current");
    console.log("Recivied");

    if (RecentRooms == "") {
        document.getElementById("Rooms").innerHTML = "You Have Not Created A Room Yet! Create Your First one to Start!"
    }
    else {
        document.getElementById("Rooms").innerHTML = RecentRooms;
    }
}