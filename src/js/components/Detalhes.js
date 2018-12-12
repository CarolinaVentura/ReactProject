import React from "react"; 
import {withRouter} from "react-router-dom"; 
import {ENDPOINT, ENDPOINT_USER, ENDPOINT_CATEGORIA} from "../constants/services"; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Detalhes extends React.Component{

    state= {};


    


    componentDidMount(){

        fetch(`${ENDPOINT}/${this.props.match.params.id}`)

            .then(res => res.json()) 
            .then((article) => {
                    
                const user_id = article.autor_id;
                console.log(article); 
            

                fetch(`${ENDPOINT_USER}/${user_id}`)
                    .then (res=>res.json())
                    .then((user)=>{

                    const categoria_id = article.categoria_id;

                    fetch(`${ENDPOINT_CATEGORIA}/${categoria_id}`)
                        .then (res => res.json())
                        .then((cat)=> {
                            console.log(cat); 

                            this.setState({
                                article, user, cat
                                    })

                            })


                    });
                

            })

    }

    render (){

        if(!this.state.article){
            console.log(this.state.article);
           return<div>A carregar</div>     
        }

        const {id, titulo,data,descricao, artigo_img} =this.state.article;
        const{name} = this.state.user;
        const {tipo} = this.state.cat; 
        const url = `http://localhost/tdi/articlesFeed/storage/app/public/${artigo_img}`; 
      
       

        return (
           
        <div className="row mt-5">
        <div className="col-md-8 offset-md-1">
            <div className="card">
            <div class="card-header">
                {tipo} &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; {data}
            </div>
            <img class="card-img-top" height='150px' width='100px'  src = {url}></img>
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{descricao}</p>
                <a href="#" class="btn btn-primary">Editar</a> &nbsp; 
            </div>
            <div class="card-footer text-muted">
                {name}
            </div>
            </div>

        </div>
        </div>
        )
    }
}
export default withRouter(Detalhes); 