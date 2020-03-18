var grade = 'A';
var lineBreak = '<br />'; 
document.write("Entering switch block<br />");
document.write(lineBreak);
switch (grade) {
case 'A': 
        document.write("Good job<br />");
        document.write(lineBreak);
break;
            
case 'B': document.write("Pretty good<br />");
break;
            
case 'C': document.write("Passed<br />");
break;
            
case 'D': document.write("Not so good<br />");
break;
            
case 'F': document.write("Failed<br />");
break;
            
default:  document.write("Unknown grade<br />")
}
document.write("Exiting switch block");