/*
//Index02
alert('Hello Alireza');

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

*/

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

