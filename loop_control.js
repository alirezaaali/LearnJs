/*
var x=1;
document.write("Entering the loop<br /> ");
while(x<20){
    ++x;
    if(x==5){
    //break;
    continue;
}

document.write(x +"<br /> ");

}
document.write("Exiting the loop!<br /> ");
*/
/*
document.write("Entering the loop!<br /> ");
            outerloop:        // This is the label name         
            for (var i = 0; i < 5; i++) {
               document.write("Outerloop: " + i + "<br />");
               innerloop:
               for (var j = 0; j < 5; j++) {
                  if (j > 3 ) break ;           // Quit the innermost loop
                  if (i == 2) break innerloop;  // Do the same thing
                  if (i == 4) break outerloop;  // Quit the outer loop
                  document.write("Innerloop: " + j + " <br />");
               }
            }        
            document.write("Exiting the loop!<br /> ");
            */

            
 for(var i =0;i<=10;i++)
 {
     document.write("Multiple by:"+ i);
     document.write("<br />");
     for(var j=0; j<=10;j++)
     {
         document.write(i+" * "+j+" = "+i*j);
         document.write("<br />");

     }
 }           