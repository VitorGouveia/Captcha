import React from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import logoImg from "../../assets/logo.svg"
import "./styles.css"

const NotFound = () => {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <h1>Parece que se perdeu!</h1>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <img src={logoImg} alt="Be The Hero"/>
                </form>
            </div>
        </div>
    )
}

export default NotFound