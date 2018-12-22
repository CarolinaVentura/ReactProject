import React, {Component} from "react";
import List from "./List";
import Form from "./Form";
import {ENDPOINT_CAT} from "../constants/services";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"; 


class Home extends React.Component{

  state= {};

    componentDidMount(){
      fetch(`${ENDPOINT_CAT}`).then(res=>res.json()).then((categorias)=>{
        console.log(categorias);
        this.setState({categorias})
      })
    }

    render (){


      if(!this.state.categorias) return null;

      const categorias = this.state.categorias; 
      return(
      <div>
      <div class="jumbotron text-center bg-info text-white">
  
      
          <h1>OnTime</h1>
          <p>O dia a dia do mundo em tempo real</p>
      </div>
      <div class="text-center">
        <p>Escolha uma categoria</p>
        <div class="btn-group">
        {categorias.map(categoria => (
                     <Link key ={categoria.id} to={{ pathname: `/lista/${categoria.id}`}}>
                     <button type="button" class="btn btn-warning">{categoria.tipo}</button>
                     </Link>
        ))}
    
        </div>
      </div>
  
  </div>)
    }
}


export default Home;