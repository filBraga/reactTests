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
});
