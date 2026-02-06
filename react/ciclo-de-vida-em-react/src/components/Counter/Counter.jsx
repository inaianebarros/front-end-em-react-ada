import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
    console.log("construindo a classe Counter ...");
  }

  UNSAFE_componentWillMount() {
    console.log("O nosso contador será montado");
  }

  componentDidMount() {
    console.log("O nosso contador foi montado");
  }

  UNSAFE_componentWillUpdate() {
    console.log("O nosso contador será atualizado");
  }

  componentDidUpdate() {
    console.log("O nosso contador foi atualizado");
  }

  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => {
            this.setState({ contador: this.state.contador - 1 });
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
          }}
        >
          Aumentar
        </button>
      </div>
    );
  }
}

export default Counter;
