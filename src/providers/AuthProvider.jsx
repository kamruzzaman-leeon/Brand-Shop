import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth, googleProvider } from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSignIn = async () => {
        setLoading(true)
        try {
            await signInWithPopup(auth, googleProvider);
          } finally {
            setLoading(false);
          }
    };

    const signIn = async (email, password) => {
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password);
          } finally {
            setLoading(false);
          }
    };

    const createUser = async (email, password) => {
        setLoading(true)
        try{
            await createUserWithEmailAndPassword(auth,email,password)
        } finally {
            setLoading(false);
        }       
    }

    const handleUpdateProfile = async (name, photo) => {
        try {
          setLoading(true);
          await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          });
        } finally {
          setLoading(false);
        }
      };

      const logOut = async () => {
        
      
          await signOut(auth);
      
      };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {           
            setUser(user);
            setLoading(false);      
        });
        return () => {
            unSubscribe()
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        handleUpdateProfile,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object,
}

export default AuthProvider;