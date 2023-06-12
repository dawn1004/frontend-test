import React, { FC } from 'react'

interface StatsBarProps {
  team1Value: number;
  team2Value: number;
  maxValue: number;
  title: string;
}

const StatsBar: FC<StatsBarProps> = ({
  team1Value,
  team2Value,
  maxValue,
  title,
}) => {

  const getPercentage = (value: number) => {
    return (100 * value) / maxValue
  }
  
  return (
    <div className='mt-10'>
      <div className='flex items-center'>
        <div className='text-primary text-2xl font-bold -mt-4 mr-3'>{team1Value.toFixed(2).replace(/\.00$/, '')}</div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex justify-end bg-cusGray w-1/2">
            <div 
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center 
              ${getPercentage(team1Value) > getPercentage(team2Value)? 'bg-primary' : 'bg-secondary'  }`} 
              style={{width: `${getPercentage(team1Value)}%`}}
            ></div>
        </div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex bg-cusGray w-1/2">
            <div 
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center 
              ${getPercentage(team1Value) < getPercentage(team2Value)? 'bg-primary' : 'bg-secondary'}`} 
              style={{width: `${getPercentage(team2Value)}%`}}
            ></div>
        </div>
        <div className='text-primary text-2xl font-bold -mt-4 ml-3'>{team2Value.toFixed(2).replace(/\.00$/, '')}</div>
      </div> 
      <div className='text-center font-medium'>{title}</div>     
    </div>

  )
}

export default StatsBar