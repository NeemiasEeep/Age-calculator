import React from "react";
import iconArrow from "./icon-arrow.svg";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anos: "--",
      meses: "--",
      dias: "--"
    };
    this.conta = this.conta.bind(this);
  }

  conta() {
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() + 1;
    const diaAtual = new Date().getDate();
  
    const anoInput = parseInt(document.getElementById('ano').value);
    const mesInput = parseInt(document.getElementById('mes').value);
    const diaInput = parseInt(document.getElementById('dia').value);
  
    let anos = anoAtual - anoInput;
    let meses = mesAtual - mesInput;
    let dias = diaAtual - diaInput;
  
    if (meses < 0 || (meses === 0 && dias < 0)) {
      anos--;
    }
  
    if (meses < 0) {
      meses += 12;
    }
  
    if (dias < 0) {
      const ultimoDiaMesAnterior = new Date(anoAtual, mesAtual - 1, 0).getDate();
      dias = ultimoDiaMesAnterior + dias;
      meses--;
    }
  
    this.setState({
      anos: anos,
      meses: meses,
      dias: dias
    });
  }
  

  render() {
    return this.renderForm();
  }

  renderForm() {
    return (
      <div className="main">
        <div className="cima">
          <div className="day">
            <p>DAY</p>
            <input type="text" id="dia" placeholder="DD" />
          </div>
          <div className="month">
            <p>MONTH</p>
            <input type="text" id="mes" placeholder="MM" />
          </div>
          <div className="year">
            <p>YEAR</p>
            <input type="text" id="ano" placeholder="YY" />
          </div>
          <div className="space">
            <button className="btni" onClick={this.conta}>
              <img src={iconArrow} alt="" />
            </button>
          </div>
          <hr />
        </div>
        <div className="baixo">
          <h2>
            <span>{this.state.anos}</span>years
          </h2>
          <h2>
            <span>{this.state.meses}</span>months
          </h2>
          <h2>
            <span>{this.state.dias}</span>days
          </h2>
        </div>
      </div>
    );
  }
}

export default Counter;
