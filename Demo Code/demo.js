/*----- constants -----*/
const PLAYERS = {
  1: "X",
  "-1": "O",
  null: ""
};

const COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const message = document.querySelector("h2");
const squares = document.querySelectorAll(".square");

/*----- event listeners -----*/
document.querySelector("button").addEventListener("click", init);
document.getElementById("game-board").addEventListener("click", handleMove);

/*----- functions -----*/
init();

function init() {}

function handleMove(evt) {}

function getWinner() {}

function render() {}
