import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';

import "../../assets/css/CityMain.css"

function CityMain() {
    const [Cities, setCities] = useState([]);

    //pagination
    const itemsPerPage = 100;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCity = currentPage * itemsPerPage;
    const indexOfFirstCity = indexOfLastCity - itemsPerPage;
    const currentCities = Cities.slice(indexOfFirstCity, indexOfLastCity);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchCities = async () => {
            try{
                const getCitiesURL = "/api/city/getallcities";
                const response = await axios.get(process.env.REACT_APP_API_URL.concat(getCitiesURL));
                setCities(response.data);
            }catch(err){
                console.log(err);
            }
        };
        fetchCities()
    }, []);

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col md = "auto"><h1>Cities</h1></Col>
            </Row>
            <Row>
            <Container fluid="md">
                <Row className='mx-4'>
                    <Col>
                        <Table hover bordered>
                            <thead>
                                <tr>
                                    <th>City</th>
                                    <th>City Code</th>
                                    <th>Country Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCities.map((city) => (
                                    <tr key = {city.id}>
                                        <td>{city.name}</td>
                                        <td>{city.code}</td>
                                        <td>{city.countrycode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                
                <Row className='mx-4'>
                    <Col>
                        <div>
                            {Array.from({ length: Math.ceil(Cities.length / itemsPerPage) }, (_, index) => (
                                <Pagination onClick={() => paginate(index + 1)}>{index+1}</Pagination>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
            </Row>
        </Container>
    );
}

export default CityMain;