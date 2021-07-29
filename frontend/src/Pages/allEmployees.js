import React, { useContext } from 'react';
import Header from '../components/Header';
import SelectSearch from '../components/SelectSearch';
import { Table, Button } from 'react-bootstrap';
import api from '../services/api';
import { GlobalContext } from '../Context';

function AllEmployees() {
  const { employees } = useContext(GlobalContext);

  async function handleDelete(cpf) {
    if(window.confirm('Deseja realmente excluir o funcionário?')) {
      const response = await api.delete(`/api/employees/delete/${cpf}`);
      if(response.status === 204) {
        alert('Funcionário deletado com sucesso!');
      } else {
        alert('Erro ao deletar funcionário!')
      };
    };
  };

  return (
    <article>
      <Header name="Funcionários"/>
      <SelectSearch/>
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
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={ employee.cpf }>
              <td>{employee.Nome}</td>
              <td>{employee.Cpf}</td>
              <td>{employee.Cargo}</td>
              <td>{employee.UfNasc}</td>
              <td>{employee.Salario}</td>
              <td>{employee.DataCad}</td>
              <td>{employee.Status}</td>
              <td>
                <>
                  <Button
                    variant="danger"
                    type="button"
                    data-testid="delete-buttton"
                    onClick={ () => handleDelete(employee.Cpf) }
                    className="delete-button"
                  >
                    Excluir
                  </Button>
                </>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </article>
  );
}

export default AllEmployees;
