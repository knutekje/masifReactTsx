import { Text, Button, Card, CardBody, CardHeader, Center, Grid, Heading } from '@chakra-ui/react';

import { Header } from './components/Header';
import { TabNav } from './components/TabNav';
import Report from "./components/Report";
import Incident from "./components/Incident";
import { FoodItems } from "./components/FoodItems";
import { SubmitReport } from "./components/SubmitReport";


function App() {


  return (
    <>

    <Center fontFamily={"lato"}>
      <Grid>
        <Header />
        <TabNav />
        </Grid>
   </Center>
   </>
  );
}

export default App;
