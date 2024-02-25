import Logo from './assets/game-logo.png'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './WINNING_COMBINATIONS'
import GameOver from './components/GameOver'

function helper(gameTurn) {
  let currentTrun = 'X'

      if(gameTurn.length>0 && gameTurn[0].player==='X'){
        currentTrun='O'
      }

      return currentTrun
}
const initialBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]
function App() {
  
 // const [activePlayer,setActivePlayer] = useState('X')
  const [gameTurn,setGameTurn] = useState([])
  let activePlayer = helper(gameTurn)
  let winner
  let hasDraw
  const board = [...initialBoard.map((arrays)=> [...arrays])]
  
  for (const turn of gameTurn) {
      const {square,player} = turn
      const {row,col} = square
      board[row][col] = player
  }
  if(gameTurn.length===9 && !winner){
    hasDraw=true
  }

  for ( const combinations of WINNING_COMBINATIONS) {
    const firstSymbol = board[combinations[0].row][combinations[0].column]
    const secondSymbol = board[combinations[1].row][combinations[1].column]
    const thirdSymbol = board[combinations[2].row][combinations[2].column]

     if(firstSymbol && firstSymbol===secondSymbol && firstSymbol===thirdSymbol){
            winner=firstSymbol
     }
  }
  function handleRematch() {
    winner = undefined
    setGameTurn([])
  }
  function handleSelectSqure(rowIndex,colIndex) {
    
      setGameTurn((prevTurn) => {
      let currentTrun = helper(prevTurn)
      const updatedTurn = [{square: {row :rowIndex ,col : colIndex} , player : currentTrun }, ...prevTurn]

      return updatedTurn
    })
  }
  
  return (
    <>
    <header>
    <img src = {Logo} alt='logo' />
    <h1>Tic-Tac-Toe</h1>
    </header>
    <main>
    <div id='game-container'>
    <ol id='players' className='highlight-player'>
      <Player name='Player 1' symbol='X' isActive={activePlayer==='X'}/>
      <Player name='Player 2' symbol='O' isActive={activePlayer==='O'}/>
    </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onSelectRematch={handleRematch}/>}
       <GameBoard onSelectSquare={handleSelectSqure} gameBoard={board}/>
    </div>
    <Log turns={gameTurn}/>
    </main>
    </>
    
  )
}

export default App
