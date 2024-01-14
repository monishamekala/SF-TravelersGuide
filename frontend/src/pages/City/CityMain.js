import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';
import '../../assets/css/CityMain.css';

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
        <div>
            <h1>Cities</h1>

            {/* <Container fluid="md">
                <Row className='city-headings'>
                    <Col><h3>ID</h3></Col>
                    <Col><h3>City</h3></Col>
                    <Col><h3>City Code</h3></Col>
                    <Col><h3>Country Code</h3></Col>
                </Row>
                {Cities.map((city) => (
                <Row>
                    <Col>{city.id}</Col>
                    <Col>{city.name}</Col>
                    <Col>{city.code}</Col>
                    <Col>{city.countrycode}</Col>
                </Row>
                ))}
            </Container> */}
            <Container fluid="md">
            <Table hover bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>City</th>
                        <th>City Code</th>
                        <th>Country Code</th>
                    </tr>
                </thead>
                <tbody>
                    {currentCities.map((city) => (
                        <tr key = {city.id}>
                            <td>{city.id}</td>
                            <td>{city.name}</td>
                            <td>{city.code}</td>
                            <td>{city.countrycode}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div>
                {Array.from({ length: Math.ceil(Cities.length / itemsPerPage) }, (_, index) => (
                    <button onClick={() => paginate(index + 1)}>{index + 1}</button>
                    // <Pagination size="lg">{index + 1}</Pagination>
                ))}
                <Pagination size="lg">1</Pagination>
            </div>
            </Container>
        </div>

    );
}

export default CityMain;