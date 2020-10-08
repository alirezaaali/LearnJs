var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(params) {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  function crossout() {
    li.classList.toggle("done");
  }
  li.addEventListener("click", crossout);

  var delbtn = document.createElement("button");
  delbtn.appendChild(document.createTextNode("X"));
  li.appendChild(delbtn);
  delbtn.addEventListener("click", DelListItem);
  function DelListItem() {
    li.classList.add("delete");
  }
}

function addtoListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addtoListafterEnter(event) {
  if (inputLength() > 0 && event.which == 13) {
    createListElement();
  }
}

enterButton.addEventListener("click", addtoListAfterClick);
input.addEventListener("keypress", addtoListafterEnter);
