import { Card, 
    CardHeader, 
    CardFooter,
    CardBody,
    Link, 
    Select,
    
    Text,
Heading} from "@chakra-ui/react"
import { useContext, useState } from "react";
import {UserContext } from "./UserContext";


interface foodInterface {
    id: number;
    title: string,
    price: number,
    unit: string,
    supplier: string;
    externalID: string;
    }
export const SelectFood =  () => {
    const [foodItem, setFoodItem] = useState<Array<foodInterface>>([]);
    const fill = useContext(UserContext);

        let url = 'http://localhost:5223/api/Report'
        async function fetchFoodItems(action: string, id: any): Promise<any> {
            
            
      
              try {
                console.log("im working")
                const response = await fetch(url, {
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + fill.user?.token as string,
                }}
                  
                  
                );
      
      
                if (!response.ok) {
                  console.log("failed response")
                    throw new Error(
                        `Unable to Fetch Data, Please check URL
                        or Network connectivity!!`
                    );
                }
                const data = await response.json();
                setFoodItem(data);
            } catch (error) {
                console.error('Some Error Occured:', error);
            }
        }
    return(
        <Select onChange={()=> fetchFoodItems}>

        {foodItem.map((item)=> (
          
            <option value={item.id}>{item.title}</option>
            
          
         
        ))}
        </Select>
 
    )
}