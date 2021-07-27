import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import SelectSearch from '../components/SelectSearch';
import LogoutButton from '../components/LogoutButton';
import api from '../services/api';
import logo from '../images/logo.png'

const SearchEmployees = () => {
/*  const [allServices, setAllServices] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const responseService = await api.get('/api/services');
      const responseOrders = await api.get('/api/orders');
      setAllServices(responseService.data);
      setAllOrders(responseOrders);
    }
    loadServices();
  }, []); */

  return (
    <section className="pageOrder">
      <header className="header">
        <img src={logo} alt='logo Allugator' className="logo-home"/>
        <h1>Buscar Funcionários</h1>
      </header>
      <SelectSearch />
      <LogoutButton />
    </section>
  )
}

export default SearchEmployees;