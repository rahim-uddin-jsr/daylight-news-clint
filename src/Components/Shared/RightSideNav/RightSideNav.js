import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup className='w-100 mb-3' vertical>
                <Button variant='outline-primary'><FaGoogle /> Google SignIn</Button>
                <Button className='my-2' variant='outline-dark'><FaGithub />  Github SignIn</Button>
            </ButtonGroup>
            <section>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroupItem className='mb-2'><FaFacebook /> Facebook</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaYoutube /> YouTub</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaWhatsapp /> Whatsapp</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaTwitter /> Twitter</ListGroupItem>
                    <ListGroupItem className='mb-2'><FaTwitch /> Twitch</ListGroupItem>
                </ListGroup>
            </section>
            <section>
                <BrandCarousel />
            </section>
        </div>
    );
};

export default RightSideNav;