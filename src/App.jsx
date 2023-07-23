import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rock from './assets/icon-rock.svg'
import Paper from './assets/icon-paper.svg'
import Scissors from './assets/icon-scissors.svg'
import Rules from './components/rules'

function App() {
  const [count, setCount] = useState(0)

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
        <div className='game-img-container'>
          <div className='game-img-firstsection'>
          <div className='game-img paper'>
            <div className='game-img-1'>
            <img src={Paper} alt="Paper" />
            </div>
          </div>
          <div className='game-img scissors'>
          <div className='game-img-1'>
            <img src={Scissors} alt="Scissors" />
            </div>
          </div>
          </div>
          <div className='game-img rock'>
          <div className='game-img-1'>
            <img src={Rock} alt="Rock" />
            </div>
          </div>
        </div>
        <div>
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
