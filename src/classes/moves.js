class Move {
  constructor (boardEl) {
    this.boardEl = boardEl;
    this.dragged;
    this.setupDrag ();
  }
  setupDrag () {    
    this.boardEl.addEventListener('dragstart', function(e) { 
      this.dragged = e.target;
    }, false);
    
    // Events fired on the drop targets
    this.boardEl.addEventListener('dragover', function(e) {
      e.preventDefault();  
    }, false);
  } 
  props () {
    const colors = ['black', 'white'];
    return { colors };
  }
}

class Moves extends Move {
  constructor (boardEl, playAs) {
    super (boardEl);

    this.boardEl = boardEl;   
    this.playAs = playAs;
    this.currentColor = this.playAs;
    this.setupDrop ();        
  }
  setupDrop () {
    const self = this;
    this.boardEl.addEventListener('drop', function(e) {
      
      // Move dragged elem to the selected drop target
      const thisEl = e.target;
      if ((thisEl.classList.contains (['square'])) || (thisEl.classList.contains (['piece']))) {
        
        // If the piece is dragged over another piece, it should be removed  
        if (thisEl.classList.contains ('piece')) {      
          thisEl.src = this.dragged.src;
        }
    
        const pieceName = [...this.dragged.parentElement.classList].find (thisClass => thisClass !== 'square');      
        const prevSquareClass = this.dragged.parentElement.classList.value = 'square';
        
        if (self.canMove(this.dragged, thisEl)) {
          // Switch the move to the other player
          self.switchMove();

          // Remove class for the piece from the previous space
          this.dragged.classList.remove (prevSquareClass);
          // Add the piece to the new space on the board
          thisEl.appendChild (this.dragged);
          // Add class for the piece to the new space
          thisEl.classList.add (pieceName);
        }       
      }
    }, false);
  }  
  // Toggle between black or white after each move
  switchMove () {
    const { colors } = this.props ();
    const newColor = colors.find (m=>m!=this.currentColor);  

    const currentEls = this.boardEl.getElementsByClassName (this.currentColor);
    const newEls = this.boardEl.getElementsByClassName (newColor);

    // Make pieces of the other player draggable after the move
    Array.from (currentEls).forEach (img => {
      img.setAttribute ('draggable', false);
      img.classList.toggle ('draggable');
    });
    Array.from (newEls).forEach (img => { 
      img.setAttribute ('draggable', true);
      img.classList.toggle ('draggable');
    });
    
    // Switch to color to the other player
    this.currentColor = newColor;  
  }
  currentPosition (el) {
    const div = el.tagName === 'IMG' ? el.parentElement : el;
    return div.id;
  }
  pieceColor (el) {
    const img = el.tagName === 'DIV' ? el.firstChild : el;
    return img.dataset.color;
  }
  // Does this square occupy an existing piece?
  squareHasPiece (el) {
    if (el.tagName === 'DIV') {
      return el.length > 0 ? true : false;
    }
    return true;
  }
  isMovingToSameSquare (prevEl, newEl) {    
    const prevPos = this.currentPosition (prevEl);
    const newPos = this.currentPosition (newEl);

    if (prevPos === newPos) {
      return true;
    }
    return false;
  }
  isMovingToSameColor (prevEl, newEl) {
    const prevColor = this.pieceColor (prevEl);
    if (this.squareHasPiece (newEl)) {
      if (prevColor === this.pieceColor (newEl)) {
        return true;
      }
    }    
    return false;
  }
  canMove (prevEl, newEl) {
    // Piece not allowed to move to the same space again      
    if (this.isMovingToSameSquare (prevEl, newEl)) {
      return false;
    }
    // Piece not allowed to occupy a space already occupied by same colored piece
    if (this.isMovingToSameColor (prevEl, newEl)) {
      return false;
    }
    return true;
  }   
}
export { Moves as default };