import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
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
  it('Teste se a Pokédex tem os botões de filtro.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const link = screen.getAllByRole('button');
    expect(link[1]).toHaveAttribute('data-testid', 'pokemon-type-button');
    // expect(link).toBeDefined();
  });
  it('Teste se a Pokédex tem os botões de filtro.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const link = screen.getByText('All');
    userEvent.click(link);
    expect(link).toHaveAttribute('data-testid', '');
    // expect(link).toBeDefined();
  });
  it('Teste se a Pokédex tem os botões de {type}.', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const ele = screen.getByRole('button', {
      name: 'Electric',
    });
    expect(ele).toBeInTheDocument();
    userEvent.click(ele);
    // expect(link).toBeDefined();
  });
});
