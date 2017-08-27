import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import WPAPI from 'wpapi';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Main from './containers/Main';
import About from './containers/About';
import Survey from './containers/Survey';
import Layout from './components/Layout/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/survey" component={Survey} />
      </Switch>
    </Layout>
  </BrowserRouter>,
  document.getElementById('root'),
);
