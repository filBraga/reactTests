import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const id = 25;
    const link = screen.getByText(/More details/i);
    expect(link).toHaveAttribute('href', `/pokemons/${id}`);
  });
  it('O tipo correto do pokémon deve ser mostrado na tela.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const type = 'Electric';
    const element = screen.getByTestId('pokemon-type');
    expect(element).toHaveTextContent(`${type}`);
  });
  it('A imagem do Pokémon deve ser exibida.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const image = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const name = 'Pikachu';
    const element = screen.getByRole('img');
    expect(element).toHaveAttribute('src', `${image}`);
    expect(element).toHaveAttribute('alt', `${name} sprite`);
  });
  it('Teste se existe um ícone de estrela nos Pokémons favoritados.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const detail = screen.getByText(/More details/i);
    userEvent.click(detail);

    const fav = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(fav);

    const pokemon = 'Pikachu';
    const element = screen.getByAltText(`${pokemon} is marked as favorite`);
    expect(element).toHaveAttribute('src', '/star-icon.svg');
  });
});
