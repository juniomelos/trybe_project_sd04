import React from 'react';
import ProductListing from './ProductListing';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      searchValue: false,
    };
    this.changeValue = this.changeValue.bind(this);
  }

  buttonSearch() {
    this.setState({ searchValue: true });
  }

  changeValue(e) {
    this.setState({
      item: e.target.value,
      searchValue: false,
    });
  }

  renderSearchValue() {
    return (
      <center>
        <input
          data-testid="query-input"
          type="text"
          className="input"
          onChange={this.changeValue}
        />
        <p data-testid="home-initial-message" className="texto-pesquisa">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </center>
    );
  }

  render() {
    const { item, searchValue } = this.state;
    return (
      <div>
        <center>
          <div>
            <div>
              {this.renderSearchValue()}
              <button data-testid="query-button" type="button" onClick={() => this.buttonSearch()}>
                PESQUISAR
              </button>
            </div>
          </div>
          <div>{searchValue && <ProductListing item={item} />}</div>
        </center>
      </div>
    );
  }
}

export default SearchBar;
