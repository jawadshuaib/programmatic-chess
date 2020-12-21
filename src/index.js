
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

// Check for legal moves and setup drag/drop
const moves = new Moves (boardEl, pieces.playAs);

// Previous button
let moveNumber;
document.getElementById ('prev').addEventListener ('click', () => {
  moveNumber = moves.moveNumber;
  const arrangement = moves.getArrangementForMoveNumber (moveNumber);  
  moves.decrementMoveNumber ();
  console.log (moveNumber, arrangement);
  
  pieces.arrange (arrangement);  
});

// Programmatically flip the board
// board.flip();
// pieces.arrange ();

// Arrange pieces on the board. If an empty arrangement is parsed, it will
// setup a default arrangement
// pieces.arrange ({
//   whiteArrangement: ['na1','bc1'],
//   blackArrangement: ['rh8', 'bc3']
// });