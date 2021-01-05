//importando dependências do react
import React, { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link, useHistory } from "react-router-dom"

//importando assets
import "./styles.css"
import Api from "../../services/Api"
import logoImg from "../../assets/logo.svg"

const Registro = () => {
    //usando o estado para alterar o valor dos inputs
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("")
    const [rg, setRg] = useState("")

    const history = useHistory()

    //função responsável por fazer o cadastro do usuário, passando como parâmetro o 'event'
    const handleRegistro = async (e) => {
        //'e.preventDefault()' faz com que o comportamento padrão do evento seja anulado
        e.preventDefault()

        //guardando na variável os dados de input da ong
        const insert = {
            nome,
            sobrenome,
            email,
            rg
        }

        try {
            //inserindo esses dados no backend com a api
            const response = await Api.post("alunos", insert)

            history.push("/")

            //acessando o 'id' da ong
            alert(`Seu ID de acesso ${response.data.id}`)
        } catch (err) {
            console.log(err)
            alert("Erro no cadastro, tente novamente")
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma, organize suas liçoes e compartilhe.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para o logon
                    </Link>
                </section>

                <form onSubmit={handleRegistro}>
                    <input required placeholder="Nome do Aluno" value={nome} onChange={e => setNome(e.target.value)} />
                    <input required placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)} />
                    <input required type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <div className="input-group">
                        <input required placeholder="RG" value={rg} onChange={e => setRg(e.target.value)} />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Registro