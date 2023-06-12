export interface GameStats {
  gameKey?: string
  periodNumber: number
  gameStatsId: number
  status: string
  awayTeamId: string
  awayTeamName: string
  awayG: number
  awayPIM: number
  awayFOW: number
  awaySOG: number
  awaySPG: number
  awaySaves: number
  awayGA: number
  awaySavesPerShot: number
  awayPP_perc: number
  awaySH_perc: number
  awayPPG: number
  awaySHG: number
  awayPPGA: number
  awaySHGA: number
  awayNumPP: number
  awayNumSH: number
  awayHits: number
  awayPPSOG: number
  awayactiontype: string
  awayteamId: string
  startDateTime: string
  endDateTime: string
  statusString: string
  statsId?: number
  homeTeamId: string
  homeTeamName: string
  homeG: number
  homePIM: number
  homeFOW: number
  homeSOG: number
  homeSPG: number
  homeSaves: number
  homeGA: number
  homeSavesPerShot: number
  homePP_perc: number
  homeSH_perc: number
  homePPG: number
  homeSHG: number
  homePPGA: number
  homeSHGA: number
  homeNumPP: number
  homeNumSH: number
  homeHits: number
  homePPSOG: number
  homeactiontype: string
  hometeamId: string
}

export interface StructuredGameData {
  periodNumber: number;
  gameStatsId: number;
  status: string;
  startDateTime: string;
  endDateTime: string;
  statusString: string;
  statsId?: number;
  gameKey?: string;
  away: {
    teamId: string;
    teamName: string;
    g: number;
    PIM: number;
    FOW: number;
    SOG: number;
    SPG: number;
    Saves: number;
    GA: number;
    SavesPerShot: number;
    PP_perc: number;
    SH_perc: number;
    PPG: number;
    SHG: number;
    PPGA: number;
    SHGA: number;
    numPP: number;
    numSH: number;
    hits: number;
    PPSOG: number;
    actiontype: string;
  };
  home: {
    teamId: string;
    teamName: string;
    g: number;
    PIM: number;
    FOW: number;
    SOG: number;
    SPG: number;
    Saves: number;
    GA: number;
    SavesPerShot: number;
    PP_perc: number;
    SH_perc: number;
    PPG: number;
    SHG: number;
    PPGA: number;
    SHGA: number;
    numPP: number;
    numSH: number;
    hits: number;
    PPSOG: number;
    actiontype: string;
  };
}