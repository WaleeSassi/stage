import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then((data) =>
      console.log('DATAAA=>>', data),
    );
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider).then((data) => {
      console.log(data);
    });
  };

  const createUser = (email, password, lastname, firstname) => {
    return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      return (userCredential.user.displayName = firstname + ' ' + lastname);
    });
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [createUser, signIn]);
  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn, signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
