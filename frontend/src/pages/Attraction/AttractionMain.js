import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import AttractionService from '../../services/AttractionService';

function AttractionMain() {

    const [lstAttractions, setLstAttractions] = useState([]);

    useEffect(() => {
        getAllAttractions();
    }, []);

    const getAllAttractions = () => {
        AttractionService.getAllAttractions().then((result) => {            
            setLstAttractions(result);
        });
    }

    return (
        <Container className='mt-4'>
            <Row>
                <h2>List of attractions</h2>
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
                            <th>City ID</th>
                            <th>Country ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lstAttractions.map((item) => (
                            <tr key = {item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.comments}</td>
                                <td>{item.city_id}</td>
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