import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './FormAntigo.css'

function FormAntigo() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='user-form'>
      <p>Formulario sem react</p>
    <form action="">
      <label htmlFor="input-name">Insira seu nome:</label>
      <input id='input-name' onChange={()=>console.log('input alterado')} type="text" minLength={3} placeholder='nome'/>
      <br />
      <label htmlFor="input-email">Insira seu email:</label>
      <input type="email" id="input-email" placeholder='email' />
      <br />
      <input type="submit" id='input-submit' value="Enviar dados" />
    </form>
    </div>
    </>
  )
}

export default FormAntigo
