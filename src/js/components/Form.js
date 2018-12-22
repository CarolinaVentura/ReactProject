
import React, { Component } from "react";
import { connect } from "react-redux";
import {ENDPOINT, ENDPOINT_CAT, ENDPOINT_USER} from "../constants/services";
import { addArticle } from "../actions/index";
const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
    
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      titulo: "",
      data: "",
      descricao: "",
      artigo_img: "",
      autor_id: "",
      categoria_id: ""
    };

   


    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }*/

  handleChange1(event) {
    this.setState({
      titulo: event.target.value
    })
    console.log(event.target.value);
    console.log(this.state);  
  }

  handleChange2(event) {
    this.setState({
      data: event.target.value
    })
    console.log(event.target.value);
    console.log(this.state);
  }

  handleChange3(event) {
    this.setState({
      descricao: event.target.value
    })
    console.log(event.target.value);
    console.log(this.state);
  }

  handleChange4(event) {
    this.setState({
      artigo_img: event.target.value
    })
    console.log(event.target.value);
    console.log(this.state);
  }

  handleChange5(event) {
    this.setState({
      autor_id: event.target.value
    })
    console.log(event.target.value);
    

  }

  handleChange6(event) {
    this.setState({
      categoria_id: event.target.value
    })
    console.log(event.target.value);
    
  }


  handleSubmit(event) {
    event.preventDefault();
    /*const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });*/

    this.props.addArticle({
      "titulo": this.state.titulo,
      "data": this.state.data,
      "descricao": this.state.descricao,
      "artigo_img": this.state.artigo_img,
      "autor_id": this.state.autor_id,
      "categoria_id": this.state.categoria_id
    })

    var formData = new FormData();
    formData.append('_method', 'POST');
    formData.append('titulo', this.state.titulo);
    formData.append('data', this.state.data); 
    formData.append('descricao',  this.state.descricao); 
    formData.append( 'artigo_img', this.state.artigo_img);
    formData.append('autor_id',  this.state.autor_id);
    formData.append('categoria_id', this.state.categoria_id);


    fetch(ENDPOINT, {
      method: 'POST',
      body: formData
      
    }).then(res=>res.json())



    //fazer pedido aqui
  }

  componentDidMount() {
    fetch(`${ENDPOINT_CAT}`).then(res=>res.json()).then((categorias)=>{
        console.log(categorias); 

        fetch(`${ENDPOINT_USER}`).then(res=>res.json()).then((autores)=>{
          console.log(autores);
          this.setState({autores,categorias})
        })
    })
  }

  render() {
    if(!this.state.categorias || !this.state.autores) return null;

    const { titulo } = this.state.titulo;
    const { data } = this.state.data;
    const { descricao } = this.state.descricao;
    const { artigo_img } = this.state.artigo_img;
    const { categoria_id } = this.state.categoria_id;
    const { autor_id } = this.state.autor_id;

    const autores= this.state.autores; 
    const categorias = this.state.categorias; 

   
    return (
    <div>

      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Formulário</h2>
        </div>  
      </div>
      <div className="row mt-5">
        <div className="col-md-8 offset-md-1">
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label htmlFor="title">Titulo</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={titulo}
                onChange={this.handleChange1}
              />
            </div>
              <p></p>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Descrição</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" value={descricao} rows="3" onChange={this.handleChange3}></textarea>
              </div>
              <p></p>
              <div class="form-group">
                <label for="exampleFormControlInput1">Data</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" value={data} placeholder="AAAA-MM-DD" onChange={this.handleChange2}></input>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Categoria</label>
                
                <select class="form-control" id="exampleFormControlSelect1" value={categoria_id} onChange={this.handleChange6}>
                
                {categorias.map(categoria => (
                  <option value={categoria.id}>{categoria.tipo}</option>
                ))}
                  
                  </select>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect2">Autor</label>
                <select class="form-control" id="exampleFormControlSelect2" value={autor_id} onChange={this.handleChange5}>
                {autores.map(autor => (
                  <option value={autor.id}>{autor.name}</option>
                ))}
                </select>
              </div>

              <div class="form-group">
                <label for="exampleFormControlFile1">Escolher imagem</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" value={artigo_img} onChange={this.handleChange4}></input>
              </div>
            <button type="submit" className="btn btn-success btn-lg">
              PUBLICAR
            </button>
          </form>
        </div>
      </div>
    </div>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;