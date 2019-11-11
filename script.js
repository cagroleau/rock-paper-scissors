//Rock, Paper, Scissors
//11.11.19 Chris Groleau

let win = 0;
let lose = 0;
let draw = 0;
let input = null;
let output = document.getElementById("result");

function game() {
  let userinput = document.getElementsByName("weapon");
  let cpuinput = Math.floor(Math.random()*3);
  let userweapon;
  let cpuweapon;
  let result;

  for (i=0;i<3;i++) {
    if (userinput[i].checked) {userweapon = userinput[i].value;}
  }

  switch (cpuinput) {
    case 0:
      cpuweapon = 'rock';
      break;
    case 1:
      cpuweapon = 'paper';
      break;
    case 2:
      cpuweapon = 'scissors'
      break;
  }

  if (userweapon == 'rock') {
    if (cpuweapon == 'rock') {result = 'draw'; draw++;}
    if (cpuweapon == 'paper') {result = 'lose'; lose++;}
    if (cpuweapon == 'scissors') {result = 'win'; win++;}
  } else if (userweapon == 'paper') {
    if (cpuweapon == 'rock') {result = 'win'; win++;}
    if (cpuweapon == 'paper') {result = 'draw'; draw++;}
    if (cpuweapon == 'scissors') {result = 'lose'; lose++;}
  } else if (userweapon == 'scissors') {
    if (cpuweapon == 'rock') {result = 'lose'; lose++;}
    if (cpuweapon == 'paper') {result = 'win'; win++;}
    if (cpuweapon == 'scissors') {result = 'draw'; draw++;}
  } else {
    alert("unrecognized input");
  }
  output.innerHTML = `<h3>The CPU chose ${cpuweapon}, you ${result}.</h3><h4>win: ${win}, lose: ${lose}, draw: ${draw}</h4>`;
}
