//Variables
var User;
var Alert;

function SignIn() {
    // Main Function
    User = document.getElementById("Name").value;

    if (User == "") {
        window.alert("Kindly Enter Your Name To Continue");
    }
    else {
        document.getElementById("Name").value = "";
        localStorage.setItem("Crystal Name", User);
        console.log("The User Used The SignIn Function")
        window.location = "Home.html";
    }
}


//Extra [ Working ]
function ShowInfo() {
    //Main Function
    document.getElementById("Alert").style.display = "inline-block";
    setTimeout(RemoveInfo, 5000);
}

function RemoveInfo() {
    document.getElementById("Alert").style.display = "none";
}