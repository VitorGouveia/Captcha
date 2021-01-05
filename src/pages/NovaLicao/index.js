//importando dependências do react
import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"

//importando assets
import "./styles.css"
import logoImg from "../../assets/logo.svg"
import Api from "../../services/Api"

const NovaLicao = () => {
    const [titulo, setTitulo] = useState("")
    const [materia, setMateria] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data, setDataEntrega] = useState("")
    const idAluno = localStorage.getItem("idAluno")
    const history = useHistory()

    const handleNovaLicao = async (e) => {
        e.preventDefault()

        const insert = {
            titulo,
            materia,
            descricao,
            data
        }

        try {
            await Api.post("licoes", insert, {
                headers: {
                    Authorization: idAluno
                }
            })

            history.push("/perfil")
        } catch(err) {
            alert("Erro ao cadastrar lição, tente novamente")
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo lição</h1>
                    <p>Descreva a lição detalhadamente e se organize</p>

                    <Link to="/perfil" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNovaLicao}>
                    <input placeholder="Título da lição" value={titulo} onChange={e => setTitulo(e.target.value)}/>
                    <input placeholder="Matéria da lição" value={materia} onChange={e => setMateria(e.target.value)}/>
                    <textarea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                    <input placeholder="Data da entrega" value={data} onChange={e => setDataEntrega(e.target.value)}/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default NovaLicao