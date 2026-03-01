import { Link, useSearchParams, useParams } from "react-router-dom"
import cao from './cao.jpg'

function ContactPage({children}) {
    const [search] = useSearchParams()
    const {user} = useParams() 

    return (
        <>
        <img src={cao} style={{'border-radius': '10px', 'height': '150px'}}/>
        <h1 style={{'margin': '0px'}}>Para entrar em contato com {user} ligue para:</h1><br />
        <h2>(12) 123456789</h2>
        <Link to='http://localhost:5173/'><h3>Va para a home!</h3></Link>
        <p>Os parâmetros de consulta foram: {search.keys()}</p>
        </>
    )
}

export default ContactPage
