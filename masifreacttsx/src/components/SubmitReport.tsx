
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Button } from '@chakra-ui/button';
import { Card, CardHeader, Grid, GridItem, Heading, Stack, TabPanel, Textarea } from '@chakra-ui/react';
 
 interface Values {
  pictureId: string,
  reportedDate: string,
  incidentDate: string,
  quantity: number,
  userID: string,
  foodID: string,
  description: string;
}


var today = new Date().toISOString().slice(0, 19).replace('T', ' ');
 
 
 export const SubmitReport = () => {
  
  



   return (
     <TabPanel>
       <Grid width={"25rem"}  templateColumns='repeat(1, 1fr)' gap={3}>

       <Formik
         initialValues={{
          pictureId: '',
          reportedDate: '',
          incidentDate: '',
          quantity: 0,
          userID: '',
          foodID: '',
          description: '',

         }}
         onSubmit={async(
           values: Values,
           { setSubmitting }: FormikHelpers<Values>
         ) => {        
           setTimeout(() => {
            console.log(values)
              fetch("http://localhost:5223/api/Report",{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  pictureId: values.pictureId,
                  reportedDate: today,
                  incidentDate: values.incidentDate,
                  quantity: values.quantity,
                  userID: 0,
                  foodID: 0,
                  description: values.description,})
              })
              ;
            
           }, 0);
         }}
       >
        <Card border={"Highlight"} backgroundColor={"#a4bd9d"} marginTop={"2rem"} borderRadius={"1rem"}>
        <CardHeader backgroundColor={"#789d6d"} borderRadius={"1rem"}><Heading size='md'>Register waste</Heading></CardHeader>
         <Form>
           
          <Stack marginTop={"1rem"} marginLeft={"0.2rem"}>
           
           <label htmlFor="Quantity">Quantity  </label>
           <Field id="quantity" type="number" name="quantity" placeholder="2" />
          
           <label htmlFor="incidentDate">Date of incident </label>
           <Field id="incidentDate" type="date" name="incidentDate" />
         
           <label htmlFor="description">Description</label>
           <Field
             id="description"
             name="description"
             placeholder="what happend?"
             type="text"
           />
           
           </Stack>
 
           <Button marginTop={"0.3rem"} type="submit">Submit</Button>
           
         </Form>
         </Card>
       </Formik>
       </Grid>
     </TabPanel>
   );
 };



