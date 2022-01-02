import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './styles/Base.css';
import Index from './pages/index.js';

// import NotFound from './pages/404.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/invite" component={() => {
          window.location.href = "https://discord.com/oauth2/authorize?client_id=772935872646610994&permissions=281600&scope=bot%20applications.commands";
          return null;
        }} />
        <Route path="/discord" component={() => {
          window.location.href = "https://discord.gg/jRUWbXhCYN";
          return null;
        }} />
        <Route path="/docs" component={() => {
          window.location.href = "https://docs.treefarmer.xyz";
          return null;
        }} />
        <Route exact path="/">
          <Index />
        </Route>
        <Route exact path="*">
          {/* <NotFound /> */}
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
