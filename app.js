// toglogcin eljig hadgalah huwisagch , first player - 0 second player - 1
var activePlayer = 1;

//toglogcdin tsuglulsan onog tusglulah huwisagch
var scores = [0, 0];

//toglogcin eljinde tsuglulj baiga onog hadgalah huwisagch
var roundScore = 0;

//shoni ali talara busnig hadgalah huwisagch,  1-6 gesen utgig ene huwisagchid sanamsaguiger uusgej ugnu
var dice = Math.floor(Math.random() * 6) + 1;
//  <div class="player-score" id="score-0">43</div>
// innerhtml dom - oor damjad html ashiglah bolomjig usgej bna
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em> yes <em>";
window.document.querySelector("#score-0").textContent = "0";
window.document.querySelector("#score-1").textContent = "0";
window.document.querySelector("#current-0").textContent = "0";
window.document.querySelector("#current-1").textContent = "0";
document.querySelector(".dice").style.display = "none";
console.log("Шоо:" + dice);
