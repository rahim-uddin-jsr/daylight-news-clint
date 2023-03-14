import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { loginWithEmailPassword, setLoading } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailPassword(email, password)
            .then(result => {
                form.reset();
                console.log(result);
                if (result?.user?.emailVerified) {
                    toast.success('login success')
                    navigate(from, { replace: true });
                    setLoading(false)
                }
                else {
    toast.error('Your Email is not Verified. Please verify your email for login!')
}
            }).catch (error => {
    const massage = error.message;
    setError(massage)
})
            .finlay(() => {
    setLoading(false)
})
    }
return (
    <div>
        <Form onSubmit={handleLogIn}>
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
            <p>forgat Password?<Link to='/reset-password'> reset</Link></p>
            {error && <h5 className='text-danger'>{error}</h5>}
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    </div>
);
};

export default Login;