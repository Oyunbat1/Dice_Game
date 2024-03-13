//------------------
var isNewHGame;

var activePlayer;

var scores;

var roundScore;

var DiceDom = document.querySelector(".dice");

InitGame();

function InitGame() {
  isNewHGame = true;

  activePlayer = 0;

  scores = [0, 0];

  roundScore = 0;

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
  DiceDom.style.display = "none";
}

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewHGame) {
    var RandomNumber = Math.floor(Math.random() * 6) + 1;
    DiceDom.style.display = "block";
    DiceDom.src = "./SUMM/images/dice-" + RandomNumber + ".png";

    if (RandomNumber !== 1) {
      roundScore = roundScore + RandomNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("game is over!!!");
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewHGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      isNewHGame = false;
      document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("game is over");
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  DiceDom.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", function () {
  InitGame();
});
