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
import { useContext } from 'react';

function App() {
  const fill = useContext(UserContext);  

  return (
    

    <Center fontFamily={"Ariel"}>
      <Grid>
        
        <UserContextProvider>
        
        <Header />
        {fill.user == null ? (<UserBar/> 
      ) : (<TabNav />)}

     
        
        </UserContextProvider>
        </Grid>
   </Center>
  );
}

export default App;
