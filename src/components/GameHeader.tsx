import React, { FC, useEffect } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { singleDesktopAnimation } from '../utils/animateGsap'
interface GameHeaderProps {
  homeTeam: string;
  awayTeam: string;
}

const GameHeader: FC<GameHeaderProps> = ({ homeTeam, awayTeam }) => {
  const homeTeamLogo = require(`../assets/${homeTeam}-120.png`);
  const awayTeamLogo = require(`../assets/${awayTeam}-120.png`);

    // animations
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      singleDesktopAnimation(".away-logo", ".away-logo", "center bottom","top center", false,  { x: 0, opacity: 1}, 0.5)
      singleDesktopAnimation(".home-logo", ".home-logo", "center bottom","top center", false,  { x: 0, opacity: 1}, 0.5)
      singleDesktopAnimation(".vs", ".vs", "center bottom","top center", false,  { y: 0, opacity: 1}, 0.8, 0.2)
      
      // 
    }, [])
  
  return (
    <div className="Game-header flex items-center justify-center">
      <img src={awayTeamLogo} alt="team 2 logo" className='md:w-28 w-20 away-logo opacity-0 -translate-x-10' data-testid="away-logo" />
      <div className='md:mx-8 mx-4 vs opacity-0 translate-y-4 font-bold'>
        VS
      </div>
      <img src={homeTeamLogo} alt="team 1 logo" className='md:w-28 w-20 home-logo opacity-0 translate-x-10' data-testid="home-logo" />
    </div>
  );
};

export default GameHeader;