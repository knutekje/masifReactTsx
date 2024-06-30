import {createContext, useEffect, useState} from 'react'


export type UserInterface = {
    userid: number,
    username: string,
    token: string,

}

export type UserProps = {
  user: {
      name?: string,
      token?: string
  } | null,
  setUser: React.Dispatch<React.SetStateAction<{} | null>>
} 

export const UserContext  = createContext<UserProps>({} as UserProps)

type UserContextProviderProps = {
    children: React.ReactNode

}

const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<{} | null>(null)

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
        }
        
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
