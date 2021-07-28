import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center pt-5">
        <Col md='auto'>
          <Card style={{ width: '18rem' }} className="text-center p-2">
            <Card.Body>
              <Card.Img src={logo} alt='logo Senior' sizes={200} />
            </Card.Body>
            <Card.Footer className="d-grid gap-2">
                <Button
                size="lg"
                variant="warning"
                type="button"
                data-testid="register-button"
              >
                <Link to="/search" >
                  Buscar Funcionário
                </Link>
              </Button>
              <Button
              size="lg"
                variant="warning"
                type="button"
                data-testid="service-request-button"
              >
                <Link to="/add" >
                  Cadastrar Funcionário
                </Link>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;