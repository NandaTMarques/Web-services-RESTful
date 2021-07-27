import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Form = () => {
  const [Nome, setNome] = useState();
  const [Cpf, setCpf] = useState();
  const [Cargo, setCargo] = useState();
  const [Salario, setSalario] = useState();
  const [UfNasc, setUfNasc] = useState();
  const [DataCad, setData] = useState();
  const [Status, setStatus] = useState();
  
  async function handleSubmit() {
    const data = { DataCad, Cargo, Cpf, Nome, UfNasc, Salario: parseFloat(Salario) };
    if(DataCad !== 'undefined' && Cargo !== 'undefined' && Cpf !== 'undefined' && Nome !== 'undefined' && UfNasc !== 'undefined' && Salario !== 'undefined') {
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
      <input
        placeholder="Nome"
        type="text"
        name="Nome"
        value={Nome}
        min={1} 
        onChange={ ({target}) => setNome(target.value) }
      />
      <input
        placeholder="Cpf"
        type="text"
        name="Cpf"
        value={Cpf}
        min={1} 
        onChange={ ({target}) => setCpf(target.value) }
      />
      <input
        placeholder="Cargo"
        type="text"
        name="cargo"
        value={Cargo}
        min={1} 
        onChange={ ({target}) => setCargo(target.value) }
      />
      <input
        placeholder="Salário"
        type="number"
        name="salario"
        value={Salario}
        min={1} 
        onChange={ ({target}) => setSalario(target.value) }
      />
      <input
        placeholder="Estado de Nascimento"
        type="text"
        name="ufNasc"
        value={UfNasc}
        min={1} 
        onChange={ ({target}) => setUfNasc(target.value) }
      />
      <button
        className="add-service-form"
        type="button"
        data-testid="add-service"
        onClick={ handleSubmit }
        >
        Cadastrar
      </button>
    </form>
  )
}

export default Form;