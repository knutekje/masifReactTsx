
import React, { createContext, useState } from 'react';

interface UserState{
  loggedinIn: boolean;
  userid: number;
  username: string;
}

type StateContextType = {
  user: UserState;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StateContext = createContext<StateContextType>(
  null as unknown as StateContextType,
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState({
  loggedinIn: false;
  userid: 0;
  username: "";
});
  const value = {
    user,
    setUser,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
