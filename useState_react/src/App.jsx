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
      <Button children='botão1' title='botao' style={{margin: '10px'}}/>
      <Button children='botão2' style={{margin: '10px'}}/>
      <Button children='botão3' style={{margin: '10px'}}/>
    </>
  )
}

export default App
