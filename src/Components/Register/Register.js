import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { user, registerWithEmailPassword, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        registerWithEmailPassword(email, password)
            .then(result => {
                console.log(result);
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        alert('Registration Completed')
                        setError('')
                    }).catch((error) => {

                    });
            }).catch(error => {
                const massage = error.message;
                setError(massage)
            })
    }

    return (
        <div>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Profile Image Url</Form.Label>
                    <Form.Control name='photoUrl' type="url" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {error && <h5 className='text-danger'>{error}</h5>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;