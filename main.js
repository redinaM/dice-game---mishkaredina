var player1 = "Player 1";
var player2 = "Player 2";
var pointsA = 0;
var pointsB = 0;

function editNames() {
    player1 = prompt("Enter Player 1");
    player2 = prompt("Enter Player 2");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

var max;
function enterMax(){
  var maX = prompt("Enter max", "0");
  max = parseInt(maX);
}

var btn = document.querySelector(".butn");
btn.addEventListener('click', () =>{
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src",
      "dice" + randomNumber1 + ".png");
      pointsA = pointsA + randomNumber1;
      document.querySelector(".pA").innerHTML = pointsA;

  document.querySelector(".img2").setAttribute("src",
      "dice" + randomNumber2 + ".png");
      pointsB = pointsB + randomNumber2;
      document.querySelector(".pB").innerHTML = pointsB;

      console.log("A " + pointsA);
      console.log("B " + pointsB);

  if( pointsB >= max && pointsA >= max){
    document.querySelector("h1").innerHTML
                  = (" Try again!");
  }  
      
 else if (pointsB >= max) {
  document.querySelector("h1").innerHTML
                  = (player2 + " WINS!");
}

else if(pointsA >= max){
  document.querySelector("h1").innerHTML
                  = (player1 + " WINS!");
}
 
})