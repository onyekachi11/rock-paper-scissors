import React from 'react'
import './gamechoice.css'
import Scissors from '../../assets/icon-scissors.svg'

const Gamechoice = ({handleBack}) => {
  return (
    <>
    <div className='gamechoice'>
        <div className='gamechoice-container'>
            <div className='game-img scissors'>
                <div className='game-img-1'>
                    <img src={Scissors} alt="Scissors" />
                </div>
            </div>
           <p>you picked</p>
        </div>
        <div>
            <div className='game-img scissors'>
                <div className='game-img-1'>
                    <img src={Scissors} alt="Scissors" />
                </div>
            </div>
           <p>The House picked</p>
        </div>
    </div>
    <div className='result'>
        <p>you lose</p>
        <button className='result-btn' onClick={handleBack}>
            play again
        </button>
    </div>
    </>
  )
}

export default Gamechoice