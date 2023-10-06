import React from 'react'
import Header from '../layouts/Header'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import GitHub from './GitHub';

const About = () => {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Breadcrumb data-bs-theme="dark">
                        <Breadcrumb.Item  href="/">Главная</Breadcrumb.Item>
                        <Breadcrumb.Item  active>Обо мне</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="3">
                        <Image src="/fox.jpg" thumbnail />
                    </Col>
                    <GitHub />
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="6"><hr /><h4>Навыки</h4></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Row>
                            <Col lg="1">HTML: </Col> <Col> <ProgressBar variant="success" now={90} /> </Col>
                        </Row>                    
                        <Row>
                            <Col lg="1">CSS: </Col> <Col> <ProgressBar variant="info" now={80} /> </Col>
                        </Row>
                        <Row>
                            <Col lg="1">JS: </Col> <Col>  <ProgressBar variant="warning" now={70} /> </Col>
                        </Row>
                        <Row>
                            <Col lg="1">React: </Col> <Col>  <ProgressBar variant="danger" now={30} /> </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-md-center"><Col xs lg="6"><hr /><p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики. Великий Оксмокс предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу. Взобравшись на первую вершину курсивных гор, бросил он последний взгляд назад, на силуэт своего родного города Буквоград, на заголовок деревни Алфавит и на подзаголовок своего переулка Строчка. Грустный риторический вопрос скатился по его щеке и он продолжил свой путь. По дороге встретил текст рукопись. Она предупредила его: «В моей стране все переписывается по несколько раз. Единственное, что от меня осталось, это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не послушавшись рукописи, наш текст продолжил свой путь.  </p></Col></Row>
                <Row className="justify-content-md-center">
                    <Col lg ="6">
                        GitHub
                        <br></br>
                        <GitHub />
                    </Col>
                   
                </Row>
            </Container>
            
        </div>
    )
}

export default About;