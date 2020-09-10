const CoinArray = ["Heads", "Tails"];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
let Score = [0, 0];
let Output = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
  let PlayerGuss = e.target.innerText;
  let ComputerToss = Math.floor(Math.random() * 2);
  let ComputerGuss = CoinArray[ComputerToss];

  message.innerHTML = "Computer Selected  ===>  " + ComputerGuss;
  if (PlayerGuss === ComputerGuss) {
    Output = " || You Win! ";
    Score[0]++;
    message.style.color = "blue";
  } else {
    Output = " || You lose! ";
    message.style.color = "red";
    Score[1]++;
  }

  message.innerHTML +=
    Output +
    "<br /> Player Score: " +
    Score[0] +
    " || Computer Score:" +
    Score[1];
}