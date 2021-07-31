import React from 'react';
import '@testing-library/jest-dom'
import { findByText, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AllEmployees from '../Pages/allEmployees';

import renderWithRouter from '../helpers/renderWithRouter';

beforeEach(() => jest.clearAllMocks());

describe('3 - A página Buscar Funcionários deve possuir os seguintes campos e características:', () => {
  test('A rota para esta página deve ser \'/search\'', () => {
    const { history } = renderWithRouter(<AllEmployees />, '/search');
    expect(history.location.pathname).toBe('/search');
  });

  test('Deve possuir um botão \'Buscar Funcionários\'', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const button = getByRole('button', {
      name: /buscar funcionários/i
    });
    expect(button).toBeInTheDocument();
  });

  test('Deve possuir um link com o texto \'Voltar\'', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);

    const button = getByRole('link', {name: /voltar/i})
    expect(button).toBeInTheDocument();
  });

  test('Deve possuir um heading com o texto \'Funcionários\'', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const button = getByRole('heading', {
      name: /funcionários/i });
    expect(button).toBeInTheDocument();
  });

  test('Deve possuir uma imagem de logo com o nome \'logo allugator \'', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const img = getByRole('img', { name: /logo allugator/i });
    expect(img).toBeInTheDocument();
  });

  test('A página deve possuir uma label \'/selecione uma opção\'.', () => {
    const { getByText } = renderWithRouter(<AllEmployees />);
    const labelSelecione = getByText(/selecione uma opção/i)
    expect(labelSelecione).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com nome \'/selecione uma opção\'.', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const select = getByRole('combobox', {
      name: /selecione uma opção/i });
    expect(select).toBeInTheDocument();
  });

  test('A página deve possuir uma label \'/Digite sua busca\'.', () => {
    const { getByText } = renderWithRouter(<AllEmployees />);
    const labelBusca = getByText(/digite sua busca/i);
    expect(labelBusca).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com nome \'/Digite sua Busca\'.', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const inputBusca = getByRole('textbox', {
      name: /digite sua busca/i });
    expect(inputBusca).toBeInTheDocument();
  });

  test('A página deve possuir uma label \'/Faixa Salarial\'.', () => {
    const { getByText } = renderWithRouter(<AllEmployees />);
    const labelSalarial = getByText(/faixa salarial/i);
    expect(labelSalarial).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com o data-testid \'/input-min\'.', () => {
    const { getByTestId } = renderWithRouter(<AllEmployees />);
    const inputMin = getByTestId('input-min');
    expect(inputMin).toBeInTheDocument();
  });

  test('A página deve possuir uma caixa de text com o data-testid \'/input-max\'.', () => {
    const { getByTestId } = renderWithRouter(<AllEmployees />);
    const inputMax = getByTestId('input-max');
    expect(inputMax).toBeInTheDocument();
  });

  test('A página deve possuir uma columnheader \'/Nome\'.', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const columnHeaderNome = getByRole('columnheader', { name: /nome/i });
    expect(columnHeaderNome).toBeInTheDocument();
  });

  test('A página deve possuir uma columnheader \'/CPF\'.', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const columnHeaderCpf = getByRole('columnheader', { name: /cpf/i });
    expect(columnHeaderCpf).toBeInTheDocument();
  });

  test('A página deve possuir uma columnheader \'/Cargo\'.', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const columnHeaderCargo = getByRole('columnheader', { name: /cargo/i });
    expect(columnHeaderCargo).toBeInTheDocument();
  });

  test('A página deve possuir uma columnheader \'Estado\'.', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const columnHeaderEstado = getByRole('columnheader', { name: /estado/i });
    expect(columnHeaderEstado).toBeInTheDocument();
  });

  test('A página deve possuir uma columnheader \'/Salario\' com data-testid = column-header-salario.', () => {
    const { getByTestId } = renderWithRouter(<AllEmployees />);
    const columnHeaderSalario = getByTestId('column-header-salario');
    expect(columnHeaderSalario).toBeInTheDocument();
  });

  test('A página deve possuir uma columnheader \'/Data de Cadastro\'.', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const columnHeaderDataCad = getByRole('columnheader', { name: /data de cadastro/i });
    expect(columnHeaderDataCad).toBeInTheDocument();
  });

  test('A página deve possuir uma columnheader \'/Status\'.', () => {
    const { getByRole } = renderWithRouter(<AllEmployees />);
    const columnHeaderStatus = getByRole('columnheader', { name: /status/i });
    expect(columnHeaderStatus).toBeInTheDocument();
  });

  test('Deve possuir um botão \'Excluir\'.', () => {
    const { getByText } = renderWithRouter(<AllEmployees />);
    const button = getByText(/excluir/i);
    expect(button).toBeInTheDocument();
  });

  test('Ao selecionar os filtros e clicar no botão \'Buscar Funcionários\'s', async () => {
    const { findByRole } = renderWithRouter(<AllEmployees />, '/search');
    const select = await findByRole('combobox', {
      name: /selecione uma opção/i
    })
    expect(select).toBeInTheDocument();
    userEvent.selectOptions(select, 'nome');
    expect(select).toHaveValue('nome');
    userEvent.selectOptions(select, 'cpf');
    expect(select).toHaveValue('cpf');
    userEvent.selectOptions(select, 'uf');
    expect(select).toHaveValue('uf');
    userEvent.selectOptions(select, 'cargo');
    expect(select).toHaveValue('cargo');
    userEvent.selectOptions(select, 'datacad');
    expect(select).toHaveValue('datacad');
    userEvent.selectOptions(select, 'faixa-salarial');
    expect(select).toHaveValue('faixa-salarial');
    userEvent.selectOptions(select, 'status');
    expect(select).toHaveValue('status');

    const inputQuery = await findByRole('textbox', {
      name: /digite sua busca/i });
    userEvent.type(inputQuery, 'Aaron Aaby');
    expect(inputQuery).toHaveValue('Aaron Aaby');

  });
});
