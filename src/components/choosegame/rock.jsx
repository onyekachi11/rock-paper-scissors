import React from 'react'
import RockImg from '../../assets/icon-rock.svg'

const Rock = () => {
    return (
      <div className='game-img rock'>
          <div className='game-img-1'>
          <img src={RockImg} alt="rock" />
          </div>
        </div>
    )
  }

export default Rock