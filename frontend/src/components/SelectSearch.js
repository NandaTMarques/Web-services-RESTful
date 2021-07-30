import axios from 'axios';
import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context';
import { Form, Row, Col, Button } from 'react-bootstrap';

const SelectSearch = () => {
  const { setEmployees } = useContext(GlobalContext);
  const [salario, setSalario] = useState({ min: null, max: null });
  const [search, setSearch] = useState('');
  const [field, setField] = useState('todos');

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
    setSearch(null);
    setSalario({ min: null, max: null });
  };

  const arrayRotas = ['nome', 'cpf', 'uf', 'cargo', 'datacad', 'faixa-salarial', 'status'];
  return (
    <section className='bg-secondary bg-gradient p-3'>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formGridState'>
          <Form.Label className='fw-bold'>Selecione uma opção</Form.Label>
          <Form.Select
            name='selectRota'
            value={field}
            onChange={({ target }) => setField(target.value)}
            defaultValue='todos'
          >
            <option value={null} selected>
              todos
            </option>
            {arrayRotas.map((rota) => (
              <option value={rota} key={rota}>
                {rota}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId='formGridCity'>
          <Form.Label className='fw-bold'>Digite sua Busca</Form.Label>
          <Form.Control
            placeholder='search'
            type='text'
            name='Busca'
            value={search}
            disabled={field !== 'faixa-salarial' ? false : true}
            onChange={({ target }) => setSearch(target.value)}/>
        </Form.Group>
        
        
        <Form.Group as={Col} controlId='min'>
        <Form.Label className='fw-bold'>Faixa Salarial</Form.Label>
          <Form.Control 
            placeholder='min'
            type='number'
            name='min'
            value={salario.min}
            min={1}
            onChange={({ target }) => setSalario({ ...salario, min: target.value })}
            disabled={field === 'faixa-salarial' ? false : true}
            data-testid='input-min'
            />
        </Form.Group>
        <Form.Group as={Col} controlId='max' className='align-self-end'>
          <Form.Control
            placeholder='max'
            type='number'
            name='max'
            value={salario.max}
            min={1}
            onChange={({ target }) => setSalario({ ...salario, max: target.value })}
            disabled={field === 'faixa-salarial' ? false : true}
            data-testid='input-max'
          />
        </Form.Group>

        <Form.Group as={Col} controlId='formGridZip' className='align-self-end'>
            <Button
              className='fw-bold'
              type='button'
              data-testid='service-request-button'
              onClick={handleSubmit}
            >
              Buscar Funcionários
            </Button>
        </Form.Group>
      </Row>
    </section>
  );
};

export default SelectSearch;


