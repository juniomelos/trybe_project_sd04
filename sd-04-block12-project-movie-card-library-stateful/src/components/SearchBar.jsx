import React, { Component } from 'react';

class SearchBar extends Component {
  includedText() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="inputText">
          Inclui o texto
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
      </div>
    );
  }

  showOnlyFavorites() {
    const { onBookmarkedChange, bookmarkedOnly } = this.props;
    return (
      <div>
        <label htmlFor="inputFavorites">
          <input
            type="checkbox"
            value={bookmarkedOnly}
            onChange={onBookmarkedChange}
            checked={bookmarkedOnly}
          />
          Mostrar somente favoritos
        </label>
      </div>
    );
  }

  filterByGenre() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="inputGenre">
        Filtrar por gênero:
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.includedText()}
          {this.showOnlyFavorites()}
          {this.filterByGenre()}
        </form>
      </div>
    );
  }
}

export default SearchBar;
