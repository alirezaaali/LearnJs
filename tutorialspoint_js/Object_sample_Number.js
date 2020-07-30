function showMaxValue() {
    var val = Number.MAX_VALUE;
    alert("Value of Number.MAX_VALUE : " + val );
    // document.write ("Value of Number.MAX_VALUE : " + val );
 }
 function showMinValue() {
    var val = Number.MIN_VALUE;
    alert("Value of Number.MIN_VALUE : " + val);
    // document.write ("Value of Number.MIN_VALUE : " + val );
 }

 function showNanValue() {
    var dayOfMonth = 50;
    
    if (dayOfMonth < 1 || dayOfMonth > 31) {
       dayOfMonth = Number.NaN
       alert("Day of Month must be between 1 and 31.")
       debugger
    }
    // document.write("Value of dayOfMonth : " + dayOfMonth );
 }
 function showNegativeInfinityValue() {
    var smallNumber = (-Number.MAX_VALUE) * 2              
    if (smallNumber == Number.NEGATIVE_INFINITY) {
       alert("Value of smallNumber : " + smallNumber );
    }
 }
 function showPositiveInfinityValue() {
    var bigNumber = Number.MAX_VALUE * 2               
    if (bigNumber == Number.POSITIVE_INFINITY) {
       alert("Value of bigNumber : " + bigNumber );
    }
 }
 function book(title, author) {
     debugger
    this.title = title; 
    this.author  = author;
 }

