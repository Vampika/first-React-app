import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Главная</Nav.Link>
                    <Nav.Link href="/about">Обо мне</Nav.Link>
                    <Nav.Link href="/contacts">Контакты</Nav.Link>
                    <Nav.Link href="/portfolio">Портфолио</Nav.Link>
                    <Nav.Link href="/calc">Калькулятор</Nav.Link>
                    <Nav.Link href="/weather">Погода</Nav.Link>
                </Nav>
                </Container>
      </Navbar>
        </>
    )
}

export default Header;