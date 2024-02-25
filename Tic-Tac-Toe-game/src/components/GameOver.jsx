export default function GameOver({winner,onSelectRematch}) {
    return(
        <div id="game-over">
          <h2>Game over!</h2>
          {winner && <p>{winner} has won</p>} 
          {!winner && <p>It's a draw</p> }
          <button onClick={onSelectRematch}>Rematch!</button>
        </div>
    )
}