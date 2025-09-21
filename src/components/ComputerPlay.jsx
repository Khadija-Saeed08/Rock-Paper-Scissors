import React, { useState } from 'react'
import './ComputerPlay.css'

const ComputerPlay = (props) => {

  return(
    <div className="computer-choice-container b1">
      <p>Computer choice</p>
      <p className="computer-choice-text"> 
      {props.Compstate === 1 ? "🗿" :
      props.Compstate === 2 ? "📄" :
      props.Compstate === 3 ? "✂️" :
      ""}</p>
    </div>
  )
  
}

export default ComputerPlay
