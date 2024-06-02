import { Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Report from "./Report";
import Incident from "./Incident";
import FoodItems from "./FoodItems";
import { SubmitReport } from "./SubmitReport";


function TabNav(){
    return(<Tabs variant='soft-rounded' colorScheme='green'>
    <TabList>
      <Tab>Report</Tab>
      <Tab>FoodItems</Tab>
      <Tab>Incident</Tab>
      <Tab>FormSubmit</Tab>
  
    </TabList>
  
    <TabPanels>
      
        <Report/>
        <FoodItems/>
        <Incident/>
        <TabPanel>
        <SubmitReport/>
        </TabPanel>

  </TabPanels>

</Tabs>
  )
}
export default TabNav;