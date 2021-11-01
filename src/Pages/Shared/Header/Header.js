import React from 'react';
import { Button, ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="nav-background"  variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand href="#home">Travel</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={Link} className="text-color"  to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-color"  to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} className="text-color"  to="/home#guides">Guides</Nav.Link>
                        {user?.email ?
                        
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} className="text-color"  to="/login">Login</Nav.Link>}
                        <Nav.Link as={Link}   className="text-color"  to="/">My Orders</Nav.Link> 
                        <Nav.Link as={Link} className="text-color"  to="/allManage">Manage All</Nav.Link> 
                        <Nav.Link as={Link} className="text-color"  to="/addService">Add Service</Nav.Link> 

                            
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;