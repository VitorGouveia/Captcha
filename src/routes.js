//importando dependências do react
import React from "react"
//importando a configuração das rotas
import { BrowserRouter, Route, Switch } from "react-router-dom"

//importando as páginas
import Logon from "./pages/Logon"
import NovaLicao from "./pages/NovaLicao"
import Perfil from "./pages/Perfil"
import Cadastro from "./pages/Cadastro"
import NotFound from "./pages/NotFound"

const Routes = () => {
    return (
        // Roteador da Single Page Application
        //O Browser Router precisa estar em volta das rotas para tudo funcionar
        <BrowserRouter>
            {/* Switch permite que apenas uma página seja mostrada por vez */}
            <Switch>
                {/* Rotas da aplicação */}
                <Route path="/" component={Logon} exact />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/licoes/nova" component={NovaLicao} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes