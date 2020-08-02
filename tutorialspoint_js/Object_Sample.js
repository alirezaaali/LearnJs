//-----------simple object---------------
debugger
// var book = new Object();
// book.title = "New Book";
// book.author = "A.R.Ali";

//-----------simple user defined function ---------------

// function book(title,author) {
//     this.title = title;
//     this.author = author;

    
// }

//-----------user defined function that works as method---------------

function addPrice(amount) {
    whith (this)
    {
       price = amount;
    }
    
}

function book(title,author) {
      this.title = title;
      this.author = author;
      this.price =0;
      this.addPrice = addPrice;
}