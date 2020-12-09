// We use this class to place the pieces on specific spots
// i.e. Rook on A3
class Piece {
  props () {
    const pieces = [
      {
        name: 'rook',
        alias: 'r'
      },
      {
        name: 'knight',
        alias: 'n'
      },
      {
        name: 'bishop',
        alias: 'b'
      },
      {
        name: 'queen',
        alias: 'q'
      },
      {
        name: 'king',
        alias: 'k'
      },
      {
        name: 'pawn',
        alias: 'p'
      }                     
    ];
    const colors = ['black', 'white'];

    return { pieces, colors}
  }

  // create a class name based on piece and color
  className (color, alias) {
    alias = alias.toLowerCase ();    
    
    const piece = this.props ().pieces.filter ( prop => prop.alias === alias)[0];    
    const className = `${color}-${piece.name}`;
    
    return className;
  }

  place (color, alias, position) {
    position = position.toLowerCase ();
    
    const className = this.className (color, alias);
    const squareID = `square-${position}`;    
    const squareEl = document.getElementById (squareID);
    
    squareEl.classList.add (className);  
  }
}

// This class arranges the pieces on the board based on whether the game is being played
// from Black or White's perspective
class Pieces extends Piece {
  constructor (playAs) {
    super ();
    playAs = playAs || 'white';  
      
    const { colors } = this.props ();
    if (colors.includes (playAs)) {
      this.playAs = playAs;
    } else {
      throw 'Invalid color provided. You can either play as Black or White.'
    }
  }
  arrangement () {
    const arrangement = [
      {
        playAs: 'white',
        whiteArrangement: ['ra1', 'nb1', 'bc1', 'qd1', 'ke1', 'bf1', 'ng1', 'rh1', 'pa2', 'pb2', 'pc2', 'pd2', 'pe2', 'pf2', 'pg2', 'ph2'],
        blackArrangement: ['ra8', 'nb8', 'bc8', 'qd8', 'ke8', 'bf8', 'ng8', 'rh8', 'pa7', 'pb7', 'pc7', 'pd7', 'pe7', 'pf7', 'pg7', 'ph7']
      },
      {
        playAs: 'black',
        blackArrangement: ['ra1', 'nb1', 'bc1', 'kd1', 'qe1', 'bf1', 'ng1', 'rh1', 'pa2', 'pb2', 'pc2', 'pd2', 'pe2', 'pf2', 'pg2', 'ph2'],
        whiteArrangement: ['ra8', 'nb8', 'bc8', 'kd8', 'qe8', 'bf8', 'ng8', 'rh8', 'pa7', 'pb7', 'pc7', 'pd7', 'pe7', 'pf7', 'pg7', 'ph7']
      }
    ]
    return arrangement;
  }
  arrange () {
    const arrangement = this.arrangement ().filter (el => el.playAs == this.playAs)[0];
    
    // Arrange white pieces
    arrangement.whiteArrangement.forEach (piecePosition => {
      const { piece, position } = this.getPieceInfo (piecePosition);
      this.place ('white', piece, position);
    });

    // Arrange black pieces
    arrangement.blackArrangement.forEach (piecePosition => {
      const { piece, position } = this.getPieceInfo (piecePosition);
      this.place ('black', piece, position);
    });    
  }
  // Split positions (i.e. rb1 ---> { r, b1 })
  getPieceInfo (piecePosition) {
    const piecePositionArr = piecePosition.split ('');
    const piece = piecePosition[0];
    const position = `${piecePosition[1]}${piecePosition[2]}`;

    return { piece, position };
  }
}
export { Pieces as default };