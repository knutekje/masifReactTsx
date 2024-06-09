import { Grid, Tab, TabList, TabPanel, TabPanels, Tabs, useStatStyles } from "@chakra-ui/react";
import Report from "./Report";
import Incident from "./Incident";
import { FoodItems } from "./FoodItems";
import { SubmitReport } from "./SubmitReport";
import { useContext } from "react";
import { AuthContext } from "./UserContext";


export const TabNav =  () =>   {
return(
<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList marginTop={"1rem"}>
    <Tab>Report</Tab>
    <Tab>Incident</Tab>
    <Tab>Fooditems</Tab>
    <Tab>Submitreport</Tab>
   
  </TabList>
  
  <TabPanels>
    
    <Report/>

    <Incident/>
    <FoodItems/>
    
     <SubmitReport/>
    
  </TabPanels>
</Tabs>
)
}
