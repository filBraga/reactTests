import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Teste se é exibido na tela a mensagem No favorite pokemon found,'
    + 'se a pessoa não tiver pokémons favoritos.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    // valores entre / algumaCoisa /i ignoram letras maiúsculas ou minúsculas
    const aboutLink = screen.getByText(/Favorite Pokémons/i);
    expect(aboutLink).toBeDefined();

    userEvent.click(aboutLink);

    const teste = await screen.findByText('No favorite pokemon found');
    expect(teste).toBeDefined();
  });
});
