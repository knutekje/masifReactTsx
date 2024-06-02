import { Text, Button, Card, CardBody, CardHeader, Center, Grid, Heading } from '@chakra-ui/react';

import { Header } from './components/Header';
import TabNav from './components/TabNav';
import { useState, useContext, createContext } from 'react';




function App() {

  const [user, setUser] = useState({
    user: "",
    userid: 0
  })
  const UserContext = createContext(user);
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
