var activePlayer = 0;

var scores = [0, 0];

var roundScore = 0;

window.document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "./SUMM/images/dice-" + diceNumber + ".png";

  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    window.document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    window.document.querySelector(".player-0-panel").classList.toggle("active");
    window.document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  //ug toglogcin tsuglulsan onong global onon der nemj ugnu\
  scores[activePlayer] = scores[activePlayer] + roundScore;
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  //toglogcin eeljiig solih
  roundScore = 0;

  window.document.getElementById("current-" + activePlayer).textContent = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  window.document.querySelector(".player-0-panel").classList.toggle("active");
  window.document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
});
