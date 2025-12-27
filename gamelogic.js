
// The Players

export const Player = (name, symbol) => {
    return {
        name,
        symbol,
        getCurrentPlayer(){
            return this.symbol === "X" ? playerX : playerO;
        }
    }
}



// The Game 

export const Gameboard = {
    gameOver: false,
    gameboard: ["", "", "", "", "", "", "", "", ""],
    winCombos: [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ],
    checkWinner(player) {
        // intersetion of what is on the board and 
        // which winning combos have the current players' symbol
        for (let combo of this.winCombos) {
        if (this.gameboard[combo[0]] === player.symbol &&
            this.gameboard[combo[1]] === player.symbol &&
            this.gameboard[combo[2]] === player.symbol) {
                console.log(`Player ${player.name} wins!`);
                return this.gameOver = true;
            }
        }
    }
};



export const markBoard = (player) => {
    // get board positions
    document.querySelectorAll('#boardCell').forEach(
    cell => {
        cell.addEventListener('click', () =>{
    const position = cell.dataset.position;
    cell.textContent = player.symbol;
    Gameboard.gameboard[position] = player.symbol;
    
    Gameboard.checkWinner(player);   
    player.name = player.symbol =  player.symbol === "X" ? "O" : "X";
    
    }
      )})
};

