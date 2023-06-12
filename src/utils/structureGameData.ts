import { GameStats } from "../interfaces/game"
import { StructuredGameData } from "../interfaces/game"

export const structureGameData = (gameStats: GameStats): StructuredGameData => {
  return {
    periodNumber: gameStats.periodNumber,
    gameStatsId: gameStats.gameStatsId,
    status: gameStats.status,
    startDateTime: gameStats.startDateTime,
    endDateTime: gameStats.endDateTime,
    statusString: gameStats.statusString,
    statsId: gameStats.statsId,
    gameKey: gameStats.gameKey,
    away: {
      teamId: gameStats.awayTeamId,
      teamName: gameStats.awayTeamName,
      g: gameStats.awayG,
      PIM: gameStats.awayPIM,
      FOW: gameStats.awayFOW,
      SOG: gameStats.awaySOG,
      SPG: gameStats.awaySPG,
      Saves: gameStats.awaySaves,
      GA: gameStats.awayGA,
      SavesPerShot: gameStats.awaySavesPerShot,
      PP_perc: gameStats.awayPP_perc,
      SH_perc: gameStats.awaySH_perc,
      PPG: gameStats.awayPPG,
      SHG: gameStats.awaySHG,
      PPGA: gameStats.awayPPGA,
      SHGA: gameStats.awaySHGA,
      numPP: gameStats.awayNumPP,
      numSH: gameStats.awayNumSH,
      hits: gameStats.awayHits,
      PPSOG: gameStats.awayPPSOG,
      actiontype: gameStats.awayactiontype
    },
    home: {
      teamId: gameStats.homeTeamId,
      teamName: gameStats.homeTeamName,
      g: gameStats.homeG,
      PIM: gameStats.homePIM,
      FOW: gameStats.homeFOW,
      SOG: gameStats.homeSOG,
      SPG: gameStats.homeSPG,
      Saves: gameStats.homeSaves,
      GA: gameStats.homeGA,
      SavesPerShot: gameStats.homeSavesPerShot,
      PP_perc: gameStats.homePP_perc,
      SH_perc: gameStats.homeSH_perc,
      PPG: gameStats.homePPG,
      SHG: gameStats.homeSHG,
      PPGA: gameStats.homePPGA,
      SHGA: gameStats.homeSHGA,
      numPP: gameStats.homeNumPP,
      numSH: gameStats.homeNumSH,
      hits: gameStats.homeHits,
      PPSOG: gameStats.homePPSOG,
      actiontype: gameStats.homeactiontype
    }
  }
}

export const gameStatsKeys: string[] = [
  'g',
  'PIM',
  'FOW',
  'SOG',
  'SPG',
  'Saves',
  'GA',
  'SavesPerShot',
  'PP_perc',
  'SH_perc',
  'PPG',
  'SHG',
  'PPGA',
  'SHGA',
  'numPP',
  'numSH',
  'hits',
  'PPSOG'
]