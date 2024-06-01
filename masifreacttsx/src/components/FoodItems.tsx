

import {TabPanel } from "@chakra-ui/react";
import {  CardHeader, Grid, Card, CardBody, CardFooter, Text, Heading,
    Button, Link,}
   from '@chakra-ui/react';
import {  useState } from "react";





function FoodItems(){

  interface foodInterface {
  id: number;
  title: string,
  price: number,
  unit: string,
  supplier: string;
  externalID: string;
  }

    const [foodItem, setFoodItem] = useState<Array<foodInterface>>([]);


   
   
    async function fetchFoodItems(url: string): Promise<any> {
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
    }

    async function deleteFoodItems(url: string): Promise<any> {
      
      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json'
            
          }
        });
          if (!response.ok) {
            console.log("failed response")
              throw new Error(
                  `Unable to Fetch Data, Please check URL
                  or Network connectivity!!`
              );
          }
          const data = await response.json();
          alert(data)
          
      } catch (error) {
          console.error('Some Error Occured:', error);
      }
fetchFoodItems('http://192.168.100.109:5223/api/FoodItem');
    }

   

       
            
     
function handleClickFoodItems(){
  fetchFoodItems('http://localhost:5223/api/FoodItem');
 
}


function deleteFoodItem(id: number){
  deleteFoodItems('http://localhost:5223/api/FoodItem/' + id);
 
}

fetchFoodItems('http://localhost:5223/api/FoodItem');

      

return (
    

  


    <TabPanel onClick={handleClickFoodItems}>
    <Grid width={"25rem"} templateColumns='repeat(2, 1fr)' gap={3}>
  
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
    <Button onClick={() => deleteFoodItem(item.id)} value={item.id} >DELETE</Button>
    
  </CardFooter>
  </Card>
))}

  </Grid>
    </TabPanel>
    

  
   






)
} 
export default FoodItems;