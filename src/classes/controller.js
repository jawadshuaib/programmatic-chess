import Board from './board';
import Pieces from './pieces';

import '../css/index.css';
import '../css/pieces.css';

// Draw an empty chess board
const board = new Board ('board');
const {boardEl} = board.props();

// Arrange the pieces either as White or Black
const playAs = "white";
const pieces = new Pieces (boardEl, playAs);


export { board, pieces };