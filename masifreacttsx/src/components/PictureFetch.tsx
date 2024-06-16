import { Text, Image } from "@chakra-ui/react"
import { useState } from "react";

//const ImageToggleOnMouseOver = ({source}: {source: string}) : JSX.Element => { ... }
export const PictureFetch = ({id}: {id: string}) => {
    const [pictureName, setPictureName] = useState();
    fetch("http://localhost:5223/api/Picture" + "/" + id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          
        }})
        .then((response) => (response.json()))
        .then((response) => setPictureName(response.fileName))
        console.log(pictureName)
        
    return (<Image src={pictureName}/>)
}