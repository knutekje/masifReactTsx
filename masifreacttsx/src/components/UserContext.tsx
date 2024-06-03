
import React, { createContext, useState } from 'react';

export interface UserStateInterface{
  loggedinIn: boolean;
  userid: number;
  username: string;
}

type StateContextType = {
  user: UserStateInterface;
  setUser: React.Dispatch<React.SetStateAction<UserStateInterface>>;
};


export const StateContext = createContext<StateContextType>(
  null as unknown as StateContextType,
);



type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState({
    
  loggedinIn: false,
  userid: 0,
  username: "string",
});


  return (
    <StateContext.Provider value={{user, setUser}}>{children}</StateContext.Provider>
  );
};
