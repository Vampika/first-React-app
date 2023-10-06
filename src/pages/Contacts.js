import React from 'react'
import Header from '../layouts/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListGroup from 'react-bootstrap/ListGroup';

const Contacts = () => {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item  href="/">Главная</Breadcrumb.Item>
                        <Breadcrumb.Item  active>Контакты</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="2">
                        <ListGroup data-bs-theme="dark">
                            <ListGroup.Item>Телефон:</ListGroup.Item>
                            <ListGroup.Item>E-mail</ListGroup.Item>
                            <ListGroup.Item>Telegram</ListGroup.Item>
                            <ListGroup.Item>GitHub</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg="6">
                        <ListGroup data-bs-theme="dark">
                            <ListGroup.Item>+7-777-77-77</ListGroup.Item>
                            <ListGroup.Item>email@email.com</ListGroup.Item>
                            <ListGroup.Item>@tg.me</ListGroup.Item>
                            <ListGroup.Item>blabla</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Contacts;