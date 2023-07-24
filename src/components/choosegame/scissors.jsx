import React from 'react'
import ScissorsImg from '../../assets/icon-scissors.svg'

const Scissors = () => {
    return (
      <div className='game-img scissors'>
          <div className='game-img-1'>
          <img src={ScissorsImg} alt="Scissors" />
          </div>
        </div>
    )
  }

export default Scissors