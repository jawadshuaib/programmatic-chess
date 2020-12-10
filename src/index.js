
import { board, pieces } from './classes/controller';

board.draw ();
pieces.arrange ();

board.flip();
pieces.arrange ({
  whiteArrangement: ['na1','bc1'],
  blackArrangement: ['rh8', 'bc3']
});



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
*/