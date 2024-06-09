

import {TabPanel } from "@chakra-ui/react";
import {  CardHeader, Grid, Card, CardBody, CardFooter, Text, Heading,
    Button, Link,}
   from '@chakra-ui/react';
import {  useState } from "react";



interface foodInterface {
  id: number;
  title: string,
  price: number,
  unit: string,
  supplier: string;
  externalID: string;
  }

export const FoodItems = () => {

 

    const [foodItem, setFoodItem] = useState<Array<foodInterface>>([]);

  
   
   
    async function fetchFoodItems(action: string, id: any): Promise<any> {
      let url = 'http://localhost:5223/api/FoodItem'
      switch(action){
        case "fetch":

        try {
          const response = await fetch(url);

            
           

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
    


        
          break;
        case "delete":
        
        try {
          
          const response = await fetch(url + "/" +id, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json'
              
            }
          });
            if (!response.ok) {
              console.log("failed response")
                throw new Error(
                    `errorerror`
                );
            }
            const data = await response.json();
            alert(data)
            
        } catch (error) {
            console.error('Some Error Occured:', error);
        }
            fetchFoodItems("fetch", 0);
      
          break;
        default:
          break;
      }}
        
            
     
function handleClickFoodItems(action: string, id: number){
 
  switch(action){
  case "delete":
    fetchFoodItems("delete", id);
    break;
  case "fetch":
    fetchFoodItems("fetch", 0);
    break;
  default:
    break;
}


 
}


return (
    
    <TabPanel onClick={() => handleClickFoodItems("fetch", 0)}>
    <Grid width={"inherit"} templateColumns='repeat(2, 1fr)' gap={3}>
  
  {foodItem.map((item)=> (
    <Card backgroundColor={"#a4bd9d"} key={item.id} marginTop={"2rem"} borderRadius={"1rem"}>
      <Link><CardHeader backgroundColor={"#789d6d"} borderRadius={"1rem"}><Heading size='md'> {item.title}</Heading></CardHeader></Link>

  <CardBody >
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.price}</Text>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.unit}</Text>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.supplier}</Text>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.externalID}</Text>

  
  </CardBody>
  <CardFooter>
    <Button onClick={() => handleClickFoodItems("delete", item.id)} value={item.id}>DELETE</Button>
    
  </CardFooter>
  </Card>
))}

  </Grid>
    </TabPanel>

)
} 

