import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //!Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //!Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //!LogOut
  const logOut = () => {
    return signOut(auth);
  };
  //! Update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //!Google login
  const googleLogin =() =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  //!Observer
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        axios.post('http://localhost:5000/jwt',{email: currentUser.email})
        .then(data => {
          // console.log(data.data.token);
          localStorage.setItem('access-token', data.data.token)
          setLoading(false);
        })
      }
      else{
        localStorage.removeItem('access-token')
      }
    });
    return () => {
      return subscriber();
    };
  }, []);
  // console.log(auth);

  const authInfo = {
    user,
    createUser,
    loginUser,
    loading,
    logOut,
    googleLogin,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
