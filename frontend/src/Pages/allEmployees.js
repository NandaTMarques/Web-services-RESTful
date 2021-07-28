import React, { useEffect, useState } from 'react';
import api, { apiAxios } from '../services/api';
import logo from '../images/logo.png';
import ReturnButton from '../components/ReturnButton';
import SelectSearch from '../components/SelectSearch';
import { Table } from 'react-bootstrap';

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    async function loadEmployees() {
      if (query) {
        const route = `api/employees-${query.field}`;
        const response = await apiAxios({ method: 'get', route, params: query.search });
        setEmployees(response.data);
      } else {
        const route = 'api/employees';
        const response = await apiAxios({ method: 'get', route});
        setEmployees(response.data);
      }
    }
    loadEmployees();
  }, [query]);

  return (
    <article>
      <div className="header">
        <img src={logo} alt='logo Allugator' className="logo-home"/>
        <h2>Funcionários</h2>
      </div>
      <ReturnButton />
      <SelectSearch setEmployees={ setEmployees }/>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Cargo</th>
            <th>Estado</th>
            <th>Salário</th>
            <th>Data de Cadastro</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={ employee._id }>
              <td>{employee.Nome}</td>
              <td>{employee.Cpf}</td>
              <td>{employee.Cargo}</td>
              <td>{employee.UfNasc}</td>
              <td>{employee.Salario}</td>
              <td>{employee.DataCad}</td>
              <td>{employee.Status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ReturnButton />
    </article>
  );
}

export default AllEmployees;