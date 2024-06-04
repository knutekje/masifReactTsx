
import React, { useState } from 'react';

export function createContext<T>() {
  const context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const value = React.useContext(context);
    if (value === undefined) {
      throw new Error(
        `useContext must be used inside a Provider with a value that's not undefined`,
      );
    }
    return value;
  };
  return [useContext, context.Provider] as const;
}

type StateContextType = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const [useContext, Provider] = createContext<StateContextType>();

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const value = {
    activeMenu,
    setActiveMenu,
  };

  return <Provider value={value}>{children}</Provider>;
};
