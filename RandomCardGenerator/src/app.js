/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var suits = ["♦", "♥", "♠", "♣"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//function that renders the card
function render(variables = {}) {
  document.querySelector("#card").innerHTML = `
    <div class = "topSuit" style = "color: ${variables.color}">
      <span>${variables.suit}</span>
    </div>
    
    <div class = "value">
      <span>${variables.value}</span>
    </div>
    
    <div class = "bottomSuit" style = "color: ${variables.color}">
      <span>${variables.suit}</span>
    </div>`;
}

window.onload = function() {
  window.variables = {
    suit: suits[Math.floor(Math.random() * suits.length)],
    value: values[Math.floor(Math.random() * values.length)],
    color: "#d23b3b"
  };

  console.log(variables.suit);
  if (variables.suit == "♠" || variables.suit == "♣") {
    variables.color = "rgb(44, 44, 44)";
  }
  //renders the card for the first time
  render(window.variables);
};

document.getElementById("button").onclick = async function() {
  flipCard();
  await sleep(200);
  randomize(window.variables);
  document.getElementById("button").disabled = true;
  await sleep(1000);
  flipCard();
  document.getElementById("button").disabled = false;
};

function randomize(variables = {}) {
  window.variables = {
    suit: suits[Math.floor(Math.random() * suits.length)],
    value: values[Math.floor(Math.random() * values.length)]
  };

  if (window.variables.suit == "♠" || window.variables.suit == "♣") {
    window.variables.color = "rgb(44, 44, 44)";
  } else {
    window.variables.color = "#d23b3b";
  }
  console.log("These are the current variables: ", variables);

  render(window.variables);
}

function flipCard() {
  const card1 = document.getElementById("flipper1");
  card1.classList.toggle("flipCard");
}

//window.setInterval(randomize, 10000);
