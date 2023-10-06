import React, { useState } from 'react'
import Header from '../../../layouts/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class WeatherApp extends React.Component {

    constructor (){
        super()

        // fetch
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <div className="weather">
                    <Row className="justify-content-md-center">
                        <Col lg="6">
                            <Form>
                            <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Широта</InputGroup.Text>
                            <Form.Control
                                placeholder="Latitude" aria-label="Latitude" aria-describedby="basic-addon1" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Долгота</InputGroup.Text>
                            <Form.Control
                                placeholder="Longitude" aria-label="Longitude" aria-describedby="basic-addon1" />
                            </InputGroup>
                            <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Город</InputGroup.Text>
                            <Form.Control
                                placeholder="City" aria-label="City" aria-describedby="basic-addon1" />
                            </InputGroup>
                            <Button variant="dark">Показать</Button>
                            </Form>
                        </Col>
                        <Col lg="6">
                            <div className='weatherDiv'>
                                <p>Тут будет погода</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}

export default WeatherApp;