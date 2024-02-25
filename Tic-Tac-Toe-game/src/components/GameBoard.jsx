



export default function GameBoard({onSelectSquare,gameBoard}) {
   
    // const [board,setBoard] = useState(initialBoard)
    // function handleClick(rowIndex,index) {
    //     setBoard((prevBoard) => {
    //         const updatedBoard = [...prevBoard.map(innerArray => [...innerArray])]
    //         updatedBoard[rowIndex][index]=active
    //         return updatedBoard
    //     })
    //     onSelectSquare()
    // }

    return (
        <ol id="game-board">
        {gameBoard.map((row,rowIndex)=> (
          <li key={rowIndex}>
             <ol>
                {row.map((playerSymbol,index)=> (
                    <li key={index}>
                      <button onClick={()=>onSelectSquare(rowIndex,index)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                    </li>))}
             </ol>
          </li>))}
        </ol>
    )
}