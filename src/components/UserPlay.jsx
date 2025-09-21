import React, { useState } from 'react'
import './UserPlay.css'
import ComputerPlay from './ComputerPlay';

const UserPlay = (props) => {

  function handleClick(num){
    props.setState(num);
    props.randomChoose(num);

  }
  return (
    <div className='b2'>
      <div className='user-play'>
        <button id='rock' onClick={()=>{handleClick(1)}}>🗿</button>
        <button id='paper' onClick={()=>{handleClick(2)}}>📄</button>
        <button id='scissors' onClick={()=>{handleClick(3)}}>✂️</button>
        <button type='reset' onClick={()=>{handleClick(0)}}>Reset</button>
      </div>
      <br />
    <div className='choice-made '>
      {props.state === 0 && <p id='user-choice'></p>}
      {props.state === 1 && <p id='user-choice'>🗿</p>}
      {props.state === 2 && <p id='user-choice'>📄</p>}
      {props.state === 3 && <p id='user-choice'>✂️</p>}
    </div>
    </div>
  )
}

export default UserPlay
