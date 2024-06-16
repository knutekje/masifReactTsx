import { Text, Button, Card, CardBody, CardHeader, Center, Grid, Heading } from '@chakra-ui/react';

import { Header } from './components/Header';
import { TabNav } from './components/TabNav';
import Report from "./components/Report";
import Incident from "./components/Incident";
import { FoodItems } from "./components/FoodItems";
import { SubmitReport } from "./components/SubmitReport";
import { UserBar } from './components/UserBar';
import { UserContext } from './components/UserContext';
import UserContextProvider from './components/UserContext';


function App() {


  return (
    

    <Center fontFamily={"lato"}>
      <Grid>
        <UserContextProvider>
        <Header />
        <UserBar/>
        <TabNav />
        </UserContextProvider>
        </Grid>
   </Center>
  );
}

export default App;
