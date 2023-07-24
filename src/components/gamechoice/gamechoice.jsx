import React, { useEffect, useState } from 'react'
import './gamechoice.css'
import ScissorsImg from '../../assets/icon-scissors.svg'
import Paper from '../choosegame/paper'
import Scissors from '../choosegame/scissors'
import Rock from '../choosegame/rock'

const Gamechoice = ({handleBack,userChoice,score,setScore}) => {
    console.log(userChoice)

    const [computerChoice, setComputerChoice] = useState('')
    const [winOrLose, setWinOrLose] = useState('')

    useEffect(()=>{
        const randomNumber =()=>{
            let number = Math.floor(Math.random() * 3 ) + 1

            if(number == 1){
                setComputerChoice('paper')
            } else
            if(number == 2){
                setComputerChoice('scissors')
            }
            if(number == 3){
                setComputerChoice('rock')
            }
        };
        randomNumber()
    },[])

    useEffect(()=>{
        const finalResult =()=>{
            if ( computerChoice === userChoice){
                setWinOrLose("it's a draw")
            }
            if(userChoice == 'paper' && computerChoice == 'scissors' ){
                setWinOrLose('you lose')
            }
            if(userChoice == 'paper' && computerChoice == 'rock' ){
                setWinOrLose('you win');
                setScore(score + 1)
            }
            if(userChoice == 'scissors' && computerChoice == 'rock' ){
                setWinOrLose('you lose')
            }
            if(userChoice == 'scissors' && computerChoice == 'paper' ){
                setWinOrLose('you win');
                setScore(score + 1)
            }
            if(userChoice == 'rock' && computerChoice == 'paper' ){
                setWinOrLose('you lose')
            }
            if(userChoice == 'rock' && computerChoice == 'scissors' ){
                setWinOrLose('you win');
                setScore(score + 1)
            }
        };
        finalResult()
    },[userChoice,computerChoice])


    
    console.log(computerChoice)
  return (
    <>
    <div className='gamechoice'>
        <div className='gamechoice-container'>
             {userChoice == 'paper' && <Paper/> ||  userChoice == 'scissors' && <Scissors/> || userChoice == 'rock' && <Rock/>}
             <p>you picked</p>
        </div>
        <div>
             { computerChoice && (computerChoice == 'paper' && <Paper/> ||  computerChoice == 'scissors' && <Scissors/> || computerChoice == 'rock' && <Rock/>)}
             <p>The House picked</p>
        </div>
    </div>
    <div className='result'>
        <p>{ winOrLose}</p>
        <button className='result-btn' onClick={handleBack}>
            play again
        </button>
    </div>
    </>
  )
}

export default Gamechoice