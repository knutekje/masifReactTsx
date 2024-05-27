
import './App.css';
import { Text, Button, Card, CardBody, CardHeader, Center, Flex, Heading } from '@chakra-ui/react';
function App() {
  return (
    <Center>
    <Flex gridAutoColumns={"auto"} margin-top={"5rem"} align={"center"} alignContent={"center"}>
      
      <Card margin-top={"10rem"}>
      <CardHeader><Heading>Masif Heading yalls</Heading> </CardHeader>
      <CardBody>

        <Text> WIcked text</Text>
      </CardBody>
   <Button>
    
    Masif centered button
   </Button>
   </Card>
   </Flex>
   </Center>
  );
}

export default App;
