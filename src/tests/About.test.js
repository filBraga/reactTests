import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <About.js />', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    // valores entre / algumaCoisa /i ignoram letras maiúsculas ou minúsculas
    const aboutLink = screen.getByText(/About/i);
    expect(aboutLink).toBeDefined();

    userEvent.click(aboutLink);

    const teste = await screen.findByText('This application simulates a Pokédex, '
      + 'a digital encyclopedia containing all Pokémons');
    expect(teste).toBeDefined();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    // valores entre / algumaCoisa /i ignoram letras maiúsculas ou minúsculas
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeDefined();

    userEvent.click(aboutLink);

    const teste = await screen.getByRole('heading', { name: /about pokédex/i });
    expect(teste).toBeDefined();
  });

  it('Teste se a página contém a imagem de uma Pokédex.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    // valores entre / algumaCoisa /i ignoram letras maiúsculas ou minúsculas
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeDefined();

    userEvent.click(aboutLink);

    const teste = await screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(teste.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
