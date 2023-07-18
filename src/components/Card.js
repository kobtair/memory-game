import React from 'react'

export default function Card({image, selected, onClick}) {
  return (
    <div className='card'>
        <div className={selected && 'selected'}>
            <img src={image} alt="" className='card-face' />
            <img className='card-back' alt="" />
            </div>
    </div>
  )
}
