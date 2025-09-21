import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './components/Result'
import UserPlay from './components/UserPlay'
import ComputerPlay from './components/ComputerPlay'

function App() {
  const [state,setState]=useState(0);
  const [Compstate,setCompState]=useState(0);
  function randomChoose(num){
    let choice;
    if(num!=0)
      choice = Math.floor(Math.random() * 3) + 1;
    else
     choice=0
    setCompState(choice);
  }
  return (
    <div>
    <div className='user-play-main'>
      <div className='card'>
        <UserPlay state={state} setState={setState} randomChoose={randomChoose}/>
      </div>
      <div className='card'>
      <ComputerPlay Compstate={Compstate} setCompState={setCompState}/>
      </div>
    </div>
    <div className='result-container'>
      <Result state={state} Compstate={Compstate}/>
    </div>
    </div>
  )
}

export default App
