import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { guess, startGame, restart } from './axios'

function App() {
/* */
  const [hasStarted, setHasStarted] = useState(false) 
  const [hasWon, setHasWon] = useState(false)
  const [number, setNumber] = useState('')
  const [status, setStatus] = useState('')
/* */
  const handleGuess = async () => {
    const response = await guess(number)
      if (response === 'Equal') setHasWon(true)
      else {
        setStatus(response)
        setNumber('')
      }
    }
/* */
  const startMenu =
    <div>
  <button onClick = { ()=>setHasStarted(true)}
      // someFunctionToBackend; and setHasStarted
    > start game </button>
    </div>

const gameMode = 
  <>
  <p>Guess a number between 1 to 100</p>
  <input   // Get the value from input
  ></input>
  <button  // Send number to backend
    onClick={handleGuess}
  disabled={!number} >guess!</button> <p>{status}</p>
  </>

const winningMode = (
    <>
      <p>you won! the number was {number}.</p>
      <button  // Handle restart for backend and frontend
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
