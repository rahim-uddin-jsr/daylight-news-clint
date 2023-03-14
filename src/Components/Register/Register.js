import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { user, registerWithEmailPassword, updateUserProfile, verifyMail } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [accepted, setAccepted] = useState(false)

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
                handleEmailVerification()
            }).catch(error => {
                const massage = error.message;
                setError(massage)
            })
    }
    const handleEmailVerification = () => {
        verifyMail().then(() => {
            toast.success('Verification Mail Send')
        })
            .catch(error => {

            })
    }
    const handleAccepted = (e) => {
        const isChecked = e.target.checked;
        setAccepted(isChecked)
    }
    console.log(accepted);
    return (
        <div>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicProfileUrl">
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
                    <Form.Check
                        onChange={handleAccepted}
                        type="checkbox"
                        label={
                            <>
                                Agree
                                <Link to='/terms'>Terms and Condition</Link>
                            </>} />
                </Form.Group>
                {error && <h5 className='text-danger'>{error}</h5>}
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;