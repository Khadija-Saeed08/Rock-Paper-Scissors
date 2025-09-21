import React from 'react'
import './Result.css'

const Result = (props) => {
    let result = '';

  if (props.state === 0 || props.Compstate === 0) {
    result = ''; 
  } else if (props.state === props.Compstate) {
    result = 'Draw';
  } else if (
    (props.state === 1 && props.Compstate === 3) ||
    (props.state === 2 && props.Compstate === 1) ||
    (props.state === 3 && props.Compstate === 2)
  ) {
    result = 'User Won';
  } else {
    result = 'Computer Won';
  }
  return (
    <div className='play-result'>
      <p>{result}</p>
    </div>
  )
}

export default Result
