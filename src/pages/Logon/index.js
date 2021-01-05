//importando dependências do react
import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"

//importando assets
import logoImg from "../../assets/logo.svg"
import heroesImg from "../../assets/heroes.png"
import "./styles.css"
import Api from "../../services/Api"

//arrow function que renderiza o app 
const Logon = () => {
    const [id, setId] = useState("")
    const history = useHistory()

    const handleLogin = async (e) => {
        //'e.preventDefault()' faz com que o comportamento padrão do evento seja anulado
        e.preventDefault()

        try {
            //fazendo request no backend
            const response = await Api.post("/sessao", { id }) 

            //guardando no local storage o nome e id da ong
            localStorage.setItem("idAluno", id)
            localStorage.setItem("nomeAluno", response.data.nome)

            history.push("/perfil")
        } catch {
            alert("Falha no login, tente novamente")
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/cadastro" className="back-link">
                        <FiLogIn size={16} color={"#e02041"} />
                        Não Tenho Cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    )
}
//exportando o app
export default Logon