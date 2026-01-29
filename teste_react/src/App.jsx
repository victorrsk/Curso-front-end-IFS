function Form() {
  return (
    <form action="">
      <label htmlFor="">Nome</label>
      <input type="text" placeholder='seu nome'/>
    </form>
  )
}

function Button() {
  return (
    <button className='bg-purple-500'>Clique</button>
  )
}


function App() {
  return (
    <main>
      <Form/>
      <Button/>     
    </main>
  )
}

export default App
