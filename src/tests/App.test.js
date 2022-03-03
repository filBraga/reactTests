import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  it('Teste se a aplicação contém um conjunto fixo de links de navegação.', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    // valores entre / algumaCoisa /i ignoram letras maiúsculas ou minúsculas
    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText('About');
    const favLink = screen.getByText('Favorite Pokémons');
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favLink).toBeInTheDocument();
  });

  it('Aplicação é redirecionada para a página inicial, no link Home.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeDefined();

    userEvent.click(homeLink);

    const teste = await screen.findByText('Encountered pokémons');
    expect(teste).toBeDefined();
  });

  it('Aplicação é redirecionada para a página About, no link About.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeDefined();

    userEvent.click(aboutLink);

    const teste = await screen.findByText('About Pokédex');
    expect(teste).toBeDefined();
  });

  it('Aplicação é redirec. para a pág Favoritados, no link Favoritados.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const favLink = screen.getByText(/Favorite Pokémons/i);
    expect(favLink).toBeDefined();

    userEvent.click(favLink);

    const teste = await screen.getByRole('heading', { level: 2 });
    expect(teste).toBeDefined();
  });
});
