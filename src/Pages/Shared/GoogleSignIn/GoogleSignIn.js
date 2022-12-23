import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const GoogleSignIn = () => {

    const { googlePopUp } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGPopUp = () => {
        googlePopUp(googleProvider)
            .then(result => {
                const user = result.user;
                newUser(user?.email, user?.displayName);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }

    const newUser = (email, name) => {
        const newreg = {
            email: email,
            name: name,
            category: "customer"
        }
        console.log(newreg);
    }

    return (
        <>
            <Button className='my-5' onClick={handleGPopUp} variant="primary">Sign In With Google</Button>
            <ToastContainer />
        </>
    );
};

export default GoogleSignIn;