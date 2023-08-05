import React , { useState , useEffect } from 'react';
import { Navbar, 
        Nav, 
        Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaGhost } from 'react-icons/fa';
import '../css/Navigation.css';

import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

// import { navigation } from '../EditMe';


function Navigation() {

    const [head, setHeader] = useState("header");

  const listenScrollEvent = event => {
    if (window.scrollY < 200) {
      return setHeader("nav1");
    } else if (window.scrollY > 200) {
      return setHeader("nav2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

    return (
        <Navbar variant="dark" className={head} expand="lg" sticky="top">
        
            <Navbar.Brand className="nav-brand" href="#profile">TANMAY <FaGhost/> </Navbar.Brand>
        
            
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
                {/* <Nav.Link className="nav-items" href="#aboutme"> About Me </Nav.Link>
                <Nav.Link className="nav-items" href="#education"> Education </Nav.Link>
                <Nav.Link className="nav-items" href="#skills"> Skills </Nav.Link>
                <Nav.Link className="nav-items" href="#portfolio"> Portfolio </Nav.Link>
                <Nav.Link className="nav-items" href="#contactme"> Contact Me </Nav.Link> */}
                <ul>
                  <li className='nav-items' ><a href="#aboutme"> About Me </a></li>
                  <li className='nav-items' ><a href="#education">Education</a></li>
                  <li className='nav-items' ><a href="#skills"> Skills </a></li>
                  <li className='nav-items' ><a href="#portfolio"> Portfolio </a></li>
                  <li className='nav-items' ><a href="#contactme">Contact</a></li>
                  <Button className="nav-resume ml-auto" href="https://drive.google.com/file/d/1U2mcgOfrgZo_Er6DxbG_8P-OVC8lWTRP/view?usp=sharing"  target="_blank" rel="noreferrer"> Resume {
                    <FontAwesomeIcon icon={ faFileDownload } /> }
                  </Button>
                </ul>

            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Navigation;


/*****

********************** this is for navigation logo photo 
{
    navigation.navLogo.isImage ? (
        <img src={navigation.navLogo.imageURL} className="nav-logo" width={navigation.navLogo.logoWidth} alt={navigation.navLogo.altText}/> 
    ) : (
        navigation.navLogo.altText
    )}



    for making thing right side we need to use ml-auto class 
    for bootstrap5 we have ms-auto instead of ml-auto (point to be remember) !!! 

*/
