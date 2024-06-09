
import React, { createContext, useContext, useState } from 'react';


interface loggedInterface{
  isAuthenticated: boolean;
  setIsAuthenticated: (value: React.Dispatch<React.SetStateAction<boolean> >) => boolean;
}
export const DefaultContextValue: loggedInterface = {
  isAuthenticated: false,
  setIsAuthenticated: () => false
}
export const AuthContext = createContext<loggedInterface>(DefaultContextValue);

export const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(DefaultContextValue);



  return (
    <AuthContext.Provider value={DefaultContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
