import {  TabPanel } from "@chakra-ui/react";
import { CardHeader, Card, CardBody, CardFooter, Text, Heading,
     Link,}
   from '@chakra-ui/react';
import {  useState } from "react";


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

    fetchReports('http://localhost:5223/api/Report');

    return(    
      <div>
        <TabPanel onClick={handleClickReport}>
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
    </TabPanel>
      </div>)

}
export default Report;