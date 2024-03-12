<<<<<<< HEAD
var activePlayer = 0;

var score = [0, 0];

var roundScore = 0;
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
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var DiceDom = document.querySelector(".dice");
DiceDom.style.display = "none";

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
=======
>>>>>>> lesson44
