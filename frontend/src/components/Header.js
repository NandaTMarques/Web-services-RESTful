import React from 'react';
import logo from '../images/logo.png';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ name }) => {
  return (
    <header className='container-fluid' style={{ background: 'rgb(211, 207, 207)'}}>
      <Row className='mb-4 pt-2 pb-2 bg-secondary'>
        <Col className='align-self-start'>
          <Badge bg="secondary" text='ligth' className='p-2'>
            <Link to='/' className='text-light'>{'<- Voltar'}</Link>
          </Badge>
        </Col>
      </Row>
      <Row className='pb-4'>
        <Col style={{ width: '20rem', display: 'flex' }}>
          <Card.Img src={logo} alt='logo Allugator' className='logo-header' />
          <h1 className='align-self-center ms-5'>{name}</h1>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
