import { HStack } from "@chakra-ui/layout"
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react"
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik"
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
                        console.log(logged.accessToken)
                        fill.setUser({name: values.email,
                            token: logged.accessToken})
                        }
                        
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
    else {return (<Box>Logged in as {fill.user.name} </Box>)}    
}