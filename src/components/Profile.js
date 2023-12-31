import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';


import '../css/Profile.css';
import '../css/App.css';
import Me from "./media/me.jpg";
import Mee from "./media/mee.JPG";
import Na from "./media/naa.jpg"
import Me_iira from "./media/me_iira.jpg";

function Profile() {
    return (
        <div id='profile' className='ts'>
        <Container fluid className="profile-row">
            <Row>
                <Col className="column-greeting" xs={12} lg={4}>
                    <p className="greeting-sub"> Hello there !! it's me... </p>
                    <p className="greeting-name">TANMAY PATEL</p>
                </Col>


                <Col className="column-profile" xs={12} lg={4}>
                    <div className="profile">
                        <img className="profile-img" src={Me_iira} alt="pp" />
                    </div>


                </Col>


                <Col className="column-status" xs={12} lg={4}>
                    <p className="lower-profile-text"> Programmer & Full-Stack Developer</p>
                    <p className="lower-profile-text-sub">IT undergraduate at NIT Raipur</p>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Profile;
