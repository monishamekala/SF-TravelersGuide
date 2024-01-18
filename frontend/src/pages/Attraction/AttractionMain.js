// React built-in
import React, { useEffect, useState } from 'react';

// Navigation
import { useNavigate } from 'react-router-dom';

// React Bootstrap library
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

// Services and helpers
import AttractionService from '../../services/AttractionService';
import CityService from '../../services/CityService';
import Constants from '../../Constants';

function AttractionMain() {

    // State variables
    const [lstAttractions, setLstAttractions] = useState([]);
    const [lstCities, setLstCities] = useState([]);

    // Navigation variables
    let navigate = useNavigate();

    // Function(s) that run once the component is mounted
    useEffect(() => {
        CityService.getAllCitites().then((result) => {
            setLstCities(result);
            getAllAttractions();
        });     
    }, []);    

    const redirectRoute = (path) => {        
        navigate(path);
    }

    const getAllAttractions = () => {
        AttractionService.getAllAttractions().then((result) => {            
            setLstAttractions(result);
        });
    }

    const filterCityForAttraction = (city_id) => {
        var cityFound = lstCities.filter(function (city) { return city.id === city_id })[0];
        return cityFound.name;
    }

    const searchAttraction = () => {
        console.log("Search attraction");
    }

    return (
        <Container className='my-4'>
            <Row>
                <Col>
                    <h2>List of attractions</h2>
                </Col>                                
            </Row>
            <Row className='my-2'>
                <Col xs={8}>
                    <Button variant='primary' onClick={() => { redirectRoute(Constants.attractionPaths.create) }}>Create</Button>
                </Col>
                <Col xs={4}>
                    <InputGroup>
                        <Form.Control placeholder='Search...' />
                        <Button variant='primary' onClick={() => { searchAttraction() }} >
                            <i className='bi bi-search'></i>
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Container fluid="md">
                    <Table hover bordered>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Comments</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lstAttractions.map((item) => (
                            <tr key = {item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.comments}</td>
                                <td>{filterCityForAttraction(item.city_id)}</td>
                                <td>{item.country_id}</td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                </Container>                
            </Row>
        </Container>
    );
}

export default AttractionMain;