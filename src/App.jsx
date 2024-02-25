import './App.css'
import { useState } from 'react';
import Game from './assets/components/Game'
import OpponentOptions from './assets/components/OpponentOptions'

function App() {
  const baseComputerOpponent = {
    active: false,
    algo: "dumb",
    playingAs: "O"
  };

  const [compOpponent, setCompOpponent] = useState(baseComputerOpponent);

  return (
    <>
      <OpponentOptions opponent={compOpponent} setCompOpponent={setCompOpponent}></OpponentOptions>
      <Game opponent={compOpponent}></Game>
    </>
  )
}

export default App
