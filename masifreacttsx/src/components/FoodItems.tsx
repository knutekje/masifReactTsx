

import { Box, CardHeader, Grid, Card, CardBody, CardFooter, Text, Heading,   Breadcrumb,
    Button, Link,
    BreadcrumbLink,
    BreadcrumbSeparator,} from '@chakra-ui/react';
import { useEffect, useState } from "react";




let fetchString = 'http://localhost:5223/api/FoodItem'


function FoodItems(){

  interface Item {
  id: number;
  title: string,
  price: number,
  unit: string,
  supplier: string;
  externalID: string;
  }

    const [foodItem, setFoodItem] = useState<Array<Item>>([]);
   
   
    async function fetchGET(url: string): Promise<any> {
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
       
            
     
function handleClick(){
  console.log("clickiety", foodItem)
  fetchGET('http://localhost:5223/api/FoodItem');
}

      

return (
    
<Box>
<Button onClick={handleClick}>Get it</Button>
<Grid templateColumns='repeat(3, 1fr)' gap={3}>
  
  {foodItem.map((item)=> (
    <Card key={item.id} marginTop={"2rem"} borderRadius={"1rem"}>
      <Link><CardHeader backgroundColor={"teal"} borderRadius={"1rem"}><Heading size='md'> {item.title}</Heading></CardHeader></Link>

  <CardBody>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.price}</Text>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.unit}</Text>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.supplier}</Text>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.externalID}</Text>
    
  </CardBody>
  <CardFooter>
 
  </CardFooter>
  </Card>
))}

  </Grid>



</Box>



)
} 
export default FoodItems;