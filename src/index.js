import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video/Index'
import CadastroCategoria from '../src/pages/cadastro/Video/Categoria';


//Criar uma página 404 para retornar erro da aplicação
const Pagina404 = () => (<div>Página 404</div>);

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo} exact/>
        <Route path="/src/pages/cadastro/video/categoria" component={CadastroCategoria}/>
        <Route path="/" component={Pagina404} />
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
