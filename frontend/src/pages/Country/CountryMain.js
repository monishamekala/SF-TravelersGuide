import React, { useEffect, useState } from 'react';
import CountryService from '../../services/CountryService';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';

function CountryMain() {
    const [Countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAllCountries = async () => {
            try{
                const CountriesData = await CountryService.getAllCountries();
                console.log(CountriesData);
                setCountries(CountriesData);
            }catch(error){
                console.log(error);
            }
        };
        fetchAllCountries();
    }, []);

    return (
        <Container className='my-4'>
            <Row>
                <Col><h1>Countries</h1></Col>
            </Row>
            <Row>
                <Container fluid = 'md'>
                    <Table hover bordered>
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Phone</th>
                                <th>Capital</th>
                                <th>Currency</th>
                                <th>Continent</th>
                                <th>Continent Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Countries.map((country) => (
                                <tr key={country.id}>
                                    <td>{country.name}</td>
                                    <td>{country.phone}</td>
                                    <td>{country.capital}</td>
                                    <td>{country.currency}</td>
                                    <td>{country.continent}</td>
                                    <td>{country.continentCode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                
            </Row>
        </Container>
    );
}

export default CountryMain;