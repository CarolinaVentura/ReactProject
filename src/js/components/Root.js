import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import List from "./List";
import Home from "./Home";
import Form from "./Form"; 
import Detalhes from "./Detalhes"; 
import ArtigosCategoria from "./ArtigosCategoria";
import User from "./User";
import Callback from "./Callback";
import Autor from "./Autor";



const Root = () => (
  <Router>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <ul className="navbar-nav">

        <li className="nav-item">
            <Link class="nav-link navbar-brand" to="/" >Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/artigos/" exact >Artigos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/formulario/" exact >Adicionar artigo</Link>
        </li>
        
    </ul>
    <ul className="navbar-nav ml-auto">

        <User/>

        </ul>
    </nav>
       

      <Route path="/" exact component={Home} />
      <Route path="/artigos/" component={List} />
      <Route path="/formulario/" component={Form} />
      <Route path ="/detalhes/:id" component = {Detalhes} />
      <Route path ="/lista/:id" component = {ArtigosCategoria} />
      <Route path ="/callback" component = {Callback} />
      <Route path ="/autor/:id" component = {Autor} />
      
          
    </div>
  </Router>
);

export default Root;