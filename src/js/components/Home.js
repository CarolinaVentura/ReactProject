import React from "react";
import List from "./List";
import Form from "./Form";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; 

const Home = () => (
  <div>
    <div class="jumbotron text-center bg-info text-white">

    
        <h1>OnTime</h1>
        <p>O dia a dia do mundo em tempo real</p>
    </div>
    <div class="text-center">
      <p>Escolha uma categoria</p>
      <div class="btn-group">
      
      <Link key ="1" to={{ pathname: `/lista/1`}}>
      <button type="button" class="btn btn-warning">Política</button>
      </Link>
      <Link key ="1" to={{ pathname: `/lista/1`}}>
      <button type="button" class="btn btn-warning">Desporto</button>
      </Link>
      <Link key ="2" to={{ pathname: `/lista/2`}}>
      <button type="button" class="btn btn-warning">Tecnologia</button>
      </Link>
      <Link key ="3" to={{ pathname: `/lista/3`}}>
      <button type="button" class="btn btn-warning">Ciências</button>
      </Link>
      <Link key ="4" to={{ pathname: `/lista/4`}}>
      <button type="button" class="btn btn-warning">Política</button>
      </Link>
      <Link key ="5" to={{ pathname: `/lista/5`}}>
      <button type="button" class="btn btn-warning">Economia</button>
      </Link>
      <Link key ="6" to={{ pathname: `/lista/6`}}>
      <button type="button" class="btn btn-warning">Sociedade</button>
      </Link>
      </div>
    </div>

</div>
);
export default Home;