import { HStack } from "@chakra-ui/layout"
import { Box, Button, Flex,  Square } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik"
import { useContext } from "react";
import { setLocalStorage, getLocalStorage } from "./LocalStorage";
import { UserContext, UserProps } from "./UserContext";


interface Values {
    email: string,
    password: string;
  }

  
export const UserBar = () => {
    const fill = useContext(UserContext);  
    
    if(fill.user == null){
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}

                onSubmit={async(
                    values: Values,
                    
                ) => {
                    const response = await fetch("http://localhost:5223/login",{
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',

                            
                        },
                        
                        body: JSON.stringify({
                            email: values.email,
                            password: values.password,
                            })
                            
                            
                    })
                    const logged = await response.json();
                    if (response.ok){
                        fill.setUser({name: values.email,
                            token: logged.accessToken})
                        }
                        
                    }
                 
                   
                     
                    }
                    
                    
                
            >   
            <Flex width={"inherit"} backgroundColor={"#a4bd9d"}borderWidth={"0.1rem"} borderColor={"black"}  borderRadius={"0.3rem"}>
                <Form>
                    <Square>
                    <label  htmlFor="email">Username  </label>
                    <Field id="email" type="email" name="email"/>
                    </Square>
                    <Square>
                    <label htmlFor="password">Password </label>
                    <Field   id="password" type="password" name="password"/>
                    </Square>
                    <Square>
                    <Button   type="submit">Login</Button>
                    </Square>
                    
                </Form>
                </Flex>
            </Formik>
        </>
    )}
    else {return (<Flex boxSize={"inherit"} backgroundColor={"#a4bd9d"}borderWidth={"0.1rem"} borderColor={"black"}  borderRadius={"0.3rem"}>Logged in as {fill.user.name} </Flex>)}    
}