/*
function sayHello(){
    //alert("Hello");
    document.write("Hello");
}

function sayHello(name,age){
    //alert("Hello");
    document.write("My name is: " + name + " and I am "+ age + " years old.");

}

function concat(name,family)
{
    return name + family;
}
function secondFun()
{
    document.write(concat('Alireza ',' Ali'));
}

var func = function (x,y) {
    return x*y
};
function scondfunction() {
    var result;
    result = func(10,30);
    document.write(result);
}
*/
var func = new Function("x","y","return x*y");
function scondfunction() {

    var result;
    result = func(10,23);
    document.write(result);
}