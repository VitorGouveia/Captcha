//importando as dependências do react
import React from "react"

//importando o logon
import Routes from "./routes"

//importando o global css
import "./global.css"

//arrow function que renderiza o app 
const App = () => {
    /**
     * O React só possui uma forma de alterar um valor de uma variável, sobrepondo-o, usando 'useState()'
     * O 'useState()' retorna dois valores em um array:
     *     [0]: O primeiro valor do array é a variável onde usaremos o estado
     *     [1]: O segundo valor do array é uma função que troca o valor da variável que está usando o 'state'
     */ 
    // let [counter, setCounter] = useState(0)
    // const increment = () => setCounter(counter +1)

    return (
        <Routes />
    )
}
//exportando o app
export default App