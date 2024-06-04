import { Grid, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Report from "./Report";
import Incident from "./Incident";
import { FoodItems } from "./FoodItems";
import { SubmitReport } from "./SubmitReport";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export const TabNav = ( options: any[] ) =>   {
return(
  <Tabs>
      <TabList>
        {options.map((item: { id: Key | null | undefined; component: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; })=> (<Tab key={item.id}>{item.component}</Tab>))}
       
      </TabList>
      <TabPanels>
      {options.map((item: { id: Key | null | undefined; component: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; })=> (<TabPanel key={item.id}>{item.component}</TabPanel>))}

        
      </TabPanels>
  </Tabs>
)
}