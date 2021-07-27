import React, { useState } from 'react';
import logo from '../images/logo.png';
import LogoutButton from '../components/LogoutButton';
import api from '../services/api';

const DeleteEmployee = () => {
  const [Cpf, setCpf] = useState('');
  
  async function handleDelete() {
    const data = { Cpf };
    console.log(data);
    const response = await api.delete('/api/employees-delete', data);
    if(response.status === 204) {
      alert('Funcionário deletado com sucesso!');
    } else {
      alert('Erro ao deletar funcionário!')
    }
    /* if(Cpf !== '') {
      const response = await api.delete('/api/employees-delete', data);
      if(response.status === 204) {
        alert('Funcionário deletado com sucesso!');
      } else {
        alert('Erro ao deletar funcionário!')
      }
    } else {
      alert('Por favor, preencha os dados corretamente!')
    } */
  };

  return (
    <acticle>
      <div className="header">
        <img src={logo} alt='logo Allugator' className="logo-home"/>
        <h2>Deletar Funcionários</h2>
      </div>
      <form className="service-form">
        <input
          required
          placeholder="Cpf do funcionário"
          type="number"
          name="Cpf"
          value={Cpf}
          onChange={ ({target}) => setCpf(target.value) }
        />
        <button
          className="delete-button"
          type="button"
          data-testid="delete-employee"
          onClick={ handleDelete }
          >
          Deletar
        </button>
        <LogoutButton />
      </form>
    </acticle>
  )
}

export default DeleteEmployee;