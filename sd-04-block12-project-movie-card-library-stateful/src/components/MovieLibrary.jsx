/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleCheckedBook = this.handleCheckedBook.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
  }

  filterFavoritesMovies(mov) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly !== false) {
      return mov.filter((element) => element.bookmarked === true);
    }
    return mov;
  }

  filterSameGenre(mov) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return mov.filter((element) => element.genre === selectedGenre);
    }
    return mov;
  }

  filterSearchText(mov) {
    const { searchText } = this.state;
    if (searchText !== '') {
      return mov.filter((element) => element.title.includes(searchText)
      || element.subtitle.includes(searchText)
      || element.storyline.includes(searchText));
    }
    return mov;
  }

  filteredMovies() {
    const { movies } = this.state;
    return this.filterSearchText(this.filterFavoritesMovies(this.filterSameGenre([...movies])));
  }

  handleCheckedBook(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  handleChangeText(event) {
    this.setState({ searchText: event.target.value });
  }

  handleGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  addNewMovie(element) {
    this.setState((e) => ({ movies: [...e.movies, element] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.handleChangeText}
          onSelectedGenreChange={this.handleGenre}
          onBookmarkedChange={this.handleCheckedBook}
        />
        <MovieList movies={this.filteredMovies()} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
