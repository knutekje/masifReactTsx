import { Tab, TabList, TabPanel, TabPanels, Tabs, Image } from "@chakra-ui/react";
import { Box, CardHeader, Grid, Card, CardBody, CardFooter, Text, Heading,
    Button, Link,}
   from '@chakra-ui/react';
import { useEffect, useState } from "react";

interface incidentInterface{
    reportID: number,
    identityUser: number,
    foodID: string,
    itemPrice: number,
    valueIncident: number
  }


function Incident(){
    const [incident, setIncident] = useState<Array<incidentInterface>>([]);


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

    function handleClickIncident(){
        fetchIncidents('http://localhost:5223/api/Incident');
       
      }
      fetchIncidents('http://localhost:5223/api/Incident');
      
    return(   <TabPanel onClick={handleClickIncident}> 
        <Grid width={"25rem"}  templateColumns='repeat(3, 1fr)' gap={3}>
      
      {incident.map((item)=> (
        <Card key={item.foodID} marginTop={"2rem"} borderRadius={"1rem"}>
          <Link><CardHeader backgroundColor={"#789d6d"} borderRadius={"1rem"}><Heading size='md'> {item.valueIncident}</Heading></CardHeader></Link>
    
      <CardBody>
        <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.foodID}</Text>
     
        
      </CardBody>
      <CardFooter>
     
      </CardFooter>
      </Card>
    ))}
    
      </Grid>
      </TabPanel>
    )
}
export default Incident;