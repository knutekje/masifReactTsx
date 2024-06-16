

import {TabPanel } from "@chakra-ui/react";
import {  CardHeader, Grid, Card, CardBody, CardFooter, Text, Heading,
    Button, Link,}
   from '@chakra-ui/react';
import {  useState } from "react";

const token = "CfDJ8MeD4YBqL-1OqiwjZtZx7Ucrm4wmlG7M9GewAJnK4xxaYO4YDrbtk7oCfXddlOuwDpbyUqJecTsEN_DXLRdFlFUQo358qDA-RO4E75sw6EqtOO3qHS8H1JWRxtGHU6z-QauWrqdBiNmDtEKLRSCz0RxUl_tq4_H4GGe0iaU9FFimfzD7rJmDJjzsFu0RveQOS7z-RFW7AemZIFUz34n67gTbxxnqvWRC-UMRw16I4eAzVqeo1glzAnI-N36hUye4Z80oT3aPVqcO6no3r7L1NOPYDN8UkBn_ahhEJnv0NMO14GKf7SOz8w7W4_N42FGb_7nytZfCt2FebCVqBkb4hWuxEuI4X0JYcrx-0_AYPqeUqFum932LRmMKiRKY_yu0FioSqwhcrnc4LoaFIYfcWXr9x9K883acNLGzJaMcE7oywnnmgLjZ7kdDewrqq8Cw6v6igZkZP4Nfr2I8nwLrNXP2NuuX_qTVmC6HWgJpZavnti_tmYwkGii0YeJnRz0TYlD6-ydzTlzzC8Aw_n2_a5Zk2yTEponRnesInbG9MzoNpM50VbxI-7WJGzJLef2htXI1R0ap7-faG9p1b8wjWHJs0tgoHnm_uWeSDyTVGLWM_B9qZXInqilpiSmp9hhNBDtudwFsX3ixBRaMwzLTEJH-HOHsr3OieCI98vNQ34QT8Nii9Iq6vcPJQleDzMjSkA"

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
          const response = await fetch(url, {
            headers: {
              'authorization': token,
              "Accept": "application/json"
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

