/*-------------------------------- Constants --------------------------------*/
// winning combos in sets of 3
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/
// variables that track the game state
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
//store reference to elements in the HTML
const squareEls = document.querySelectorAll(".sqr"); // Board squares
const messageEl = document.getElementById("message"); // Display messages
const boardEl = document.querySelector(".board"); // Board container
const resetBtnEl = document.getElementById("reset"); // Reset button

/*-------------------------------- Functions --------------------------------*/
// Initializes game with empty board
function init() {
  board = ["", "", "", "", "", "", "", "", ""]; // Squares set to empty
  turn = "🐝"; // "X" always goes first
  winner = false; // No winner at start of game
  tie = false; // No tie at start of game
  render(); // Update the game board and message display
}

// Update the game board and message display
function render() {
  updateBoard(); // Show Xs and Os on game board
  updateMessage(); // Show whose turn it is or if some one won
}

// Update board visuals to match the game state
function updateBoard() {
  board.forEach((square, index) => {
    squareEls[index].textContent = square;
  });
}

//Update the message display
function updateMessage() {
  if (!winner && !tie) {
    messageEl.textContent = `Player ${turn}'s turn.`; //Show whose turn
  } else if (tie) {
    messageEl.textContent = "It is a Tie!";
  } else {
    messageEl.textContent = `Congratulations ${winner} WINS!!`; //Show who won
  }
}

// Handle click event of square
function handleClick(event) {
  const squareIndex = event.target.id; //get the index of clicked square
  if (board[squareIndex] !== "" || winner) {
    return; //stop if the square is already taken or if there is a winner
  }
  placePiece(squareIndex); //place your x or o
  checkForWinner(); // Check if there is a winner
  checkForTie(); // Check for a tie
  switchPlayerTurn(); // Switch players
  render(); // Updates both updateBoard and updateMessage
  //   updateBoard(); // Update the board to current play
  //   updateMessage(); // Update the message to current play
}

// Place the players X or O on board
function placePiece(index) {
  board[index] = turn; //this will update the board with X or O
}

// Check if there is a winner
function checkForWinner() {
  winningCombos.forEach((combo) => {
    const [a, b, c] = combo;
    // If [a] is not empty and [a] is === [b] and [a] is === [c] then we have a winner!
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a]; // Set winner to X or O
    }
  });
}

// Check if game is a tie
function checkForTie() {
  if (winner) {
    return; //stop checking
  }
  if (board.includes("")) {
    tie = false;
  } else {
    tie = true;
  }
  console.log(`Tie state: ${tie} `);
}

// Switch to the next player
function switchPlayerTurn() {
  if (winner) {
    return;
  }
  turn = turn === "🐝" ? "🦋" : "🐝"; //swap x for o or x
}

/*----------------------------- Event Listeners -----------------------------*/

// Listen for all clicks on the board
boardEl.addEventListener("click", handleClick); //will listen for all the clicks

// Listen for clicks on the reset button
resetBtnEl.addEventListener("click", init); //resetting by calling reset function

// Start the game
init(); // start game
