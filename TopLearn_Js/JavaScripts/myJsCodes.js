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


//--------------------------------------------------------------
//index32

function GetTextFile() {
    debugger
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        document.getElementById("demo").innerHTML = this.responseText;

    }

    xhttp.open("GET", "index32.txt", true);
    xhttp.send();


}

function GetTextFile() {
    debugger
    //Correct Version
    // var requets = new XMLHttpRequest();
    // requets.open("GET", "https://gorest.co.in/public-api/posts", true);
    // requets.onload = function () {
    //     var data = JSON.parse(this.response)
    //     console.log(typeof (data));
    //     console.log(Object.keys(data.data).length);

    //     if (requets.status >= 200 && requets.status < 400) {
    //         data.data.forEach((data) => {
    //             console.log(data.title)
    //         })
    //         // for (let i = 0; i < Object.keys(data.data).length; i++) {
    //         //     console.log(data.data[i].title);

    //         // }
    //     } else {
    //         console.log('error')
    //     }
    // }
    // requets.send();



    fetch("https://gorest.co.in/public-api/posts").then(response => {
        return response.json();
    }).then(data => {
        console.log(typeof (data));
        console.log(Object.keys(data.data).length);
        if (data.code = "200") {

            for (let i = 0; i < Object.keys(data.data).length; i++) {
                console.log(data.data[i].title);
            }
        }


    }).catch(err => { console.log('error') })

}


//--------------------------------------------------------------
//index37
var request

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'index32.txt')
//requets.open("GET", "https://gorest.co.in/public-api/posts", true);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request)
        var modify = document.getElementById('update');
        modify.innerHTML = request.responseText;
    }
}

request.send()


//--------------------------------------------------------------
//index38


var request

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'index32.txt')
//requets.open("GET", "https://gorest.co.in/public-api/posts", true);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request)
        // var modify = document.getElementsByTagName('li');
        // modify[2].innerHTML = request.responseText;

        var modify = document
            .getElementsByTagName('ul')[1].getElementsByTagName('li');
        for (let i = 0; i < modify.length; i++) {
            if (i < 5) {
                modify[i].innerHTML = request.responseText;
                modify[i].style.color = "red";
            } else {
                modify[i].innerHTML = "This text is static";
                modify[i].style.color = "green";
            }

        }
    }
}
request.send()

//--------------------------------------------------------------
//index39
var request

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'data.xml')
//requets.open("GET", "https://gorest.co.in/public-api/posts", true);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var names = request.responseXML.getElementsByTagName('name');
        var reknown = request.responseXML.getElementsByTagName('reknown');
        var output = '<ul>';
        for (let i = 0; i < names.length; i++) {
            output += '<li>' + names[i].firstChild.nodeValue + ' which reknown as: ' +
                reknown[i].firstChild.nodeValue + '</li>';
        }
        output += '</ul>';

        document.getElementById('update').innerHTML = output;
    }

}
request.send();

//--------------------------------------------------------------
//index40
var request

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest()
} else {
    request = new ActiveXObject('Microsoft.XMLHTTP')
}

request.open('GET', 'data.json')
//requets.open("GET", "https://gorest.co.in/public-api/posts", true);
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        var items = JSON.parse(request.responseText);
        var output = '<ul>';
        for (var key in items) {
            output += '<li>' + items[key].name + ' which reknown as: ' +
                items[key].reknown + '</li>';
        }
        output += '</ul>';
        document.getElementById('update').innerHTML = output;
    }
}
request.send();


//--------------------------------------------------------------
//index41
function loadAJAX() {
    var request

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest()
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP')
    }

    request.open('GET', 'data.json')
    //requets.open("GET", "https://gorest.co.in/public-api/posts", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var items = JSON.parse(request.responseText);
            var output = '<ul>';
            for (var key in items) {
                output += '<li>' + items[key].name + '</li>';
            }
            output += '</ul><button onclick="showfull()">Show eveyhing!</button>';
            document.getElementById('names').innerHTML = output;

        }
    }
    request.send();
}


function showfull() {
    var request

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest()
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP')
    }

    request.open('GET', 'data.json')
    //requets.open("GET", "https://gorest.co.in/public-api/posts", true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var items = JSON.parse(request.responseText);
            var output = '<ul>';
            for (var key in items) {
                output += '<li>' + items[key].name + ' which reknown as: ' +
                    items[key].reknown + ' and bio is: ' + items[key].bio + '</li>';
            }
            output += '</ul>';
            document.getElementById('fulldata').innerHTML = output;
        }
    }
    request.send();

}


//--------------------------------------------------------------
//index43
//debugger
const CoinArray = ["Heads", "Tails"];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
let Score = [0, 0];
let Output = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  let PlayerGuss = e.target.innerText;
  let ComputerToss = Math.floor(Math.random() * 2);
  let ComputerGuss = CoinArray[ComputerToss];

  message.innerHTML = "Computer Selected  ===>  " + ComputerGuss;
  if (PlayerGuss === ComputerGuss) {
    Output = " || You Win! ";
    Score[0]++;
    message.style.color = "blue";
  } else {
    Output = " || You lose! ";
    message.style.color = "red";
    Score[1]++;
  }

  message.innerHTML +=
    Output +
    "<br /> Player Score: " +
    Score[0] +
    " || Computer Score:" +
    Score[1];
}


//--------------------------------------------------------------
//index45
//debugger

const answersArray = ["I am Ok!",
    "I don`t know this",
    "I did not undestand"];
const message = document.querySelector('.message');
const question = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener("click", function () {
    let res = Math.floor(Math.random() * answersArray.length);
    message.innerText = question.value + " " + answersArray[res];
    question.value = "";
})
*/

//--------------------------------------------------------------
//index46
//debugger;
const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let score = 0;
let gameplay = false;
button.addEventListener("click", function () {
  if (!gameplay) {
    gameplay = true;
    gameArea.innerHTML = "";
    score = 0;
    maker();
    button.innerHTML = "Check Combo";
    message.innerHTML = "Guss!";
  } else {
    const numbers = document.querySelectorAll(".numb");
    score++;
    message.innerHTML = "Gusses: " + score;
    let winCondition = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].value == numbers[i].Correct) {
        numbers[i].style.backgroundColor = "Green";
        numbers[i].style.color = "White";
        winCondition++;
      } else {
        let color = numbers[i].value < numbers[i].Correct ? "Blue" : "Red";
        numbers[i].style.backgroundColor = color;
        numbers[i].style.color = "White";
      }
      if (winCondition == numbers.length) {
        EndGame();
      }
    }
  }
  function EndGame() {
    message.innerHTML = "you win in: " + score + " try.";
    gameplay = false;
    button.innerHTML = "Restart Game";
    //button.hidden = "true";
  }
  function maker() {
    for (let i = 0; i < 6; i++) {
      let el = document.createElement("input");
      el.setAttribute("type", "Number");
      el.max = 9;
      el.min = 0;
      el.size = 1;
      el.style.width = "50px";
      el.classList.add("numb");
      el.Correct = Math.floor(Math.random() * 10);
      el.value = 0;
      el.order = i;
      gameArea.appendChild(el);
    }
  }
});
