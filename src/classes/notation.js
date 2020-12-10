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