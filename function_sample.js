
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