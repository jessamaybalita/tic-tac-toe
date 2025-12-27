
import {Gameboard, markBoard} from './gamelogic.js';



// markBoard();
const Player = (name, symbol) => ({
    name, 
    symbol,
    createPlayer(name, symbol) {
        console.log(`Player ${name} as the symbol ${symbol}`);
    }
});
const playerX = Player("Player X", "X");
const playerO = Player("Player O", "O");
let currentPlayer = playerO;


(function gameLoop() {
    
    

   
    markBoard(currentPlayer);
    

    
    
    
    
    

})();

