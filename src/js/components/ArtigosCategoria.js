import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ENDPOINT_CAT, ENDPOINT_CATEGORIA } from "../constants/services";

class ArtigosCategoria extends React.Component{

    state= {};


    


    componentDidMount(){

        console.log(this.props.match.params.id); 
        fetch(`${ENDPOINT_CATEGORIA}/${this.props.match.params.id}`)
        

        .then(res => res.json()) 
        .then((cat) => {
            const categoria = cat.tipo;
           
            fetch(`${ENDPOINT_CAT}/${this.props.match.params.id}/articles`)
                .then (res=>res.json())
                .then ((artigos)=>{
                   
                    this.setState({ categoria, artigos})
                })
            
        }); 
    }

    render (){
        if(!this.state.categoria || !this.state.artigos.data) return null;
    
       
        const categoria= this.state.categoria; 
        const artigos= this.state.artigos.data; 
         
        return (
        <div>
            <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                  <h2>{categoria}</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8 offset-md-1">
                {artigos.map(artigo => (
                    <div>
                        <p></p><p></p>
                        <div class="card" height= "10px">
                        <div class="card-body">
                            <h5 class="card-title" >{artigo.titulo}</h5>
                            <p class="card-text">{artigo.data}</p>
                        
                            <Link key={artigo.id} to={{ pathname: `/detalhes/${artigo.id}`}}>
                            <a href="#" class="btn btn-primary">Ver mais</a> &nbsp; &nbsp; &nbsp;
                            </Link>
                            <a href="#" class="btn btn-primary" onClick={()=>this.clickAction(artigo)}>Eliminar</a>
                        </div>
                        </div>
                    </div>
                ))}

           </div>
                </div>
            </div>
     
            
        )

    }
}

export default withRouter(ArtigosCategoria); 