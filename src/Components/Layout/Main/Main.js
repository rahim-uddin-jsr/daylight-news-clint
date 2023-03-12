import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import LeftSIdeNav from '../../Shared/LeftSIdeNav/LeftSIdeNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                        <LeftSIdeNav />
                    </Col>
                    <Col lg='7'>
                        <Outlet />
                    </Col>
                    <Col lg='3'>
                        <RightSideNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Main;