import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

interface DropDownMenuProps {
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  gameKeys: string[]
}

const DropDownMenu: FC<DropDownMenuProps> = ({handleOnChange, gameKeys}) => {
  const navigate = useNavigate()

  return (
    <div className='flex justify-between mb-4'>
      <svg 
      onClick={()=>{navigate('/')}}
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 hover:opacity-70 cursor-pointer hover:bg-gray-100 rounded-full">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>

      <select onChange={handleOnChange} className='w-24 text-primary font-medium cursor-pointer' data-testid="test-dropdown">
        {gameKeys.map(key => 
          <option 
          key={key}
          value={key}
          selected={key === 'gameRecap'}
          >
            {key === 'gameRecap'? `Total` : `Game ${Number(key)+1}`}
          </option>)
        }
      </select>
    </div>

  )
}

export default DropDownMenu