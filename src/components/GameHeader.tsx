import React, { FC } from 'react';

interface GameHeaderProps {
  homeTeam: string;
  awayTeam: string;
}

const GameHeader: FC<GameHeaderProps> = ({ homeTeam, awayTeam }) => {
  const homeTeamLogo = require(`../assets/${homeTeam}-120.png`);
  const awayTeamLogo = require(`../assets/${awayTeam}-120.png`);
  
  return (
    <div className="Game-header flex items-center justify-center">
      <img src={awayTeamLogo} alt="team 2 logo" className='md:w-28 w-20' data-testid="away-logo" />
      <div className='md:mx-8 mx-4'>
        VS
      </div>
      <img src={homeTeamLogo} alt="team 1 logo" className='md:w-28 w-20' data-testid="home-logo" />
    </div>
  );
};

export default GameHeader;