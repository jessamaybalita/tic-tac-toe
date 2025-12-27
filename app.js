
const Gameboard = () => {
    let board = [
        [],
        [],
        []
    ];
    
}

const Player = (name, symbol, x, y) => {
    return {
        name,
        symbol,
        x,
        y,
        markPosition(x, y){
            Gameboard.board[x][y] = symbol;
            console.log(`${name} marked ${symbol} at position (${x}, ${y})`);
        }
    }


}

function playGame() {
    // get board positions
    document.querySelectorAll('#boardCell').forEach(
    cell => {
        cell.addEventListener('click', () =>{
    // e.preventDefault();
    const x = cell.dataset.x;
    const y = cell.dataset.y;
    
    const player1 = Player("Player 1", "X", x, y);
    console.log(player1);
})})


}

playGame();