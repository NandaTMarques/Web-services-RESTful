import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const SelectSearch = ({ setEmployees }) => {
  const [field, setField] = useState(null);
  const [search, setSearch] = useState('');
  const [salario, setSalario] = useState({ min: 0, max: 0 });

  const handleSubmit = async () => {
    const route = { url: `api/employees/${field}`, method: 'post' };
    if (field === 'todos') {
      route.url = 'api/employees/';
      route.method = 'get';
    }
    const response = await axios[route.method]('http://localhost:3001/' + route.url, {
      field,
      search,
      salario,
    });
    setEmployees(response.data);
  };

  const arrayRotas = ['nome', 'cpf', 'uf', 'cargo', 'datacad', 'salario', 'status'];
  return (
    <section className='form-select'>
      <select
        name='selectRota'
        value={field}
        onChange={({ target }) => setField(target.value)}
      >
        {
          <option value={null} selected>
            todos
          </option>
        }
        {arrayRotas.map((rota) => (
          <option value={rota} key={rota}>
            {rota}
          </option>
        ))}
      </select>
      <input
        placeholder='Digite sua Busca'
        type='text'
        name='Busca'
        min={1}
        onChange={({ target }) => setSearch(target.value)}
      />
      <label>Faixa Salarial</label>
      <input
        placeholder='min'
        type='text'
        name='Busca'
        min={1}
        onChange={({ target }) => setSalario({ ...salario, min: target.value })}
        disabled={field === 'todos' ? false : true}
      />
      <input
        placeholder='max'
        type='text'
        name='Busca'
        min={1}
        onChange={({ target }) => setSalario({ ...salario, max: target.value })}
        disabled={field === 'todos' ? false : true}
      />
      <button
        className='add-service-form'
        type='button'
        data-testid='service-request-button'
        onClick={handleSubmit}
      >
        Buscar
      </button>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue='Choose...'>
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridZip'>
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group as={Col} controlId='formGridZip'>
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
        <Col xs='auto' className='my-1'>
          <Button type='submit'>Submit</Button>
        </Col>
      </Row>
    </section>
  );
};

export default SelectSearch;
