import React, { useState } from 'react';
import api from '../services/api';
import { Form, Row, Col, Button } from 'react-bootstrap';

const FormCreate = () => {
  const [Nome, setNome] = useState();
  const [Cpf, setCpf] = useState();
  const [Cargo, setCargo] = useState();
  const [Salario, setSalario] = useState();
  const [UfNasc, setUfNasc] = useState();
  const [DataCad, setData] = useState();
  
  async function handleSubmit() {
    const data = { DataCad, Cargo, Cpf, Nome, UfNasc, Salario: parseFloat(Salario) };
    if(DataCad !== 'undefined'
      || Cargo !== 'undefined'
      || Cpf !== 'undefined'
      || Cpf.length !== 11
      || Nome !== 'undefined'
      || UfNasc !== 'undefined'
      || Salario !== 'undefined') {
      const response = await api.post('/api/employees', data);
      if(response.status === 201) {
        alert('Funcionário cadastrado com sucesso!');
      } else {
        alert('Erro ao cadastrar Funcionário!')
      }
    } else {
      alert('Por favor, preencha os dados corretamente!')
    }
  };

  return (
    <form className="form-select">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              placeholder="Nome"
              type="text"
              name="Nome"
              value={Nome}
              min={1} 
              onChange={ ({target}) => setNome(target.value) }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              placeholder="CPF"
              type="text"
              name="Cpf"
              value={Cpf}
              min={1} 
              onChange={ ({target}) => setCpf(target.value) }
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Cargo</Form.Label>
            <Form.Control
              placeholder="Cargo"
              type="text"
              name="cargo"
              value={Cargo}
              min={1} 
              onChange={ ({target}) => setCargo(target.value) }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Salário</Form.Label>
            <Form.Control
              placeholder="Salário"
              type="number"
              name="salario"
              value={Salario}
              min={1}
              data-testid="salary"
              onChange={ ({target}) => setSalario(target.value) }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Estado de Nascimento</Form.Label>
            <Form.Control
              placeholder="Estado"
              type="text"
              name="ufNasc"
              value={UfNasc}
              min={1} 
              onChange={ ({target}) => setUfNasc(target.value) }
            />
          </Form.Group>
        </Row>
        <Button
          variant="primary"
          className="add-button"
          type="button"
          data-testid="add-button-employee"
          onClick={ handleSubmit }
        >
          Cadastrar
        </Button>
      </Form>
    </form>
  )
}

export default FormCreate;
