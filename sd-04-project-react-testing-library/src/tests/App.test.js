/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, cleanup } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

afterEach(cleanup);

describe('1. Tests of the App.js file', () => {
  test('When loading the application in the URL path “/”, the main page of Pokédex should be shown.', () => {
    const { getByText } = renderWithRouter(<App />, { route: '/' });
    const heading = getByText(/Pokédex/i);

    expect(heading).toBeInTheDocument();
  });

  test('When clicking on the "Home" link in the navigation bar, the application must be redirected to the home page, at the URL "/"', () => {
    const { getByText } = renderWithRouter(<App />);

    fireEvent.click(getByText('Home'));
    expect(getByText(/Pokédex/i)).toBeInTheDocument();
  });

  test('When clicking on the "About" link in the navigation bar, the application should be redirected to the About page, at the URL "/ about"', () => {
    const { getByText } = renderWithRouter(<App />);

    fireEvent.click(getByText('About'));
    expect(getByText(/About Pokédex/i)).toBeInTheDocument();
  });

  test('By clicking on the "Favorite Pokémons" link in the navigation bar, redirected to the favorite Pokémon page, at the URL "/favorites"', () => {
    const { getByText } = renderWithRouter(<App />);
    const favoritePok = getByText(/Favorite Pokémons/i);

    fireEvent.click(favoritePok);
    expect(favoritePok).toBeInTheDocument();
  });

  test('Entering an unknown URL displays the Not Found page', () => {
    const { getByText } = renderWithRouter(<App />, { route: '/xablau' });

    expect(getByText(/😭/i)).toBeInTheDocument();
  });
});
