import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';

const GitHub =  () => {

    const [gitResume, setGitResume] = useState('')

    if(!gitResume) 
    {
        let resume = fetch('https://api.github.com/users/vampika').then(r => r.json()).then(data => {
            setGitResume(data)
        })

        return 'Loading...'
    } else {
        console.log(gitResume)
        return (              
                
                <Col lg="3">
                    <ListGroup variant="flush" data-bs-theme="dark">
                        <ListGroup.Item>Имя: {gitResume.name}</ListGroup.Item>
                        <ListGroup.Item>Фамилия: Пульнева</ListGroup.Item>
                        <ListGroup.Item>Дата рождения: 11.05.1996</ListGroup.Item>
                        <ListGroup.Item>Git: {gitResume.html_url}</ListGroup.Item>
                        <ListGroup.Item>Место жительства: {gitResume.location}</ListGroup.Item>
                    </ListGroup>
                </Col>
        )
    }
}

export default GitHub;