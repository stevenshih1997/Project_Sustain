import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Main from './containers/Main';
import About from './containers/About';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Route path="/main" component={Main} />
      <Route path="/about" component={About} />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);
