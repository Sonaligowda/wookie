import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt='cards'/>
    </div>
  )
}

export default Card