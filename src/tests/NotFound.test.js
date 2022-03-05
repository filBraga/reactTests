import React from 'react';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
// import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <NotFound.js />', () => {
  it('Teste se pág contém um h2 com o texto Page requested not found 😭.', async () => {
    // https://testing-library.com/docs/example-react-router/
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    expect(screen.getByText(/Page requested not found/i)).toBeInTheDocument();
  });

  it('Teste se pág contém um h2 com o texto Page requested not found 😭.', async () => {
    const history = createMemoryHistory();
    history.push('/some/bad/route');
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const teste = await screen.getByRole('img', {
      name: /Pikachu crying because the page requested was not found/i,
    });
    expect(teste.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
