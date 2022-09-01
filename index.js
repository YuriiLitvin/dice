
function getDiceNumbers() {
  var randomNumber;
  var diceNumbers = [];

  var imageTags = document.querySelectorAll(".dice img");

  for (var i = 0; i < imageTags.length; i++) {
    randomNumber = Math.floor(Math.random() * 6);
    diceNumbers.push(randomNumber);
    imageTags[i].setAttribute("src", `images/dice${randomNumber + 1}.png`);
  }
  defineWinner(diceNumbers);
}


function defineWinner(diceNumbers) {
  var header = document.querySelector("h1");
  if (diceNumbers[0] === diceNumbers[1]) {
    header.textContent = "Draw";
  } else if (diceNumbers[0] > diceNumbers[1]) {
    header.textContent = "🚩 Player 1 Wins!";
  } else {
    header.textContent = "Player 2 Wins! 🚩";
  }
}


document.addEventListener("click", getDiceNumbers);
