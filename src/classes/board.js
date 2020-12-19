class Board {  
  constructor (boardID) {
    boardID = boardID || 'board';    
    
    this.boardEl = document.getElementById (boardID);
    this.boardID = boardID;
    this.flipped = false;
  }

  props () {
    const boardID = this.boardID;
    const boardEl = this.boardEl;
    const cols = 'abcdefgh'.split ('');
    const totalSquares = 64;
    
    return { boardID, boardEl, cols, totalSquares }
  }

  // Flip the board upside down
  flip () {
    const flipIt = !this.flipped;    
    this.flipped = flipIt;
    this.draw (flipIt);
  }

  // Draw a new board
  draw (flipIt) {
    const { boardEl, cols, totalSquares } = this.props();
    let square, col, row, x, k = 0, m=totalSquares;
    boardEl.textContent='';

    // Reverse the columns (i.e. a,b,c,d ---> d,c,b,a)
    if (flipIt)
      cols.reverse();

    // Create squares and assign appropriate positional notation
    for (let i=0;i<totalSquares;i++) {
      
      // Columns
      if (cols[k] !== undefined) {        
        col = cols[k];         
        k++;        
      } else {
        col = cols[0];
        k = 1;
      }
      
      // Rows
      if (i % cols.length === 0) {
        row = m/cols.length;
      }  

      const uniqueID = `${boardEl.id}-square-${col}${flipIt === true ? cols.length+1-row : row}`;      
      square = document.createElement ('div');
      square.classList.add ('square');      
      square.id = uniqueID;
    
      boardEl.appendChild(square);
    
      // To count rows backwards
      m--;
    }    
  }
}

export { Board as default };