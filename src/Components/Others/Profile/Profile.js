import React, { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    const nameRef = useRef(user?.displayName)
    const emailRef = useRef(user?.email)
    const photoUrlRef = useRef(user?.photoURL)
    const handleSubmit = (e) => {
        e.preventDefault()
        const displayName = nameRef.current.value;
        const photoURL = photoUrlRef.current.value;
        const email = emailRef.current.value;
        const updatedInfo = { displayName, email, photoURL }
        updateUserProfile(updatedInfo)
            .then(result => {
                toast.success('User Information Updated SuccessFully')
            }).catch(error => {
                toast.error('something went wrong try again later')
            })
    }
    return (
        <Form onSubmit={handleSubmit}>
            <h2 className='text-center text-secondary'> Your Profile Information</h2>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control ref={nameRef} defaultValue={user?.displayName} type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email Address</Form.Label>
                <Form.Control ref={emailRef} defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImgUrl">
                <Form.Label>Your PhotoUrl</Form.Label>
                <Form.Control ref={photoUrlRef} defaultValue={user?.photoURL} type="PhotoUrl" placeholder="Your Photo Url" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Profile
            </Button>
        </Form>
    );
};

export default Profile;