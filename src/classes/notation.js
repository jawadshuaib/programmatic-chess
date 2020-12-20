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

class Notation {
  constructor (boardEl) {
    if (boardEl===undefined)
      throw "Board object nees to be created"

    this.boardEl = boardEl;
  }
  // constructor (totalGuesses, speed) {
  //   this.totalGuesses = totalGuesses || 10;
  //   this.speed = speed || 3000;
  // }

  generateRandomInteger (min, max) {
    return Math.floor(Math.random() * max) + min;
  };
  
  generateRandomNotation (cols) {
    const row = this.generateRandomInteger(1, cols.length);
    const col = cols[this.generateRandomInteger(0, cols.length-1)]
    return `${col}${row}`;
  }  

  guess () {    
    
    const cols = this.boardEl.props().cols;          
    let randNotation,prevNotation;
    
    // Make sure we don't get repeat
    while (randNotation == prevNotation) {
      randNotation = this.generateRandomNotation (cols);    
    }
    
    // console.log (randNotation);          
    prevNotation = randNotation;      
    return randNotation;
  }
}

export { Notation as default };