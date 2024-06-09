import { HStack } from "@chakra-ui/layout"
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react"
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
import { useContext } from "react";
import { AuthContext, useAuth } from "./UserContext";
import { setLocalStorage, getLocalStorage } from "./LocalStorage";


interface Values {
    email: string,
    password: string;
  }


  
  
  
export const UserBar = () => {
    let logginStatus = useAuth();

    if(logginStatus.isAuthenticated === false){
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
                    console.log(values)
                    fetch("http://localhost:5223/login",{
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
                    .then(response => (console.log(response.json(
                    ))))
                    
                    
                }

                }
            >   
            <Box boxSize={"inherit"} backgroundColor={"#a4bd9d"}borderWidth={"0.1rem"} borderColor={"black"}  borderRadius={"0.3rem"}>
                <Form>
                    <label  htmlFor="email">Username  </label>
                    <Field size={"inherit"} inlineSize={"max-content"} id="email" type="email" name="email"/>
                    <label htmlFor="password">Password </label>
                    <Field size={"inherit"} inlineSize={"max-content"} id="password" type="password" name="password"/>
                    <Button size={"inherit"} inlineSize={"max-content"} type="submit">Login</Button>
                </Form>
                </Box>
            </Formik>
        </>
    )}
    else {return (<Box>Logged in</Box>)}    
}