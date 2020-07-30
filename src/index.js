import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const NotFound404 = () => (
  <h1>Not found</h1>
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo} exact />
      <Route path='/cadastro/categoria' component={CadastroCategoria} exact />
      <Route component={NotFound404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
