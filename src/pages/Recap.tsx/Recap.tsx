import { FC, useEffect, useState } from 'react';
import '../../App.css';
import GameHeader from '../../components/GameHeader';
import StatsBar from '../../components/StatsBar';
import stats from '../../data/stats';
import { gameStatsKeys, structureGameData } from '../../utils/structureGameData';
import { GameStats, StructuredGameData } from '../../interfaces/game'
import DropDownMenu from '../../components/DropDownMenu';
import { useParams } from 'react-router-dom';
import { gameData } from '../../data/gameData';


const Recap: FC = () => {
  let { matchId } = useParams(); 
  const [recaps, setRecaps] = useState<typeof gameData[0]['data']['recaps'] | null>(null)    // recap state for changing recap
  const [games, setGames] = useState<GameStats[]>([]);                                       // unstructured game statistic data
  const [formattedGameStat, setFormattedGameStat] = useState<StructuredGameData>();          // structured game statistic data
  const [gameKeys, setGameKeys] = useState<string[]>([]);                                    // game keys are the game number eg: 'gameRecap', '0', '1'
  

  useEffect(() =>{
    const game = gameData.find(game => game.gameId === matchId);
    setRecaps(game ? game.data.recaps : null);
  },[matchId])

  // 1. Store the statistic json data to games state and make it array of object instead of object 
  // 2. Store the game number ti gameKeys state to be use on dropdown menu and changing the game number
  useEffect(()=>{
    setGames([])
    setGameKeys([])
    for (const key in recaps) {
      setGames(prevVal => {
        const newArray = [...prevVal];
        newArray.push({gameKey: key ,...recaps[key as keyof typeof recaps]});
        return newArray;
      })
      setGameKeys(prevVal => {
        const newArray = [...prevVal]; 
        newArray.push(key);
        return newArray;
      })
    }
  },[recaps])

  useEffect(() => {
    formatGameStat()
  },[games])

  const handleDropDownOnchange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    formatGameStat(e.target.value)
  }

  // find the game by gamekey and format/restructure.
  const formatGameStat = (gameKey?: string) => {
    if(games.length){
      if(gameKey){
        const result = games.find(game => {
          return game.gameKey === gameKey
        })
        if(result){
          setFormattedGameStat(structureGameData(result))
          return
        }
      }
      setFormattedGameStat(structureGameData(games[games.length-1]))
    }
  }


  return (
    <div className="Recap bg-black min-h-screen relative">
      <div className='container max-w-3xl md:px-12 px-4 py-6 mx-auto bg-white min-h-screen'>
      <DropDownMenu handleOnChange={handleDropDownOnchange} gameKeys={gameKeys} />
        {recaps?.gameRecap && <GameHeader homeTeam={recaps.gameRecap.homeTeamId} awayTeam={recaps.gameRecap.awayTeamId} />}
        {/* {formattedGameStat?.gameKey} */}
        <div className='flexs mt-12'>
          {
            formattedGameStat?.gameStatsId?
            gameStatsKeys.map((key, idx) => 
              <StatsBar 
                key={idx} 
                team1Value={Number(formattedGameStat.away[key as keyof typeof formattedGameStat.away])} 
                team2Value={Number(formattedGameStat.home[key as keyof typeof formattedGameStat.away])} 
                maxValue={stats[key as keyof typeof stats].maxNum} 
                title={stats[key as keyof typeof stats].meaning}
              />
            ):
            null
          }
        </div>        
      </div>

    </div>
  );
}

export default Recap;
