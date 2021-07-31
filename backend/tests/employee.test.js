const frisby = require('frisby');

const url = 'http://localhost:3001/api';

describe('1 - Crie um endpoint para o cadastro de funcionários', () => {
  it('Será validado que não é possível criar um funcionário com o nome menor que 5 caracteres', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Cpf: "12345678912",
        Nome: "Ian",
        UfNasc: "ES",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"Nome\" length must be at least 5 characters long");
      });
  });

  it('Será validado que não é possível criar um funcionário com o cargo menor que 5 caracteres', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev",
        Cpf: "12345678912",
        Nome: "Iann Teixeira",
        UfNasc: "ES",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"Cargo\" length must be at least 5 characters long");
      });
  });

  it('Será validado que não é possível criar um funcionário com o Cpf menor ou maior que 11 caracteres', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Cpf: "1234567891",
        Nome: "Iann Teixeira",
        UfNasc: "ES",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"Cpf\" length must be 11 characters long");
      });
  });

  it('Será validado que não é possível criar um funcionário com o UfNasc menor que 2 caracteres', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Cpf: "12345678912",
        Nome: "Iann Teixeira",
        UfNasc: "E",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"UfNasc\" length must be at least 2 characters long");
      });
  });

  it('Será validado que não é possível criar um funcionário com o UfNasc maior que 2 caracteres', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Cpf: "12345678912",
        Nome: "Iann Teixeira",
        UfNasc: "ESPIRITO SANTO",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"UfNasc\" length must be less than or equal to 2 characters long");
      });
  });

  it('Será validado que não é possível criar um funcionário com o Salário menor que 1', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Cpf: "12345678912",
        Nome: "Iann Teixeira",
        UfNasc: "ES",
        Salario: 0
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"Salario\" must be greater than or equal to 1");
      });
  });

  it('Será validado que não é possível criar um funcionário sem preencher o campo "Nome"', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Cpf: "12345678912",
        UfNasc: "ES",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"Nome\" is required");
      });
  });

  it('Será validado que não é possível criar um funcionário sem preencher o campo "Cargo"', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cpf: "12345678912",
        Nome: "Iann Teixeira",
        UfNasc: "ES",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"Cargo\" is required");
      });
  });

  it('Será validado que não é possível criar um funcionário sem preencher o campo "Cpf"', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Nome: "Iann Teixeira",
        UfNasc: "ES",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"Cpf\" is required");
      });
  });

  it('Será validado que não é possível criar um funcionário sem preencher o campo "UfNasc"', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Cpf: "12345678912",
        Nome: "Iann Teixeira",
        Salario: 4000
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"UfNasc\" is required");
      });
  });

  it('Será validado que não é possível criar um funcionário sem preencher o campo "Salário"', async () => {
    await frisby
      .post(`${url}/employees/`, {
        Cargo: "Dev Jr",
        Cpf: "12345678912",
        Nome: "Iann Teixeira",
        UfNasc: "ES",
      })
      .expect('status', 400)
      .then((res) => {
        let { body } = res;
        body = JSON.parse(body);
        expect(body).toEqual("\"Salario\" is required");
      });
  });
});
