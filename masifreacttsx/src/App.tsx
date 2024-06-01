import { Text, Button, Card, CardBody, CardHeader, Center, Grid, Heading } from '@chakra-ui/react';
import FoodItems from './components/FoodItems';
import MainTab from './components/MainTab';
import { Header } from './components/Header';


function App() {


  return (
    <>

    <Center fontFamily={"lato"}>
      <Grid>

        <Header />
        <FoodItems />
  
        </Grid>
   </Center>
   </>
  );
}

export default App;
