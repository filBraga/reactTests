import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  it('Primeiro teste', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const link = screen.getByText(/More details/i);
    userEvent.click(link);
    const ele = screen.getByText(/Game Locations of Pikachu/i);
    expect(ele).toBeInTheDocument();
  });

  it('Segundo teste', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const ele = screen.getByText('Pokémon favoritado?');
    expect(ele).toBeInTheDocument();
  });

  it('Terceiro teste', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const ele = screen.getByText('This intelligent Pokémon roasts hard berries with '
      + 'electricity to make them tender enough to eat.');
    expect(ele).toBeInTheDocument();
  });

  it('Quarto teste', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const ele = screen.getByText('Pikachu Details');
    expect(ele).toBeInTheDocument();
  });
  it('Quinto teste', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const ele = screen.getByText('Summary');
    expect(ele).toBeInTheDocument();
  });
  it('Sexto teste', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const ele = screen.getAllByAltText('Pikachu location');
    expect(ele[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(ele[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
});
