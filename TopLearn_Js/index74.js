var character = document.getElementById("Character");
var block = document.getElementById("block");
var counter = 0;
function jump() {
  if (character.classList === "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 300);
}
var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockleft < 20 && blockleft > -20 && characterTop >= 130) {
    block.style.animation = "noun";
    counter = 0;
    block.style.animation = "block 1s infinite linear";
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
