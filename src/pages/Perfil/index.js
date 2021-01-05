//importando dependências do react
import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { FiPower, FiTrash2 } from "react-icons/fi"

//importando assets
import "./styles.css"
import Api from "../../services/Api"
import logoImg from "../../assets/logo.svg"

const Perfil = () => {
    const [licoes, setLicoes] = useState([])

    //puxando do localStorage o nome e Id da ong
    const idAluno = localStorage.getItem("idAluno")
    const nomeAluno = localStorage.getItem("nomeAluno")

    const history = useHistory()

    /**
     * dependência do react usada para disparar uma função em um determinado momento
     * primeiro parâmetro:
     *     função a ser executada
     * 
     * segundo parâmetro:
     *     quando a função vai ser executada
    */
    useEffect(() => {
        //passando na rota profile um header com o nome de Authorization que recebe o valor do id da ong cadastrada
        Api.get("perfil", {
            headers: {
                Authorization: idAluno
            }
        }).then(response => {
            setLicoes(response.data)
        })
    }, [idAluno])

    const handleDeletarLicao = async (id) => {
        try {
            //deletando uma lição na rota 'licoes' com o id da lição
            await Api.delete(`licoes/${id}`, {
                headers: {
                    Authorization: idAluno
                }
            })

            //recarregando os dados para mostrar a exclusão em tempo real
            setLicoes(licoes.filter(licao => licao.id !== id))
        } catch {
            alert("Erro ao deletar lição, tente novamente")
        }
    }

    //logout do app 
    const handleLogout = () => {
        //deletando o localstorage inteiro
        localStorage.clear()

        //mandando o usuário para a home
        history.push("/")
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem Vinda {nomeAluno}</span>

                <Link className="button" to="/licoes/nova">Cadastrar nova lição</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Lições cadastradas</h1>

            <ul>
                {/* 
                    Basicamente um for each do svelte
                */}
                {licoes.map(licao => (
                    <li key={licao.id}>
                        <strong>LIÇÃO</strong>
                        <p>{licao.titulo}</p>
    
                        <strong>MATÉRIA</strong>
                        <p>{licao.materia}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{licao.descricao}</p>

                        <strong>DATA</strong>
                        <p>{licao.data}</p>
    
                        <button onClick={() => handleDeletarLicao(licao.id)} type="button" >
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Perfil