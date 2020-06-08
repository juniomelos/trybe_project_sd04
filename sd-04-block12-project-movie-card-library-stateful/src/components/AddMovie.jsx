/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

const stateInitial = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = stateInitial;

    this.valueTitle = this.valueTitle.bind(this);
    this.valueSubtitle = this.valueSubtitle.bind(this);
    this.valueImagePath = this.valueImagePath.bind(this);
    this.valueStoryLine = this.valueStoryLine.bind(this);
    this.valueRating = this.valueRating.bind(this);
    this.valueGenre = this.valueGenre.bind(this);
    this.resetStateInicial = this.resetStateInicial.bind(this);
  }

  valueTitle(event) {
    this.setState({ title: event.target.value });
  }

  valueSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }

  valueImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }

  valueStoryLine(event) {
    this.setState({ storyline: event.target.value });
  }

  valueRating(event) {
    this.setState({ rating: Number(event.target.value) });
  }

  valueGenre(event) {
    this.setState({ genre: event.target.value });
  }

  title() {
    const { title } = this.state;
    return (
      <label htmlFor="inputTitle">
        Título
        <input type="text" name="title" value={title} onChange={this.valueTitle} />
      </label>
    );
  }

  subtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="inputSubtitle">
        Subtítulo
        <input type="text" name="subtitulo" value={subtitle} onChange={this.valueSubtitle} />
      </label>
    );
  }

  imagePath() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="inputImagePath">
        Imagem
        <input type="text" name="subtitulo" value={imagePath} onChange={this.valueImagePath} />
      </label>
    );
  }

  storyline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="inputStoryLine">
        Sinopse
        <textarea
          type="textarea"
          name="subtitulo"
          value={storyline}
          onChange={this.valueStoryLine}
        />
      </label>
    );
  }

  rating() {
    const { rating } = this.state;
    return (
      <label htmlFor="inputRating">
        Avaliação
        <input type="number" name="inputRating" value={rating} onChange={this.valueRating} />
      </label>
    );
  }

  genre() {
    const { genre } = this.state;
    return (
      <label htmlFor="inputGenre">
        Gênero
        <select type="text" name="subtitulo" value={genre} onChange={this.valueGenre}>
          <option text="Ação" value="action">
            Ação
          </option>
          <option text="Comédia" value="comedy">
            Comédia
          </option>
          <option text="Suspense" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }

  resetStateInicial(onClick) {
    onClick(this.state);
    this.setState(stateInitial);
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form>
          {this.title()}
          {this.subtitle()}
          {this.imagePath()}
          {this.storyline()}
          {this.rating()}
          {this.genre()}
          <button
            className="btn btn-primary"
            type="button"
            value="Adicionar filme"
            onClick={() => this.resetStateInicial(onClick)}
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
