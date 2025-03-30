import Guess from './Guess'
import Dice from './Dice';
import './App.css'
import { useState } from 'react';

function App() {

  const [status, setStatus] = useState(false);
  const [game, setGame] = useState(null);

  const play = (game) => {
    setStatus(true);
    setGame(game);
  }
  
  const games = [
    {id: 1, name: "Guess the number", component: <Guess setStatus={setStatus}/>},
    {id: 2, name: "Roll a dice", component: <Dice setStatus={setStatus}/>}
  ]

 

  return (
    <>
      {!status ? (
        <div className='size-full font-mono'>
          <h1 className='text-7xl w-full text-center p-20'>YOUR GAMES</h1>
          <div className="games flex justify-center">
            {games.map((game) => (
              <div className='border-1 p-4 flex flex-col items-center justify-center w-[240px] bg-gray-400 rounded-2xl shadow-lg shadow-black m-2' key={game.id}>
                <p className='text-xl font-bold'>{game.name}</p>
                <button className='border-1 border-black bg-blue-400 p-2 w-[150px] mt-5 text-white' onClick={() => play(game)}>Start game</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        game.component
      )}
    </>
  )
}

export default App
