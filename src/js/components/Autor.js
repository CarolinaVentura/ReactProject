import React from "react"; 
import {withRouter} from "react-router-dom"; 
import {ENDPOINT, ENDPOINT_USER} from "../constants/services"; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Autor extends React.Component{

    state= {};


    componentDidMount(){
        fetch(`${ENDPOINT_USER}/${this.props.match.params.id}`)
        .then (res=>res.json())
        .then((user)=>{

            console.log(user); 

            
            fetch (`${ENDPOINT_USER}/${this.props.match.params.id}/articles`)
            .then (res=>res.json())
            .then ((artigos)=>{
                console.log(artigos); 
                this.setState({
                    user, artigos
                          })
                }); 


                           
        }); 
        

    }

    render (){

      
        if(!this.state.user || !this.state.artigos.data){
            console.log(this.state.user);
           return<div>A carregar</div>     
        }

        console.log(this.state.artigos.data); 
        const {name, email} =this.state.user; 
        
       const artigos =this.state.artigos.data;  

       

        return (
            <div>
            
           <div className="row mt-5">
           <div className="col-md-4 offset-md-1">
        <div class="card">
        <div class="card-body"><h5>{name}</h5><p></p>{email}</div></div></div></div>
        <div className="row mt-5">
        <div className="col-md-8 offset-md-1">
          
          {artigos.map((el, index) => (
            <div>
            <p></p>
            <div class="card" height= "10px">
           
             
             <div class="card-body">

                <h5 class="card-title" key={index}>{el.titulo}</h5>
                <p class="card-text">{el.data}</p>
               
                <Link key={el.id} to={{ pathname: `/detalhes/${el.id}`}}>
                <a href="#" class="btn btn-primary">Ver mais</a> &nbsp; &nbsp; &nbsp;
                </Link>
                
              </div>
            </div>
            

           </div>
          ))}
     </div></div>
         
     </div>
        )
    }
}
export default withRouter(Autor); 