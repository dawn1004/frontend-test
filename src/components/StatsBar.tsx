import React, { FC, useEffect, useState } from 'react'
interface StatsBarProps {
  team1Value: number;
  team2Value: number;
  maxValue: number;
  title: string;
  delayNumber: number;
}

const StatsBar: FC<StatsBarProps> = ({
  team1Value,
  team2Value,
  maxValue,
  title,
  delayNumber
}) => {
  const [visible, setVisible] = useState(false)

  const getPercentage = (value: number) => {
    return (100 * value) / maxValue
  }

  useEffect(()=>{
    setTimeout(() => {
      setVisible(true)
    }, (delayNumber+6)*125);
  })


  return (
    <div className='mt-10 '>
      <div className='flex items-center'>
        <div className='text-primary text-2xl font-bold -mt-4 mr-3'>{team1Value.toFixed(2).replace(/\.00$/, '')}</div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex justify-end bg-cusGray w-1/2">
            <div 
              className={`relative shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center overflow-hidden`}  //rotate-180
              style={{width: `${getPercentage(team1Value)}%`}}
            >
              {
                visible? <div className={`${getPercentage(team1Value) > getPercentage(team2Value)? 'bg-primary' : 'bg-secondary'} h-full w-full bar-percent-1`}></div>: null
              }
            </div>
        </div>
        <div className="overflow-hidden h-3 mb-4 text-xs flex bg-cusGray w-1/2">
          { 
            visible?
            <div 
              className={`relative shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center overflow-hidden`} 
              style={{width: `${getPercentage(team2Value)}%`}}
            >
              <div className={`${getPercentage(team2Value) > getPercentage(team1Value)? 'bg-primary' : 'bg-secondary'} h-full w-full bar-percent-2`}>
              </div>
            </div>
            :
            null
          }
        </div>
        <div className='text-primary text-2xl font-bold -mt-4 ml-3'>{team2Value.toFixed(2).replace(/\.00$/, '')}</div>
      </div> 
      <div className='text-center font-medium'>{title}</div>     
    </div>

  )
}

export default StatsBar