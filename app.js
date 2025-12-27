
import {Gameboard} from './gamelogic.js';



// markBoard();
const Player = (name, symbol) => ({
    name, 
    symbol,
    createPlayer(name, symbol) {
        console.log(`Player ${name} as the symbol ${symbol}`);
    }
});



(function gameLoop() {

    const playerX = Player("Player X", "X");
    const playerO = Player("Player O", "O");

    let currentPlayer = playerO;
    Gameboard.checkWinner(currentPlayer);
    
    currentPlayer = currentPlayer === playerX ? playerO : playerX;

    // for (let combo of winCombos) {
    //     console.log(combo);
    //     if (gameboard[combo[0]] === currentPlayer &&
    //         gameboard[combo[1]] === currentPlayer &&
    //         gameboard[combo[2]] === currentPlayer &&
    //         gameboard[combo[3]] === currentPlayer &&
    //         gameboard[combo[4]] === currentPlayer &&
    //         gameboard[combo[5]] === currentPlayer &&
    //         gameboard[combo[6]] === currentPlayer &&
    //         gameboard[combo[7]] === currentPlayer) {
    //             console.log(`Player ${currentPlayer.name} wins!`);
    //             return;
    //         }
    // }
})();

