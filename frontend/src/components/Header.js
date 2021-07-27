import React from 'react';
import logo from '../images/logo.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt='logo Allugator' className="logo-home"/>
      <h1>Cadastrar Funcionários</h1>
    </header>
  )
}

export default Header;