import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import LogoutButton from '../components/LogoutButton';
// import api from '../services/api';

const AddEmployee = () => {
/*   const [allEmployees, setAllEmployees] = useState([]);

  useEffect(() => {
    async function loadEmployees() {
      const response = await api.get('/api/employees');
      console.log(response);
      setAllEmployees(response);
    }
    loadEmployees();
  }, []); */

  return (
    <section className="pageOrder">
      <Header />
      <Form />
      <LogoutButton />
    </section>
  )
}

export default AddEmployee;
