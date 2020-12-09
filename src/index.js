
import Board from './board';
import Pieces from './pieces';
import Notation from './notation';
import './index.css';
import './pieces.css';

// Draw the chess board
const board = new Board ('board');
const {boardEl} = board.props();
board.draw ();

// Arrange the pieces either as White or Black
const playAs = "white";
const pieces = new Pieces (playAs);
pieces.arrange ();

// Class to generate random notations
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
