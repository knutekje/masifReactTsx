import { HStack } from "@chakra-ui/layout"
import { Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react"

export const UserBar = () => {
    return (
        <>
            <FormControl>
            <FormLabel>Username</FormLabel>  
            <Input type="text" />
            <FormLabel>Password</FormLabel>  
            <Input type="text" />
            <Button>Login</Button>
            </FormControl>
        </>
    )
}