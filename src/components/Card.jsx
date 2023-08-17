import React from 'react'
import "../styles/Card.css"

export const Card = ({data}) => {
  return (
    <div className='card'>
      <h2>La categoria es:</h2>
      <p>{data.categoria}</p>
      <h2>El nombre es:</h2>
      <p>{data.nombre}</p>
    </div>
  )
}
