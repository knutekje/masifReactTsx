

import { Tab, TabList, TabPanel, TabPanels, Tabs, Image } from "@chakra-ui/react";
import { Box, CardHeader, Grid, Card, CardBody, CardFooter, Text, Heading,
    Button, Link,}
   from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { SubmitReport } from "./SubmitReport";





function FoodItems(){

  interface foodInterface {
  id: number;
  title: string,
  price: number,
  unit: string,
  supplier: string;
  externalID: string;
  }


  interface reportInterface {
    id: number;
    pictureId: string,
    reportedDate: string,
    incidentDate: string,
    quantity: number,
    userID: string,
    foodID: string,
    description: string;

  }

  interface reportInterface{
    reportID: number,
    identityUser: number,
    foodID: string,
    itemPrice: number,
    valueIncident: number
  }
  



    const [foodItem, setFoodItem] = useState<Array<foodInterface>>([]);
    const [report, setReport] = useState<Array<reportInterface>>([]);
    const [incident, setIncident] = useState<Array<reportInterface>>([]);


   
   
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
          
      } catch (error) {
          console.error('Some Error Occured:', error);
      }
fetchFoodItems('http://localhost:5223/api/FoodItem');
    }

    async function fetchReports(url: string): Promise<any> {
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
          setReport(data);
      } catch (error) {
          console.error('Some Error Occured:', error);
      }
    }

    async function fetchIncidents(url: string): Promise<any> {
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
          setIncident(data);
      } catch (error) {
          console.error('Some Error Occured:', error);
      }
    }
       
            
     
function handleClickFoodItems(){
  fetchFoodItems('http://localhost:5223/api/FoodItem');
 
}

function handleClickReport(){
  fetchReports('http://localhost:5223/api/Report');
 
}
function deleteFoodItem(id: number){
  deleteFoodItems('http://localhost:5223/api/FoodItem/' + id);
 
}

function handleClickIncident(){
  fetchIncidents('http://localhost:5223/api/Incident');
 
}
      

return (
    

  

<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab onClick={handleClickReport}>Report</Tab>
    <Tab onClick={handleClickFoodItems}>FoodItems</Tab>
    <Tab onClick={handleClickIncident}>Incident</Tab>
    <Tab>FormSubmit</Tab>

  </TabList>

  <TabPanels>
    <TabPanel>
    {/* Report Tab */}
<Grid width={"25rem"} templateColumns='repeat(2, 1fr)' gap={3}>
  
  {report.map((item)=> (
    <Card key={item.id} marginTop={"2rem"} borderRadius={"1rem"}>
      <Link><CardHeader backgroundColor={"#789d6d"} borderRadius={"1rem"}><Heading size='md'> {item.incidentDate}</Heading></CardHeader></Link>

  <CardBody>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.foodID}</Text>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.description}</Text>
 
  </CardBody>
  <CardFooter>
 
  </CardFooter>
  </Card>
))}

  </Grid>

    </TabPanel>

    {/* FoodItem Tab */}
    <TabPanel>
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
    {/* Incident Tab */}
    <TabPanel> 
    <Grid width={"25rem"}  templateColumns='repeat(3, 1fr)' gap={3}>
  
  {incident.map((item)=> (
    <Card key={item.id} marginTop={"2rem"} borderRadius={"1rem"}>
      <Link><CardHeader backgroundColor={"#789d6d"} borderRadius={"1rem"}><Heading size='md'> {item.incidentDate}</Heading></CardHeader></Link>

  <CardBody>
    <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.foodID}</Text>
 
    
  </CardBody>
  <CardFooter>
 
  </CardFooter>
  </Card>
))}

  </Grid>
  
    </TabPanel>
    <TabPanel>
    <Grid width={"25rem"} ><SubmitReport /></Grid>
    
  </TabPanel>
  </TabPanels>

</Tabs>






)
} 
export default FoodItems;