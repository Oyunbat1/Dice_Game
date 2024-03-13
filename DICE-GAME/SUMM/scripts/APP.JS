var activePlayer;

var score;

var roundScore;
var DiceDom = document.querySelector(".dice");

//---------
function SwitchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  DiceDom.style.display = "none";
}
//------------------
function StartGame() {
  activePlayer = 0;

  score = [0, 0];

  roundScore = 0;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".layer-0-panel").classList.remove("winner");
  document.querySelector(".layer-1-panel").classList.remove("winner");

  document.querySelector(".layer-0-panel").classList.remove("active");
  document.querySelector(".layer-1-panel").classList.remove("active");

  document.querySelector(".layer-1-panel").classList.add("active");

  DiceDom.style.display = "none";
}
//-----------------------------

document.querySelector(".btn-roll").addEventListener("click", function () {
  var RandomNumber = Math.floor(Math.random() * 6) + 1;
  DiceDom.style.display = "block";
  DiceDom.src = "./SUMM/images/dice-" + RandomNumber + ".png";

  if (RandomNumber !== 1) {
    roundScore = roundScore + RandomNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    SwitchToNextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  score[activePlayer] = score[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    SwitchToNextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", StartGame);
