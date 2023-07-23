import React from 'react'
import './rules.css'
import RulesImg from '../assets/image-rules.svg'
import Close from '../assets/icon-close.svg'

const Rules = () => {
  return (
    <div className='rules-container'>
        <p>
            RULES
        </p>
        <div className='rules-img'>
            <img src={RulesImg} alt="Rules Image" />
        </div>
        <div>
            <img src={Close} alt="Close Icon" />
        </div>
    </div>
  )
}

export default Rules