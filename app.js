// toglogcin eljig hadgalah huwisagch , first player - 0 second player - 1
var activePlayer = 1;

//toglogcdin tsuglulsan onog tusglulah huwisagch
var scores = [0, 0];

//toglogcin eljinde tsuglulj baiga onog hadgalah huwisagch
var roundScore = 0;

//shoni ali talara busnig hadgalah huwisagch,  1-6 gesen utgig ene huwisagchid sanamsaguiger uusgej ugnu
//

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
