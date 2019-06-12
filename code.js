class TicTacToeGame {
  //draw out initial board
  drawBoard(){
    document.body.innerHTML = "";
    let gameBoard = document.createElement('div');
    gameBoard.id = 'gameboard';
    gameBoard.classList.add('board');
    
    //create square elements:
    this.board.forEach((square, index)=> {
      let squareElement = document.createElement('div');
      squareElement.id = index;
      squareElement.classList.add('square');
      //add square to gameboard
      gameBoard.appendChild(squareElement);
    });
    //add gameboard to DOM
    document.body.appendChild(gameBoard);
  }
  //call start to start game
  start(){
     this.board = ["", "", "",
                   "", "", "",
                   "", "", ""];
     this.drawBoard();                    
    
  }
}

const game = new TicTacToeGame();
game.start();