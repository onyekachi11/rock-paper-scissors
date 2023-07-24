import { useState } from 'react'
import './App.css'
import Rock from './assets/icon-rock.svg'
import Paper from './assets/icon-paper.svg'
import Scissors from './assets/icon-scissors.svg'
import Rules from './components/rules'
import Gamechoice from './components/gamechoice/gamechoice'

function App() {
  const [activeComponent, setActiveComponent] = useState(1);

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
            12
          </p>
        </div>
      </div>
      <section>
         <div  className={activeComponent === 1 ? 'game-img-container' : 'hide '}>
         <div className='game-img-firstsection'>
          <div className='game-img paper' onClick={handleNext}>
            <div className='game-img-1'>
            <img src={Paper} alt="Paper" />
            </div>
          </div>
          <div className='game-img scissors' onClick={handleNext}>
          <div className='game-img-1'>
            <img src={Scissors} alt="Scissors" />
            </div>
          </div>
          </div>
          <div className='game-img rock' onClick={handleNext}>
          <div className='game-img-1'>
            <img src={Rock} alt="Rock" />
            </div>
          </div>
        </div>
        {activeComponent === 2  && <div className='ame-img-container'><Gamechoice  handleBack={handleBack}/></div> }
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
