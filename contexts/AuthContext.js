import React, { createContext, useState, useEffect } from 'react';
import { firebase } from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setAuthUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const updateAuthUser = (updatedAuthUser) => {
    setAuthUser(updatedAuthUser)
  }

  if (isLoading) {
    return null; 
  }

  return (
    <AuthContext.Provider
      value={{
        authUser,
        updateAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
