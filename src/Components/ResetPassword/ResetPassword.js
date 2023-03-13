import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext)
    const handleResetPassword = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        console.log(email);
        resetPassword(email)
            .then(() => {
                alert('Password reset email sent!')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorMessage == 'Firebase: Error (auth/user-not-found).') {
                    alert('User not Found')
                }
                // alert(errorMessage, errorCode)
                // ..
            });
    }
    return (
        <div>
            <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send reset link
                </Button>
            </Form>
        </div>
    );
};

export default ResetPassword;