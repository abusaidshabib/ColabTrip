import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, 
            currentUser => {
                setUser(currentUser);
                setLoading(false);
            })
            return () => unSubscribe();
    })

    //sign up with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login 
    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login with google popup
    const googlePopUp = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const allInfo = { googlePopUp, loading, user, createUser, signIn };

    return (
        <div>
            <AuthContext.Provider value={allInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    )
};

export default UserContext;