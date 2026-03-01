import { useState } from "react"
import { useForm } from "react-hook-form"
import './FormNovo.css'


function FormNovo(){

  const {register, handleSubmit} = useForm()

  return (
    <>
    <div className="form-novo">
    <p>Formulário com React</p>
    <form >
      <input {...register('username', { required: true })} placeholder="UserName"/>
      <br />
      <input type="submit" value="Submit" />
    </form>
    </div>
    </>
  )
}

export default FormNovo