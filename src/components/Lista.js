import React from 'react';
import '../App.css';
class Lista extends React.Component {
  render(){
    return (
    <div className="items__li">
      <h3 className="item__li--title">{this.props.names}</h3>
      <div>{this.props.descripcion}</div>
      <div>{`catidad: ${this.props.cantidad}`}</div>

      <div>{`precio: ${this.props.precio} €`}</div>
      <div className="items__li--category">{this.props.categoria}</div>
    </div>

    );
  }
}
Lista.defaultProps = {

  descripcion: 'No hay descripción'
}

export default Lista;
