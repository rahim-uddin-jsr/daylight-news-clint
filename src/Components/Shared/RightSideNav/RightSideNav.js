import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(res => console.log(res.user))
            .catch(error => {
                console.log(error);
            })
    }
    const githubProvider = new GithubAuthProvider()

    const handleGithubSignIn = () => {
        providerLogin(githubProvider).then(res => console.log(res.user))
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <ButtonGroup className='w-100 mb-3' vertical>
                <Button onClick={handleGoogleSignin} variant='outline-primary'><FaGoogle /> Google SignIn</Button>
                <Button onClick={handleGithubSignIn} className='my-2' variant='outline-dark'><FaGithub />  Github SignIn</Button>
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