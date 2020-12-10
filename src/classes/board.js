class Board {  
  constructor (boardID) {
    boardID = boardID || 'board';    
    
    this.boardEl = document.getElementById (boardID);
    this.boardID = boardID;
    
  }

  props () {
    const boardID = this.boardID;
    const boardEl = this.boardEl;
    const cols = 'abcdefgh'.split ('');
    const totalSquares = 64;
    
    return { boardID, boardEl, cols, totalSquares }
  }

  draw () {
    const { boardEl, cols, totalSquares } = this.props();
    let square, col, row, k = 0, m=totalSquares;
    
    // Create squares and assign appropriate positional notation
    for (let i=0;i<totalSquares;i++) {
      
      if (cols[k] !== undefined) {        
        col = cols[k];         
        k++;        
      } else {
        col = cols[0];
        k = 1;
      }
  
      if (i % cols.length === 0) {
        row = m/cols.length;
      }  
    
      const uniqueID = `${boardEl.id}-square-${col}${row}`;
      
      if (document.getElementById (uniqueID) === null) {
        square = document.createElement ('div');
        square.classList.add ('square');
        square.id = uniqueID;
      
        boardEl.appendChild(square);
      }

      // To count rows backwards
      m--;
    }    
  }
}

export { Board as default };