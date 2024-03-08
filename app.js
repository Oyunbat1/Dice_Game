// toglogcin eljig hadgalah huwisagch , first player - 0 second player - 1
var activePlayer = 0;

//toglogcdin tsuglulsan onog tusglulah huwisagch
var scores = [0, 0];

//toglogcin eljinde tsuglulj baiga onog hadgalah huwisagch
var roundScore = 0;

//shoni ali talara busnig hadgalah huwisagch,  1-6 gesen utgig ene huwisagchid sanamsaguiger uusgej ugnu

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

//Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1 -- 6 dotorh sanamsargui neg toog gargan awna.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //shoonii zurgig webder gargaj irne
  diceDom.style.display = "block";
  //dice-2,png zuragnii urgutlur shud zurgig gargaj ireh.
  diceDom.src = "dice-" + diceNumber + ".png";
  //Buusan too ni 1es ylgatai bol idewhtei toglogcin eljin tog nemegdulne.
  if (diceNumber !== 1) {
    //1-es ylgatai to bulaa , buusan toog toglogcid nemj ugn
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // ulaaj tsegiig shiljuleh kod
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // shog tur alga bolgoh
    diceDom.style.display = "none";
  }
});
// Hold towchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  //ug toglogcin tsuglulsan onog global onoon der ni nemj ugn.
  roundScore;
  //eeljin onoog ni 0 bolgono.

  //toglogcin eeljig songono.
});
