import React, { Component } from "react";
import Historial from "./Historial";

export default class Historia extends Component {
  constructor() {
    super()
    this.state = {
      capituloHistoria: "",
      opcionesElegidas: [],
      idHistoria: "1",
    };
  }

  mostrarHistoria() {
    const id =
      this.state.idHistoria === "1"
        ? this.state.idHistoria
        : (
            this.state.idHistoria +
            this.state.opcionesElegidas[this.state.opcionesElegidas.length - 1]
          ).toLowerCase();
    const capituloActual = this.props.data.find((data) => data.id === id);
    return capituloActual;
  }

  componentDidMount() {
    this.setState({ capituloHistoria: this.mostrarHistoria() });
  }

  componentDidUpdate(prevProps ,prevState) {
    if (prevState.idHistoria !== this.state.idHistoria) {
      this.setState({ capituloHistoria: this.mostrarHistoria() });
    }
  }

  handlerClick(opcion) {
    if (this.state.idHistoria < 5) {
      this.setState({
        opcionesElegidas: this.state.opcionesElegidas.concat(opcion),
        idHistoria: (Number(this.state.idHistoria) + 1).toString(),
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{this.state.capituloHistoria.historia}</h1>
        <div className="opciones">
          <div className="opcion">
            <button className="botones" onClick={() => this.handlerClick("A")}>A</button>
            <h2 className="opciones">{this.state.capituloHistoria !== "" && this.state.capituloHistoria.opciones.a}</h2>
          </div>
          <div className="opcion"> 
            <button className="botones" onClick={() => this.handlerClick("B")}>B</button>
            <h2 className="opciones">{this.state.capituloHistoria !== "" && this.state.capituloHistoria.opciones.b}</h2>
          </div>
        </div>
        <h3>
          <Historial opcionesElegidas={this.state.opcionesElegidas} />
        </h3>
      </div>
    );
  }
}
