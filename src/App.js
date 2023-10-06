import React from 'react'
import Header from './layouts/Header'
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>          
        <Row>
          <Breadcrumb data-bs-theme="dark">
            <Breadcrumb.Item active>Главная</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
          <Row className="justify-content-md-center"><Col xs lg="4"><p>Это главная страница. Тут немного пусто...</p></Col></Row>
      </Container>
    </div>
  );
}

export default App;
