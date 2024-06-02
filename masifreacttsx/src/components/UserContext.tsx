
import React, { createContext, useState } from 'react';

interface UserState{
  loggedinIn: boolean;
  userid: number;
  username: string;
}

type StateContextType = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const StateContext = createContext<StateContextType>(
  null as unknown as StateContextType,
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const value = {
    activeMenu,
    setActiveMenu,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
