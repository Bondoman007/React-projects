import { useState } from "react"

export default function Player({name,symbol,isActive}) {
  const [selectedTopic,setSelectedTopic] = useState(false)
  const [playerName,setPlayerName] = useState(name)
  function handleClick () {
      setSelectedTopic((selectedTopic) => !selectedTopic)
  }
  function handleChange (e) {
      setPlayerName(e.target.value)
  }
  let newPlayerName = <span className='player-name'>{playerName}</span>
     if(selectedTopic){
       newPlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
     }
     
       return <li className={isActive && 'active'}>
              <span className="player"> 
                  {newPlayerName}
                  <span className='player-symbol'>{symbol}</span>
                </span>
                  <button onClick = {()=> handleClick()}>{selectedTopic ? 'save' : 'edit'}</button>
               
             </li>
}