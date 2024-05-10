'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import './style.css'

export default function Login () {
  return (
    <div className='form-container sign-in-container'>
      <form action="">
        <h1>Iniciar sesión</h1>
        <div className='social-container'>
          <a href="">fbook</a>
          <a href="">google</a>
        </div>
        <span>o utiliza tu mail</span>
        <input type="text" placeholder='nombre' required />
        <input type="email" placeholder='e-mail' required />
        <input type="password" placeholder='contraseña' required />
        <select name="role" id="role" >
          <option value="Profesor">Profesor/a</option>
          <option value="Alumno">Alumno/a</option>
          <option value="Gestor">Gestor/a</option>
        </select>
        <input type="submit" value="Log in" />
      </form>
    </div>
  )
}
