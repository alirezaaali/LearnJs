/*
//Index02
alert('Hello Alireza');
-----------------------------------------------
//Index03
var Name = "Alireza Ali";
var Number = 7525;
var isExist = true;

// alert(typeof Name + " " + Name);
// alert(typeof Number + " " + Number);
// alert(typeof isExist + " " + isExist);
// AliAlert();

function AliAlert() {
    var x = 150;
    var y = 200;
    var c = x + y;
    alert(c);
}

----------------------------------------------------------

//Index04
var Name = "Alireza";
var Family = "Ali";
document.write(Name + " " + Family + "<br />");

var ArrayName = ["Ali", "Hassan", "Hossein", "Hadi", "Mamad"];

document.write(ArrayName.length);
document.write("<br />");
document.write(ArrayName[3]);

ArrayName.sort();
console.log(ArrayName);
document.write("<br />");
document.write(ArrayName[3]);


var ArrayName2 = new Array("ali", "mamad", "omran");
document.write(ArrayName2.length);
document.write("<br />");
ArrayName2[2] = "Jafar";
document.write(ArrayName2[2]);

var person = ["Alireza", "Ali", 33];
document.write("<br />");
document.write("Name is: " + person[0] + " Family is: " + person[1] + " Age is: " + person[2]);

--------------------------------------------------------------
//index29
function myFunction() {
    var txt = "";
    var person = prompt(' Welcome to myPage \n Please Enter You name:', "Guest");

    if (person == null || person == "" || person == "Guest") {
        txt = "You did not enter your name!";
        document.getElementById("demo").style.color = "red";
    } else {
        txt = " سلام؛ " + person + " خوش آمدین ";
        document.getElementById("demo").style.color = "green";
    }

    document.getElementById("demo").innerHTML = txt;





    // if (confirm("Are you sure to press button?")) {
    //     txt = "You choose OK";
    // } else {
    //     txt = "You choose Cancel";
    // }
    // document.getElementById("demo").innerHTML = txt;
}


//--------------------------------------------------------------
//index30
var myTimer = setInterval(myfnc, 1000);
function myfnc() {
    var myClock = new Date();
    document.getElementById("demo").innerHTML = myClock.toLocaleTimeString();

}
function stopClock() {
    clearInterval(myTimer);
}
function startClock() {
    myTimer = setInterval(myfnc, 1000);
}
*/

//--------------------------------------------------------------
//index31
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}
