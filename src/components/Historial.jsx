import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="recordatorio">
        <p>Seleccion anterior: {this.props.opcionesElegidas[this.props.opcionesElegidas.length - 1]}</p>
        <div>
          <p>Historial de opciones elegidas: </p>
          <ul>
            {this.props.opcionesElegidas.map((eleccion, index) => <li key={index}>{eleccion}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
