
import './App.css';
import { Text, Button, Card, CardBody, CardHeader, Center, Grid, Heading } from '@chakra-ui/react';
function App() {
  let something = "var";
  return (
    <Center>
<Grid alignSelf={"center"} alignContent={"center"} templateColumns='repeat(5, 1fr)' gap={6}>      
      <Card margin-top={"10rem"}>
      <CardHeader><Heading>Masif Heading yalls</Heading> </CardHeader>
      <CardBody>

        <Text> {something}</Text>
      </CardBody>
   <Button>
    
    Masif centered button
   </Button>
   </Card>
   </Grid>
   </Center>
  );
}

export default App;
