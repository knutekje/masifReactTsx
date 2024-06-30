import { Center, Grid, Image, Text


 } from "@chakra-ui/react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { SelectFood } from "./SelectFood";



export const Header = () => {
    const fill = useContext(UserContext);


return(


<Center><Image marginTop={"5rem"} width={"18rem"} src='logo-no-background.png' marginBottom={"2rem"}/></Center>

)}

