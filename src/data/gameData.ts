import gameData1 from '../games/12771.json';
import gameData2 from '../games/12915.json';
import gameData3 from '../games/12939.json';

export const gameData = [
  {
    gameId: '12771',
    data: {
      playersByTeam: gameData1.playersByTeam,
      recaps: gameData1.recaps,
    },
    away: 'BIF',
    home: 'FHC',
  },
  {
    gameId: '12915',
    data: {
      playersByTeam: gameData2.playersByTeam,
      recaps: gameData2.recaps,
    },
    away: 'BIF',
    home: 'FBK'
  },
  {
    gameId: '12939',
    data: {
      playersByTeam: gameData3.playersByTeam,
      recaps: gameData3.recaps,
    },
    away: 'FHC',
    home: 'IKO'
  }
]