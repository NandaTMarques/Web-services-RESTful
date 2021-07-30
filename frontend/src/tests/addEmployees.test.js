import React from 'react';
import '@testing-library/jest-dom'
import { getByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddEmployee from '../Pages/addEmployee';
import App from '../Pages/home';

import renderWithRouter from '../helpers/renderWithRouter';

beforeEach(() => jest.clearAllMocks());

describe('1 - A página Cadastrar Funcionários deve possuir os seguintes campos e características:', () => {
  test('A rota para esta página deve ser \'/add\'', () => {
    const { history, getByText } = renderWithRouter(<App />);
    const button = getByText(/cadastrar funcionário/i);
    userEvent.click(button);
    expect(history.location.pathname).toBe('/add');
  });

  test('Deve possuir um Botão', () => {
    const { getAllByRole } = renderWithRouter(<AddEmployee />);
    const button = getAllByRole('button')
    expect(button.length).toBe(1);
  });

  test('Deve possuir um botão \'Cadastrar\'', () => {
    const { getByTestId } = renderWithRouter(<AddEmployee />);
    const button = getByTestId('add-button-employee');
    expect(button).toBeInTheDocument();
  });

  test('Deve possuir um link com o texto \'Voltar\'', () => {
    const { getByRole } = renderWithRouter(<AddEmployee />);

    const button = getByRole('link', {name: /voltar/i})
    expect(button).toBeInTheDocument();
  });

  test('Deve possuir um heading com o texto \'Cadastrar Funcionários\'', () => {
    const { getByRole } = renderWithRouter(<AddEmployee />);
    const heading = getByRole('heading', { name: /cadastrar funcionários/i });
    expect(heading).toBeInTheDocument();
  });

  test('Deve possuir uma imagem de logo com o nome \'logo allugator \'', () => {
    const { getByRole } = renderWithRouter(<AddEmployee />);

    const img = getByRole('img', { name: /logo allugator/i });
    expect(img).toBeInTheDocument();
  });

  test('A página deve possuir uma label \'/Nome\'.', () => {
    const { getByText } = renderWithRouter(<AddEmployee />);
    const labelNome = getByText(/nome/i);
    expect(labelNome).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com nome \'/Nome\'.', () => {
    const { getByRole } = renderWithRouter(<AddEmployee />);
    const inputNome = getByRole('textbox', { name: /nome/i })
    expect(inputNome).toBeInTheDocument();
  });

  test('A página deve possuir uma label \'/CPF\'.', () => {
    const { getByText } = renderWithRouter(<AddEmployee />);
    const labelCpf = getByText(/cpf/i);
    expect(labelCpf).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com nome \'/CPF\'.', () => {
    const { getByRole } = renderWithRouter(<AddEmployee />);
    const inputCpf = getByRole('textbox', { name: /cpf/i })
    expect(inputCpf).toBeInTheDocument();
  });

  test('A página deve possuir uma label \'/Cargo\'.', () => {
    const { getByText } = renderWithRouter(<AddEmployee />);
    const labelCargo = getByText(/cargo/i);
    expect(labelCargo).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com nome \'/Cargo\'.', () => {
    const { getByRole } = renderWithRouter(<AddEmployee />);
    const inputCargo = getByRole('textbox', { name: /cargo/i })
    expect(inputCargo).toBeInTheDocument();
  });

  test('A página deve possuir uma label \'/Salario\'.', () => {
    const { getByTestId } = renderWithRouter(<AddEmployee />);
    const labelSalario = getByTestId('salary');
    expect(labelSalario).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com nome \'/Salario\'.', () => {
    const { getByTestId } = renderWithRouter(<AddEmployee />);
    const inputSalario = getByTestId('salary');
    expect(inputSalario).toBeInTheDocument();
  });

  test('A página deve possuir uma label \'Estado de Nascimento\'.', () => {
    const { getByText } = renderWithRouter(<AddEmployee />);
    const labelEstado = getByText(/estado de nascimento/i);
    expect(labelEstado).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com nome \'/Estado de Nascimento\'.', () => {
    const { getByRole } = renderWithRouter(<AddEmployee />);
    const inputEstado = getByRole('textbox', { name: /estado de nascimento/i })
    expect(inputEstado).toBeInTheDocument();
  });
});
