
import './App.css';
import React, { useState } from 'react';
import { guess, startGame, restart } from './axios'

function App() {
/* */
  const [hasStarted, setHasStarted] = useState(false) 
  const [hasWon, setHasWon] = useState(false)
  const [number, setNumber] = useState('')
  const [status, setStatus] = useState('')
/* */
  const handleStart = async () =>{
    setHasStarted(true)
    await startGame()
    
  }
  const handleGuess = async () => {
    //console.log(number)
    const response = await guess(number)
      if (response === 'Equal') {
        setHasWon(true)
      }
      else {
        setStatus(response)
        setNumber('')
      }
    }
    const handleRestart = async () =>{
      setHasStarted(false)
      await restart()
    }
/* */
  const startMenu =
    <div>
  <button onClick = {handleStart}
      // someFunctionToBackend; and setHasStarted
    > start game </button>
    </div>

const gameMode = 
  <>
  <p>Guess a number between 1 to 100</p>
  <input   type={"text"}// Get the value from input
   onChange={(e)=>{setNumber(e.target.value)}}
  ></input>
  <button  // Send number to backend
    onClick={handleGuess}
    disabled={!number} >guess!
  </button> 
  <p>{status}</p>
  </>

const winningMode = (
    <>
      <p>you won! the number was {number}.</p>
      <button  onClick={handleRestart}
      // Handle restart for backend and frontend
      >restart</button>
  </>
)

  const game=
  <div>
    {hasWon? 
    winningMode : gameMode}
  </div>


  return (
    <div className="App"> 
    {hasStarted ? game : startMenu} </div>
  );
}

export default App;
