const frisby = require('frisby');
const fs = require('fs');
const path = require('path');
const data = require('../data/employees.json');

const url = 'http://localhost:3001/api/employees';

describe('Teste método POST na rota "name"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint \'/api/employees/nome\' retorna as informações corretamente', async () => {
    await frisby
      .post(`${url}/nome/`, { "search": "Adelaide Aarsvold" })
      .expect('status', 200)
      .then((responseGet) => {
        const { body } = responseGet;
        const parsed = JSON.parse(body);
        expect(parsed[0].Nome).toEqual("Adelaide Aarsvold");
      });
  });
});

describe('Teste método POST na rota "cpf"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint \'/api/employees/cpf\' retorna as informações corretamente', async () => {
    await frisby
      .post(`${url}/cpf/`, { "search": "08740471454" })
      .expect('status', 200)
      .then((responseGet) => {
        const { body } = responseGet;
        const parsed = JSON.parse(body);
        expect(parsed[0].Cpf).toEqual("08740471454");
      });
  });
});

describe.only('Teste método POST na rota "cargo"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint \'/api/employees/cargo\' retorna as informações corretamente', async () => {
    await frisby
      .post(`${url}/cargo/`, { "search": "Dev Jr" })
      .expect('status', 200)
      .then((responseGet) => {
        const { body } = responseGet;
        const parsed = JSON.parse(body);
        expect(parsed[0].Cargo).toEqual("Dev Jr");
      });
  });
});

describe('Teste método POST na rota "dataCad"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint \'/api/employees/datacad\' retorna as informações corretamente', async () => {
    await frisby
      .post(`${url}/datacad/`, { "search": "28/04/2017" })
      .expect('status', 200)
      .then((responseGet) => {
        const { body } = responseGet;
        const parsed = JSON.parse(body);
        expect(parsed[0].DataCad).toEqual("28/04/2017");
      });
  });
});

describe('Teste método POST na rota "uf"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint \'/api/employees/uf\' retorna as informações corretamente', async () => {
    await frisby
      .post(`${url}/uf/`, { "search": "AM" })
      .expect('status', 200)
      .then((responseGet) => {
        const { body } = responseGet;
        const parsed = JSON.parse(body);
        expect(parsed[0].UfNasc).toEqual("AM");
      });
  });
});

describe('Teste método POST na rota "faixa-salarial"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint \'/api/employees/faixa-salarial\' retorna as informações corretamente', async () => {
    await frisby
      .post(`${url}/faixa-salarial/`)
      .expect('status', 200)
      .then((responseGet) => {
        const { json } = responseGet;
        expect(...json).toEqual(data.faixa-salarial);
      });
  });
});

describe('Teste método POST na rota "status"', () => {
  beforeEach(() => {
    const EMPLOYEES_FILE_PATH = path.join(__dirname, '..', 'data', 'employees.json');
    fs.readFileSync(EMPLOYEES_FILE_PATH);
  });
  it('deve checar se o endpoint \'/api/employees/status\' retorna as informações corretamente', async () => {
    await frisby
      .post(`${url}/status/`, { "search": "ATIVO" })
      .expect('status', 200)
      .then((responseGet) => {
        const { body } = responseGet;
        const parsed = JSON.parse(body);
        expect(parsed[0].Status).toEqual("ATIVO");
      });
  });
});