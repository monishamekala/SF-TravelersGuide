// React built-in
import React, { useEffect, useState } from 'react';

// Navigation
import { useNavigate } from 'react-router-dom';

// React Bootstrap library
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Services and helpers
import AttractionService from '../../services/AttractionService';
import CityService from '../../services/CityService';
import Constants from '../../Constants';

function AttractionCreate() {

    // State variables
    const [lstCities, setLstCities] = useState([]);
    const [lstCountries, setLstCountries] = useState([]);
    const [attractionName, setAttractionName] = useState("");
    const [attractionDesc, setAttractionDesc] = useState("");
    const [attractionComm, setAttractionComm] = useState("");
    const [attractionCityId, setAttractionCityId] = useState("");
    const [attractionCountryId, setAttractionCountryId] = useState("");

    // Navigation variables
    let navigate = useNavigate();

    // useEffect(() => {       
    //     // Here will go the getAllCountries service method
    // }, []);

    const createAttraction = () => {
        let newAttraction = {
            name: attractionName,
            description: attractionDesc,
            comments: attractionComm,
            city_id: attractionCityId,
            country_id: attractionCountryId
        }        
        AttractionService.createAttraction(newAttraction).then((result) => {    
            // Pending to add swal library for animation        
            console.log('Attraction created:', result);
            setAttractionName("");
            setAttractionDesc("");
            setAttractionComm("");
            setAttractionCityId("");
            setAttractionCountryId("");
        });
    }

    const redirectRoute = (path) => {        
        navigate(path);
    }

    const filterCityByCountry = (country_code) => {
        CityService.getCityByCountryCode(country_code).then((result) => {            
            setLstCities(result);
        });
    }

    const onChangeCountryList = (val) => {        
        setAttractionCountryId(val);
        // INIT ------------------------------
        // Temporal code until Country Management (getAllCountries) is completed       
        let countryCode = "";
        if (val === '176') {
            countryCode = 'PE';
        }
        if (val === '103') {
            countryCode = 'IN';
        } else {
            countryCode = 'PE';
        }
        // END ------------------------------
        filterCityByCountry(countryCode);
    }    

    return (
        <Container className='my-4'>
            <Row className='my-2'>
                <h2>Create an attraction</h2>
            </Row>
            <Row className='mb-3'>
                <Col xs={12} sm={12} md={6}>
                    <Form>
                        <Form.Group className='mb-2'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' onChange={(event) => { setAttractionName(event.target.value) }} value={attractionName}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(event) => { setAttractionDesc(event.target.value) }} value={attractionDesc}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(event) => { setAttractionComm(event.target.value) }} value={attractionComm}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Select onChange={(event) => { onChangeCountryList(event.target.value) }} value={attractionCountryId}>
                                <option>Choose country</option>
                                <option value="176">Peru</option>
                                <option value="103">India</option>
                                {lstCountries.map((country, idx) => 
                                    <option key={idx} value={country.name}>{country.name}</option>
                                )}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>City</Form.Label>
                            <Form.Select onChange={(event) => { setAttractionCityId(event.target.value) }} value={attractionCityId}>
                                <option>Choose city</option>
                                {lstCities.map((city, idx) => 
                                    <option key={idx} value={city.id}>{city.name}</option>
                                    )}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" className='me-2' type='submit' onClick={() => { createAttraction() }}>Create</Button>
                    <Button variant="danger" onClick={() => { redirectRoute(Constants.attractionPaths.main) }}>Cancel</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AttractionCreate;