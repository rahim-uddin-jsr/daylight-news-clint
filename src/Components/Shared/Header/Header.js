import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSIdeNav from '../LeftSIdeNav/LeftSIdeNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <Navbar className='mb-3' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link style={{ textDecoration: 'none' }} to='/'><Navbar.Brand>Daylight News</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav className='d-flex align-items-center' >
                            {user?.uid ?
                                <>
                                    {user.displayName}
                                    <Button onClick={handleLogOut} variant='light'>LogOut</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'>
                                        <Button variant='primary'>LogIn</Button>
                                    </Link>
                                    <Link to='/register'>
                                        <Button className='mx-3' variant='primary'>Register</Button></Link>
                                </>}
                        </Nav>
                        {
                            user?.uid &&
                            <Nav.Link eventKey={2} href="#memes">
                                {user?.photoURL ? <Image roundedCircle style={{ height: '38px' }} src={user?.photoURL} ></Image >
                                    :
                                    <FaUser className='fs-2'></FaUser>
                                }
                            </Nav.Link>
                        }
                    </Nav>
                    <div className="d-lg-none">
                        <LeftSIdeNav />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;