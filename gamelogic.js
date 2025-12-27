

const Player = (name, symbol, x, y) => {
    return {
        name, 
        symbol, 
        x: Number(x), 
        y: Number(y)
    }


}

export const Gameboard = {
    gameboard: ["", "", "", "", "", "", "", "", ""],
    winCombos: [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ],
    checkWinner(player) {
        for (let combo of this.winCombos) {
        if (this.gameboard[combo[0]] === player.symbol &&
            this.gameboard[combo[1]] === player.symbol &&
            this.gameboard[combo[2]] === player.symbol) {
                console.log(`Player ${player.name} wins!`);
                return;
            }
        
    }
    }
};



export function markBoard() {
    // get board positions
    document.querySelectorAll('#boardCell').forEach(
    cell => {
        cell.addEventListener('click', () =>{
    // e.preventDefault();
    const position = cell.dataset.position;
    
    const player1 = Player("Player 1", "X", position);
    cell.textContent = player1.symbol;
    console.log(Gameboard(position, player1.symbol));
    }
      )})
};