import React from 'react';

const Table = ({allEmployees}) => {
  
  return (
    <article className="content">
      <h2>Detalhes dos Funcionários</h2>
      <table className="rTable">
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
      </table>
    </article>
  )
}; 
  
export default Table;
