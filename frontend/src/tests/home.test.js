import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../Pages/home';

import renderWithRouter from '../helpers/renderWithRouter';

afterEach(() => jest.clearAllMocks());

describe('1 - A página inicial deve possuir os seguintes campos e características:', () => {
  test('A rota para esta página deve ser \'/\'', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');
  });

  test('Deve possuir dois Botões', () => {
    const { getAllByRole } = renderWithRouter(<App />);

    const button = getAllByRole('button')
    expect(button.length).toBe(2);
  });

  test('Deve possuir um botão \'Cadastrar Funcionário\'', () => {
    const { getByRole, getByTestId } = renderWithRouter(<App />);
    const button = getByTestId('register-button')
    //const button = getByRole('button', {name: /buscar funcionário/i})
    expect(button).toBeInTheDocument();
  });

  test('Deve possuir um botão com o texto \'Cadastrar Funcionário\'', () => {
    const { getByRole } = renderWithRouter(<App />);

    const button = getByRole('button', {name: /cadastrar funcionário/i})
    expect(button).toBeInTheDocument();
  });

  test('A rota deve ser mudada para \'/search\' após o clique no botão.', () => {
    const { history } = renderWithRouter(<App />);
    const button = screen.getByText(/buscar funcionário/i);
    userEvent.click(button);
    expect(history.location.pathname).toBe('/search');
  });

  test('A rota deve ser mudada para \'/add\' após o clique no botão.', () => {
    const { history } = renderWithRouter(<App />);
    const button = screen.getByText(/cadastrar funcionário/i);
    userEvent.click(button);
    expect(history.location.pathname).toBe('/add');
  });
});