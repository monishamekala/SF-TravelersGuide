import React from 'react';

import homeVideo from '../../assets/videos/CRUD Video.mp4';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Ratio from 'react-bootstrap/Ratio';

function Home() {
    return (
        <div style={{ width: "100%", height: 'auto' }}>
            <Ratio aspectRatio="16x9">
                <video autoPlay loop muted playsInline>
                    <source src={homeVideo} type="video/mp4"/>
                </video>
            </Ratio>
            <Container className='my-4'>
                <Row className="justify-content-md-center">
                    <Col md="auto"><Button variant="outline-secondary">City</Button></Col>
                    <Col md="auto"><Button variant="outline-secondary">Country</Button></Col>
                    <Col md="auto"><Button variant="outline-secondary">Attraction</Button></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;