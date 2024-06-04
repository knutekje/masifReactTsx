import { Text, Button, Card, CardBody, CardHeader, Center, Grid, Heading } from '@chakra-ui/react';

import { Header } from './components/Header';
import { TabNav } from './components/TabNav';
import { ContextProvider } from './components/UserContext';
import Report from "./components/Report";
import Incident from "./components/Incident";
import { FoodItems } from "./components/FoodItems";
import { SubmitReport } from "./components/SubmitReport";

const options = [
  { id: 'report', title: 'Report', component: <Report /> },
  { id: 'food_items', title: 'Food Items', component: <FoodItems /> },
  { id: 'incident', title: 'Incident', component: <Incident /> },
  { id: 'submit_report', title: 'Submit Report', component: <SubmitReport /> },
] // pass this to TabNav as props from the parent.


function App() {


  return (
    <>

    <Center fontFamily={"lato"}>
      <Grid>
        <ContextProvider>
        <Header />
        <TabNav props={options}/>
        </ContextProvider>
        </Grid>
   </Center>
   </>
  );
}

export default App;
