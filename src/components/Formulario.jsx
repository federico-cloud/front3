import React, { useState } from 'react'
import { ErrorForm } from './Error';
import "../styles/Formulario.css"
import { Card } from './Card';

export const Formulario = ({data, setData, error, setError, send, setSend}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    (data.categoria.trim().length < 3) || (data.nombre.trim().length < 6) 
    ? (
      setError(true),
      setSend(false)
    ) : (
      setSend(true),
      setError(false)
    )
  }

  
  const handleNombreChange = (e) => {
    const newValue = e.target.value;
    setData(prevData => ({ ...prevData, nombre: newValue }));  
  }

  const handleCategoriaChange = (e) => {
    const newValue = e.target.value;
    setData(prevData => ({ ...prevData, categoria: newValue }));  
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"
          onChange={handleCategoriaChange}
          value={data.categoria} 
          placeholder="Ingrese categoria"
        />
        <input type="text"
          value={data.nombre}
          onChange={handleNombreChange}
          placeholder="Ingrese el nombre"
        />
        <button type="submit">Enviar</button>
      </form>

        {error && <ErrorForm/>}
        {send && <Card data={data}/>}
    </>
  );
}
