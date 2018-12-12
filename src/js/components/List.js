
import React, { Component } from "react";
import { deleteArticle, fetchArticles } from "../actions/index";
import {ENDPOINT} from "../constants/services";

import { connect } from "react-redux";

import {BrowserRouter as Router, Route, Link} from "react-router-dom"; 


let contador = 0; 

const mapDispatchToProps = dispatch => {
  // define as actions a executar quando existirem alterações locais que requerem atualização de state
  return {
    deleteArticle: article=> dispatch(deleteArticle(article)),
      fetchArticles: () => dispatch(fetchArticles()),

      /*<img class="card-img-top" src={"http://localhost/tdi/articlesFeed/storage/app/public/" + el.artigo_img}></img>*/
  };
};

const mapStateToProps = state => {
  // define as props do componente consoante o state do redux
  return { articles: state.articles };
};

class ConnectedList extends Component{

constructor(){
    super();
  // definir o contexto da função "clickAction" para que possa aceder à propriedade "this"
  this.clickAction = this.clickAction.bind(this);
}

clickAction(article) {
    // executar a função de apagar o artigo
    this.props.deleteArticle(article)
    console.log(article.id); 
  
    var formData = new FormData();
    formData.append('_method', 'DELETE');


    fetch(`${ENDPOINT}/${article.id}`, {
      method: 'POST',
      body: formData
      
    }).then(res=>res.json())
    


   
}

componentDidMount()
{
    // chamada inicial para ir buscar os artigos
    if(this.props.articles.articles == "" && contador ==0){ 
        this.props.fetchArticles({type: 'FETCH_ARTICLES'});
      
    }
    
   
    
}


render()
{
  const articles = this.props.articles.articles;
  console.log(articles); 
  const url = 'http://localhost/tdi/articlesFeed/storage/app/public/';

  return (
    <div>
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Artigos</h2>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-1">
          
          {articles.map((el, index) => (
            <div>
            <p></p><p></p>
            <div class="card" height= "10px">
           
             
             <div class="card-body">

                <h5 class="card-title" key={index}>{el.titulo}</h5>
                <p class="card-text">{el.data}</p>
               
                <Link key={el.id} to={{ pathname: `/detalhes/${el.id}`}}>
                <a href="#" class="btn btn-primary">Ver mais</a> &nbsp; &nbsp; &nbsp;
                </Link>
                <a href="#" class="btn btn-primary" onClick={()=>this.clickAction(el)}>Eliminar</a>
              </div>
            </div>
            

           </div>
          ))}
     </div></div>
     </div>
    );
  }
}

// executar a função connect do Redux para:
// 1) mapear o State do Redux à propriedades locais do componente (mapStateToProps)
// 2) mapear as ações a serem invocadas às ações locais nas props do componente (mapDispatchToProps)

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;