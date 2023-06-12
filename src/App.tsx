import React from 'react'
import { gameData } from './data/gameData'
import './App.css'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const navigate = useNavigate()

  return (
    <div className="App bg-black min-h-screen relative pb-1">
      <div className='container max-w-3xl md:px-12 px-4 py-6 mx-auto bg-gray-50 min-h-screen'>
        <h1 className='text-3xl font-bold text-center text-primary mb-12 mt-6'>Front-end Test React</h1>
        {
          gameData.map((game, idx) => 
          <div 
          key={idx} 
          className='bg-white flex items-center justify-center border-2 px-4 py-4 mb-8 rounded-xl cursor-pointer hover:border-2 hover:border-secondary shadow-hover transition-all'
          onClick={()=>{navigate(game.gameId)}}
          data-testid={'match-container-'+game.gameId}
          >
            <img src={require(`./assets/${game.away}-120.png`)} alt={game.away} data-testid={'away-logo'} />
            <div className='md:mx-12 mx-4 font-semibold text-lg text-gray-800'>VS</div>
            <img src={require(`./assets/${game.home}-120.png`)} alt={game.home} data-testid={'home-logo'} />
          </div>)
        }
      </div>
    </div>
  )
}

export default App