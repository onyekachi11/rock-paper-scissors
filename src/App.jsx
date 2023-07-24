import { useState } from 'react'
import './App.css'
import Rules from './components/rules'
import Gamechoice from './components/gamechoice/gamechoice'
import Paper from './components/choosegame/paper.jsx'
import Rock from './components/choosegame/rock'
import Scissors from './components/choosegame/scissors'

function App() {
  const [activeComponent, setActiveComponent] = useState(1);
  const [userChoice, setUserChoice] = useState('')
  const [score, setScore] = useState(0)


  const handleNext = ()=>{
    setActiveComponent(activeComponent + 1)
  }
  const handleBack = ()=>{
    setActiveComponent(activeComponent - 1)
  }


  return (
    <>
    <main className='container'>
      <div className='scoreboard'>
       <p className='scoreboard-title'>
        ROCK <br/>
        PAPER<br/>
        SCISSORS<br/>
       </p>
        <div className='scoreboard-number'>
          <p className='score' >
            Score
          </p>
          <p className='number'>
            {score}
          </p>
        </div>
      </div>
      <section>
         <div  className={activeComponent === 1 ? 'game-img-container' : 'hide '}>
         <div className='game-img-firstsection'>
          <div onClick={()=>{
            handleNext()
            setUserChoice('paper')
          }}>
          <Paper />
          </div>
          <div onClick={()=>{
            handleNext()
            setUserChoice('scissors')
          }}>
          <Scissors/>
          </div>
          </div>
          <div onClick={()=>{
            handleNext()
            setUserChoice('rock')
          }}> 
          <Rock/>
          </div>
        </div>
        {activeComponent === 2  && <div className='ame-img-container'><Gamechoice  handleBack={handleBack} userChoice={userChoice} setScore={setScore} score={score}/></div> }
        <div className={activeComponent === 1 ? 'rules-btn' : 'rules-btn2'}>
        <button>
          rules
        </button>
        </div>

      </section>
    </main>
      <div className='rules'>
        <Rules/>
      </div>
    </>
  )
}

export default App
