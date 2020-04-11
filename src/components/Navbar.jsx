import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Navbar(props){
    return(
        <Container style={{backgroundColor:"#0000a0"}} className='navbar'>
            <Nav as="ul" style={{color:"white"}}>
                Home
            </Nav>
            <Nav as="ul" style={{color:"white"}}>
                About
            </Nav>
            <Nav as="ul" style={{color:"white"}}>
                Contact
            </Nav>
        </Container>
    );
};

export default Navbar;