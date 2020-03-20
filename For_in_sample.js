var aProperty;
document.write("Navigate through object properties:");
document.write("<br />");
document.write("---------------------------------------------");
document.write("<br />");

for(aProperty in navigator)
{
    //if(aProperty == "language")
  //  {
    document.write(aProperty);
    document.write("<br />");
//}

}
document.write("<br />");
document.write("---------------------------------------------");
document.write("<br />");
document.write("Loop finished");