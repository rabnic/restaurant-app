import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {createNewUser, clearUser} = useContext(UserContext)
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
  
  }, []);

  const updateAuthUser = (updatedAuthUser) => {
    setAuthUser(updatedAuthUser)
    if(updatedAuthUser === null) {
      clearUser();
    } else {
      createNewUser(updatedAuthUser);
    }
  }

  // if (isLoading) {
  //   return null; 
  // }

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
