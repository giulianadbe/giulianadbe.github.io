import React from 'react';

import Button from 'react-bootstrap/Button';
import profile from "./giuliana.jpeg";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import resume from './resume.pdf';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>        
          <div class="headline">
            <h1 className="header">Hi, I'm Giuliana De Bellis</h1>
            <h4 className="subtitle">I’m a second-year university student with a keen interest in computer science, programming and cyber security.</h4>
            <Button variant="info" className='subtitle' href={resume}>View My Resume</Button>
          </div>
        </Col>
        <Col sm={4}>
          <Image src={ profile } responsive rounded style={{ width: '100%' }}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;