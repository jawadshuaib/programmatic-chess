
import { Board, Pieces, Moves } from './classes/controller';

// Create a chess board object
const board = new Board ('board');
const {boardEl} = board.props();

// Arrange the pieces either as White or Black
const playAs = "white", draggable = true;
const pieces = new Pieces (boardEl, playAs, draggable);

// Draw the empty chess board
board.draw ();
pieces.arrange ();

new Moves (boardEl, pieces.playAs);

// Programmatically flip the board
// board.flip();
// pieces.arrange ();

// Arrange pieces on the board. If an empty arrangement is parsed, it will
// setup a default arrangement
// pieces.arrange ({
//   whiteArrangement: ['na1','bc1'],
//   blackArrangement: ['rh8', 'bc3']
// });

/*
// Class to generate random notations
// import Notation from './classes/notation';
const notation = new Notation (board);

let i = 0;
const totalGuesses = 20, speed = 1000;

const notationEl = document.createElement ('span');
notationEl.classList.add ('notations');
boardEl.appendChild(notationEl);

let prevNotation;
const timer = setInterval ( () => {
  
  const randNotation = notation.guess ();
  notationEl.textContent = randNotation.toUpperCase();
  
  // if (i > totalGuesses)
  //   clearInterval (timer);
      
  prevNotation = randNotation;
  i++;
}, speed);


let myGuess;
// Add event listener to the board rather than each div to save on memory
boardEl.addEventListener ('click', square => {
  
  myGuess = square.target.id.split('-')[1];
  // square.target.classList.add ('black-rook');
  if (myGuess == prevNotation) {    
    console.log ("You guessed right!");
  } else {
    console.log (`Wrong guess ${myGuess}`);
  }  
});

// document.addEventListener("DOMContentLoaded", function(e) {// do stuff })
*/
// Add an event listener to each of the Chess pieces
// const piecesEl = [...boardEl.getElementsByClassName ('piece')];
// piecesEl.forEach (piece => {

//   piece.addEventListener ('click', e => {
//     const thisPiece = e.target.parentElement.id;
//     console.log (thisPiece);
//   });  
// });