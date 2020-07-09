import React, { Component } from 'react';

class Evaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // prodId: this.props.productId,
      email: '',
      mensagem: '',
      nota: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, name) {
    const { value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, mensagem, nota } = this.state;

    return (
      <form>
        <h3>Avalie este produto</h3>
        <input
          placeholder="e-mail"
          type="email"
          value={email}
          onChange={(event) => this.handleChange(event, 'email')}
          required
        />
        <input
          type="text"
          name="nota"
          value={nota}
          onChange={(event) => {
            this.handleChange(event, 'nota');
          }}
          required
        />
        <textarea
          placeholder="Deixe aqui seu comentario"
          data-testid="product-detail-evaluation"
          value={mensagem}
          onChange={(event) => this.handleChange(event, 'mensagem')}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Evaluation;
