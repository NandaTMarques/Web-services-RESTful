import React from 'react';
import logo from '../images/logo.png';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Row className='justify-content-md-center pt-5 mt-5 card-home'>
        <Col md='auto'>
          <Card style={{ width: '18rem', background: 'rgb(211, 207, 207)' }} className='text-center p-2 card'>
            <Card.Body>
              <Card.Img src={logo} alt='logo Allugator' sizes={200} className='home-logo'/>
            </Card.Body>
            <Card.Footer className='d-grid gap-2'>
              <Button
                size='lg'
                variant='warning'
                type='button'
                data-testid='register-button'
                onClick={ () => history.push('/search')}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.322) 2px 2px 6px' }}
              >
                Buscar Funcionário
              </Button>
              <Button
                size='lg'
                variant='warning'
                type='button'
                data-testid='search-button'
                onClick={ () => history.push('/add')}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.322) 2px 2px 6px' }}
              >
                Cadastrar Funcionário
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
