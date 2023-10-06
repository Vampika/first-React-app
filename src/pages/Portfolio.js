import React, { useState } from 'react'
import Header from '../layouts/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';

import portfolioJson from '../portfolio.json'
import { act } from 'react-dom/test-utils';

const Portfolio = () => {
    let jobs = portfolioJson.jobs

    const [portfolioJsonState ,setState] = useState(jobs)
    const [actionSort, setActionSort] = useState('increase');
    const [filterTagValue, setFilterTagValue] = useState('')
    const [nameSearch, setNameSearchValue] = useState('')


    let copyPortfolioData = portfolioJsonState;

    //console.log(portfolioJson.jobs)
    let uniqueTags = []
    portfolioJson.jobs.forEach((job) => {
        job.tag.forEach((tag) => {
            if(!uniqueTags.includes(tag)) 
            uniqueTags.push(tag)
        })
        
    })
    console.log(uniqueTags)

    //setState(portfolioJsonState = portfolioJson.jobs.filter((job) => job.tag == event.target.value)

    function blabla(text)
    {
        return (<h1>{text}</h1>)
    }

    // Filter
    if(filterTagValue) {
       copyPortfolioData = copyPortfolioData.filter(job => {
            return job.tag.includes(filterTagValue)
            //return job.tag.filter(tag => tag.toUpperCase() === filterTagValue.toUpperCase()).length
       })
    } 

    //Search
    if(nameSearch){
        copyPortfolioData = copyPortfolioData.filter(job => {
            return job.title.includes(nameSearch)
        })
    }
    
    // Sort
    if(actionSort == "increase")
        copyPortfolioData.sort((a, b) => a.price > b.price ? 1 : -1)
    else 
        copyPortfolioData.sort((a, b) => a.price < b.price ? 1 : -1)

    return (
        
        <div className="App">
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item  href="/">Главная</Breadcrumb.Item>
                        <Breadcrumb.Item  active>Портфолио</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <div className="mb-2">
                            <Button variant="dark" onClick={() => setActionSort("increase")}>↑ По возрастанию цены</Button>
                        </div>
                        <div className="mb-2">
                            <Button variant="dark" onClick={() => setActionSort("decrease")}>↓ По убыванию цены</Button>
                        </div>
                        <Form>
                            {filterTagValue}

                            <Form.Select aria-label="Default select example" data-bs-theme="dark"  onChange={event => setFilterTagValue(event.target.value)}>
                                {uniqueTags.map(elem => {return <option>{elem}</option>})}
                            </Form.Select>

                            <br/>
                            <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Имя</InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                 onChange={event => setNameSearchValue(event.target.value)} />
                            </InputGroup>
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="6">

                        <form>

                        </form>

                        {blabla("Hello")}

                        {copyPortfolioData.map((job, i) => {
                            return <div key={i} className="cardDiv">
                                <Card style={{ width: '18rem' }} data-bs-theme="dark">
                                    <Card.Body>
                                        <Card.Title>{job.title}</Card.Title>
                                        <hr/>
                                        <Card.Text>
                                            
                                        <small>Теги: {job.tag.join()} <br/>
                                        Цена: {job.price}</small>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        })} 
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Portfolio;