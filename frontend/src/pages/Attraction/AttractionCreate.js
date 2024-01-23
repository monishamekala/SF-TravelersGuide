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

// Services, classes, and helpers
import AttractionService from '../../services/AttractionService';
import CityService from '../../services/CityService';
import CountryService from '../../services/CountryService';
import Constants from '../../Constants';
import AttractionModel from '../../model/AttractionModel';

// Sweetalert2 library
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function AttractionCreate() {

    // State variables
    const [lstCities, setLstCities] = useState([]);
    const [lstCountries, setLstCountries] = useState([]);
    const [attractionForm, setAttractionForm] = useState(new AttractionModel());

    // Navigation variables
    let navigate = useNavigate();

    // Sweetalert2 variables
    const MySwal = withReactContent(Swal);

    useEffect(() => {       
        CountryService.getAllCountries().then((result) => {
            setLstCountries(result);
        });
    }, []);

    const createAttraction = () => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "This action will create an attraction.",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonText: 'Create',
            confirmButtonColor: '#0d6efd'
        }).then((result) => {
            if (result.isConfirmed) {
                AttractionService.createAttraction(attractionForm).then((result) => {
                    setAttractionForm(new AttractionModel());
                    MySwal.fire({ title: 'Created!', text: 'Attraction was successfuly created.', icon: 'success' });
                });                
            }
        })        
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
        var countryCode = "";
        countryCode = lstCountries.filter((country) => { return country.id == val })[0].code;
        filterCityByCountry(countryCode);
    }

    const handleAttractionChange = (event) => {
        let tmpObj = new AttractionModel();
        tmpObj.name = attractionForm.name;
        tmpObj.description = attractionForm.description;
        tmpObj.comments = attractionForm.comments;
        tmpObj.city_id = attractionForm.city_id;
        tmpObj.country_id = attractionForm.country_id;
        switch (event.target.id) {
            case 'attraction_name':
                tmpObj.name = event.target.value;
                break;
            case 'attraction_desc':
                tmpObj.description = event.target.value;
                break;
            case 'attraction_comments':
                tmpObj.comments = event.target.value;
                break;
            case 'attraction_countryid':
                tmpObj.country_id = event.target.value;
                onChangeCountryList(event.target.value);
                break;
            case 'attraction_cityid':
                tmpObj.city_id = event.target.value;
                break;
            default:
                break;
        }
        setAttractionForm(tmpObj);
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
                            <Form.Control id='attraction_name' type='text' onChange={handleAttractionChange} value={attractionForm.name}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Description</Form.Label>
                            <Form.Control id='attraction_desc' as="textarea" rows={3} onChange={handleAttractionChange} value={attractionForm.description}></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control id='attraction_comments' as="textarea" rows={3} onChange={handleAttractionChange} value={attractionForm.comments}></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Select id='attraction_countryid' onChange={handleAttractionChange} value={attractionForm.country_id}>
                                <option>Choose country</option>
                                {lstCountries.map((country, idx) => 
                                    <option key={idx} value={country.id}>{country.name}</option>
                                )}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className='mb-2'>
                            <Form.Label>City</Form.Label>
                            <Form.Select id='attraction_cityid' onChange={handleAttractionChange} value={attractionForm.city_id}>
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