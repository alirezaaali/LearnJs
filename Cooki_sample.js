function WriteCookie(){
if(document.myform.customer.value == "")
{
    alert("Enter Customer Name!");
    return;
}

cookievalue = escape(document.myform.customer.value) + ";";
document.cookie="name=" +cookievalue;
document.write("Setting Cookie:"+"name"+cookievalue);
}