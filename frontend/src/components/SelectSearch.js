import React, { useState, useEffect } from 'react';

const SelectSearch = ({ setQuery }) => {
  const [field, setField] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setQuery({ field, search });
  }, [search]);

  const arrayRotas = ['nome', 'cpf', 'uf', 'cargo', 'datacad', 'salario', 'status'];
  return (
    <section className="form-select">
      <select
        name="selectRota"
        value={field} 
        onChange={ ({target}) => setField(target.value) }>
        {<option value={null} disabled selected>Todos</option>}
        {arrayRotas.map((rota, index) => (
          <option value={rota} key={index}>{ rota }</option>
          ))}
      </select>
      <input
        placeholder="Digite sua Busca"
        type="text"
        name="Busca"
        //value={Nome}
        min={1} 
        onChange={ ({target}) => setSearch(target.value) }
      />
      <button
      className="add-service-form"
      type="button"
      data-testid="service-request-button"
      //onClick={() => setRedirectAdd(true)}
      >
        Buscar
      </button>
    </section>
  )
}

export default SelectSearch;