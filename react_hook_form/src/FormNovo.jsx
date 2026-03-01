import { useState } from "react"
import { useForm } from "react-hook-form"
import './FormNovo.css'


function FormNovo(){

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = (data, e) => {
    console.log(data)
  }

  return (
    <>
    <div className="form-novo">
    <p>Formulário com React</p>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('nome', {required: {value: true, message: 'Nome é obrigatório'}, minLength: {value: 3, message: 'Nome deve conter ao menos 3 caracteres'}})} placeholder="Username"/>
      <br />
      {errors.nome && <span style={{'color': 'red'}}>{errors.nome.message}</span>}
      <input type="number" {...register('idade', {required: {value: true, message: 'Idade é obrigatório'}, min: {value: 1, message: 'idade deve ser igual ou maior que 1'}})}/>
      <br />
      {errors.idade && <span style={{'color': 'red'}}>{errors.idade.message}</span>}
      <p>Informe seu gênero:</p>
      <input {...register('radio')} type="radio" id='radio-masc'/>
      <label htmlFor="radio-masc">masculino</label><br />
      <input {...register('radio')} type="radio" id='radio-fem'/>
      <label htmlFor="radio-fem">feminino</label>
      <br />
      <input type="submit" value="Submit" />
      <br />
      
    </form>
    </div>
    </>
  )
}

export default FormNovo
