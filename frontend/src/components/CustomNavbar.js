import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../assets/css/CustomNavbar.css';

function CustomNavbar(){
    return(
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary custom-navbar-bg-color">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Brand href="/" className='brand-name'>CRUD.</Navbar.Brand>
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    className = 'custom-offcanvas-bg'
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        CRUD App
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/city">City</Nav.Link>
                        <Nav.Link href="/country">Country</Nav.Link>
                        <Nav.Link href="/attraction">Attraction</Nav.Link>                  
                        </Nav>                
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>

                    
                </Container>
                </Navbar>
            ))}
        </>
    );
};

export default CustomNavbar;