
import { Board, Pieces } from './classes/controller';

// Create an empty chess board
const board = new Board ('board');
const {boardEl} = board.props();

// Arrange the pieces either as White or Black
const playAs = "white", draggable = true;
const pieces = new Pieces (boardEl, playAs, draggable);

// Draw the empty chess board
board.draw ();
pieces.arrange ();

// board.flip();
// Arrange pieces on the board. If an empty arrangement is parsed, it will
// setup a default arrangement
// pieces.arrange ({
//   whiteArrangement: ['na1','bc1'],
//   blackArrangement: ['rh8', 'bc3']
// });

let dragged;
boardEl.addEventListener('dragstart', function(e) { 
  dragged = e.target;
}, false);

// Events fired on the drop targets
boardEl.addEventListener('dragover', function(e) {
  e.preventDefault();  
}, false);

boardEl.addEventListener('drop', function(e) {
  // Move dragged elem to the selected drop target
  const thisEl = e.target;
  if ((thisEl.classList.contains (['square'])) || (thisEl.classList.contains (['piece']))) {
    
    // If the piece is dragged over another piece, it should be removed  
    if (thisEl.classList.contains ('piece')) {      
      thisEl.src = dragged.src;
    }

    const pieceName = [...dragged.parentElement.classList].find (thisClass => thisClass !== 'square');      
    const prevSquareClass = dragged.parentElement.classList.value = 'square';

    // Remove class for the piece from the previous space
    dragged.classList.remove (prevSquareClass);
    // Add the piece to the new space on the board
    thisEl.appendChild (dragged);
    // Add class for the piece to the new space
    thisEl.classList.add (pieceName);      
  }
}, false);


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