
function Wran() {
    alert("You wanna play this game baby?");
    GetConfirmation();
    // document.write("This a simple warning message.");
}

function GetConfirmation() {
    var retValue = confirm("Do you want to continue?");
    debugger
    if (retValue == true) {
        //document.write("You choose to continue!");
        PromptName();
        //return true;
    }else {
        document.write("You choose to stop!");
        setTimeout("location.reload(true)",5000);
        //return false;

    }
}

function PromptName() {
    var retValue = prompt("Enter your name:", "your name?");
    debugger
    if (retValue != "your name?") {
        document.write(retValue.toString() + " choose to play this!");
        //return true;
    }else {
        document.write("Sorry loser!");
        setTimeout("location.reload(true)",5000);
        //return false;

    }
}