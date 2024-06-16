import {  Button, Grid, TabPanel } from "@chakra-ui/react";
import { CardHeader, Card, CardBody, CardFooter, Text, Heading,
     Link,}
   from '@chakra-ui/react';
import {  SetStateAction,  useContext,  useState } from "react";
import { UserContext } from "./UserContext";
import { PictureFetch } from "./PictureFetch";


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




function Report(){
  
  

    const [report, setReport] = useState<Array<reportInterface>>([]);

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
    function handleClickReport(){
        fetchReports('http://localhost:5223/api/Report');
       
      }
    

    return(    
      <TabPanel onClick={handleClickReport}>
        
         <Grid  width={"inherit"}  templateColumns='repeat(1, 1fr)' gap={3} marginTop={"0.5rem"}>
      {report.map((item)=> (
        <Card borderWidth={"0.1rem"} borderColor={"black"} backgroundColor={"#a4bd9d"} key={item.id}  borderRadius={"1rem"}>
          <Link><CardHeader backgroundColor={"#789d6d"} borderRadius={"1rem"}><Heading size='md'> {item.incidentDate}</Heading></CardHeader></Link>
    
      <CardBody>
        <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.quantity}</Text>
        <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.description}</Text>
        <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.reportedDate}</Text>
        <Text textOverflow={"clip"} flexWrap={"wrap"}>{item.pictureId}</Text>
<PictureFetch id={item.pictureId}/>
        
     
      </CardBody>
      <CardFooter>
    
      </CardFooter>
      </Card>
    ))}
    </Grid>
    </TabPanel>
    
    )
}
export default Report;

function isAuthenticated(value: SetStateAction<number>): void {
  throw new Error("Function not implemented.");
}
