import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';

import "../../assets/css/CityMain.css"
import CityService from '../../services/CityService';

function CityMain() {
    const [Cities, setCities] = useState([]);

    //pagination
    const itemsPerPage = 50;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCity = currentPage * itemsPerPage;
    const indexOfFirstCity = indexOfLastCity - itemsPerPage;
    const currentCities = Cities.slice(indexOfFirstCity, indexOfLastCity);

    const paginate = (pageNumber) => {
        const newPage = Math.min(Math.max(pageNumber, 1), Math.ceil(Cities.length / itemsPerPage));
        setCurrentPage(newPage);
    }

    const totalPages = Math.ceil(Cities.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    useEffect(() => {
        const fetchCities = async () => {
            try{
                const citiesData = await CityService.getAllCitites();
                setCities(citiesData);
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
                </Container>
            </Row>
            <Row>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md = "auto">
                            <small>Page No: {currentPage}</small>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md = "auto">
                            <Pagination>
                            <Pagination.First onClick={() => paginate(1)} />
                            <Pagination.Prev onClick={() => paginate(currentPage - 1)} />

                            {pageNumbers.map((pageNumber) => (
                                <>
                                {pageNumber < 6 && (
                                    <Pagination.Item key={pageNumber} onClick={() => paginate(pageNumber)} active={pageNumber === currentPage}>
                                    {pageNumber}
                                    </Pagination.Item>
                                )}
                                {pageNumber === 6 && (<Pagination.Ellipsis />)}
                                {pageNumber === totalPages && (
                                    <Pagination.Item key={totalPages} onClick={() => paginate(totalPages)} active={pageNumber === currentPage}>{totalPages}</Pagination.Item>
                                )}
                                </>
                            ))}
                            <Pagination.Next onClick={() => paginate(currentPage + 1)} />
                            <Pagination.Last onClick={() => paginate(totalPages)} />
                            </Pagination>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    );
}

export default CityMain;