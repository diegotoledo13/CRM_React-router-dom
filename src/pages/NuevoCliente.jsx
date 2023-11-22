import React from 'react'
import { useNavigate } from 'react-router-dom'

const NuevoCliente = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className=" font-black text-4xl text-blue-900">Nuevo Clientes</h1>
      <p className=" mt-3">LLena todos los cambios para registrar un nuevo cliente</p>
      <div className=' flex justify-end'>
        <button type="button"
                className=' bg-blue-800 text-white px-3 py-1 font-bold uppercase'
                onClick={() => navigate(-1)}>Volver</button>
      </div>
    </>
  )
}

export default NuevoCliente