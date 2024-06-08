import { Text, Button, Card, CardBody, CardHeader, Center, Grid, Heading } from '@chakra-ui/react';

import { Header } from './components/Header';
import { TabNav } from './components/TabNav';
import Report from "./components/Report";
import Incident from "./components/Incident";
import { FoodItems } from "./components/FoodItems";
import { SubmitReport } from "./components/SubmitReport";
import { AuthContext, AuthProvider, useAuth } from './components/UserContext';
import { UserBar } from './components/UserBar';
function App() {


  return (
    

    <Center fontFamily={"lato"}>
      <Grid>
        <AuthProvider>
        <Header />
        <UserBar/>
        <TabNav />
        </AuthProvider>
        </Grid>
   </Center>
  );
}

export default App;
