import './App.css'

function Button({children='default', ...props}) {
  return (
    <button className="button" {...props} onClick={() => {alert('pressionado')}}>
      {children}
    </button>
  )
}

function App() {
  return (
    <>
      <Button children='botão1' title='botao'/>
      <Button children='botão2'/>
      <Button children='botão3'/>
    </>
  )
}

export default App
