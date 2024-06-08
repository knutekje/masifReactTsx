
import React, { createContext, useContext, useState } from 'react';


interface loggedInterface{
  isAuthenticated: number;
  setIsAuthenticated: (value: React.Dispatch<React.SetStateAction<any> >) => any;
}
export const DefaultContextValue: loggedInterface = {
  isAuthenticated: 1,
  setIsAuthenticated: () => 2
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
