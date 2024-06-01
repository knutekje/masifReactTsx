/* import React from 'react';
import { Button, Text, Card, CardBody, CardHeader,   FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input, 
    Box,
    Heading} from '@chakra-ui/react';
import { Form,  useFormik } from 'formik';


interface reportInterface{
    id: number;
    pictureId: string,
    reportedDate: string,
    incidentDate: string,
    quantity: number,
    userID: string,
    foodID: string,
    description: string;
}
var today = new Date();
 export const SubmitReport = () => {


   const formik = useFormik({

     initialValues: {
      pictureId: 'string',
      reportedDate: 'string',
      incidentDate: 'string',
      quantity: 0,
      userID: 0,
      foodID: 0,
      description: 'string',
       

     },

     onSubmit: value => {
            
            fetch("http://localhost:5223/api/Report",{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                pictureId: 'string',
                reportedDate: today.getDate(),
                incidentDate: value.incidentDate,
                quantity: value.quantity,
                userID: 0,
                foodID: 0,
                description: value.description,})
            });

            }})
        
       
     

   

   return (
<Card borderRadius={"1rem"} backgroundColor={"#a4bd9d"} marginTop={"2rem"}>
  <CardHeader borderRadius={"1rem"} backgroundColor={"#789d6d"}> 
    <Heading>Report Waste</Heading> 
  </CardHeader>
<FormControl marginLeft={"1rem"} marginRight={"1rem"} width={"auto"}>
     <form onSubmit={formik.handleSubmit}>
       <FormLabel textShadow={"revert"} htmlFor="quantity">quantity</FormLabel>
       <Input
         shadow={"unset"}
         id="quantity"
         name="quantity"
         type="number"
         borderColor={"#789d6d"}
         onChange={formik.handleChange}
         value={formik.values.quantity}
         
       />

       <FormLabel htmlFor="description">description</FormLabel>
       <Input

       shadow={"unset"}
         id="description"
         name="description"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.description}
       />
    <Input 
      value={formik.values.incidentDate} 
      name="incidentDate"  
      placeholder='Select Date and Time' 
      size='md' 
      id="incidentDate"
         
      type='date' />
      <br></br>
      
       <Button type="submit">Submit</Button>
     </form>
     </FormControl>

     </Card>
   );

 };
 */

 import 'react-app-polyfill/ie11';
 import * as React from 'react';
 import * as ReactDOM from 'react-dom';
 import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Button } from '@chakra-ui/button';
 
 interface Values {
  pictureId: string,
  reportedDate: string,
  incidentDate: string,
  quantity: number,
  userID: string,
  foodID: string,
  description: string;
}

var today = new Date();
 
 
 export const SubmitReport = () => {

  fetch("http://localhost:5223/api/Report",{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  pictureId: 'string',
                  reportedDate: today.getDate(),
                  incidentDate: "values.incidentDate",
                  quantity: 5,
                  userID: 7,
                  foodID: 6,
                  description: "values.description",})
              })

   return (
     <div>
       <h1>Signup</h1>
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
                  pictureId: 'string',
                  reportedDate: today.getDate(),
                  incidentDate: values.incidentDate,
                  quantity: values.quantity,
                  userID: 0,
                  foodID: 0,
                  description: values.description,})
              })
              ;
            
           }, 500);
         }}
       >
         <Form>
           <label htmlFor="pictureId">pictureId pictureId</label>
           <Field id="pictureId" name="pictureId" placeholder="John" />
 
           <label htmlFor="quantity">quantity Name</label>
           <Field id="quantity" type="number" name="quantity" placeholder="Doe" />

           <label htmlFor="incidentDate">incidentDate Name</label>
           <Field id="incidentDate" type="date" name="incidentDate" placeholder="Doe" />
 
           <label htmlFor="description">description</label>
           <Field
             id="description"
             name="description"
             placeholder="john@acme.com"
             type="text"
           />
 
           <Button type="submit">Submit</Button>
         </Form>
       </Formik>
     </div>
   );
 };



