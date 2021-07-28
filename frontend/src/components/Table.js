import React from 'react';
import { Table } from 'react-bootstrap';

const TableEmployees = ({allEmployees}) => {
  
  return (
    <div>
      <h2>Detalhes dos Funcionários</h2>
      <Table striped bordered hover variant="dark">
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
            <tr>
              <td>{allEmployees.Nome}</td>
              <td>{allEmployees.Cpf}</td>
              <td>{allEmployees.Cargo}</td>
              <td>{allEmployees.UfNasc}</td>
              <td>{allEmployees.Salario}</td>
              <td>{allEmployees.DataCad}</td>
              <td>{allEmployees.Status}</td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}; 
  
export default TableEmployees;
