
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Button } from '@chakra-ui/button';
import { Card, Grid, TabPanel } from '@chakra-ui/react';
import { useState } from 'react';
 
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
  
  

   function setFieldValue(arg0: string, arg1: any) {
     throw new Error('Function not implemented.');
   }

   return (
     <div>
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
                  reportedDate: Date.now,
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
        <Card>
         <Form>
           
 
           <label htmlFor="quantity">quantity </label>
           <Field id="quantity" type="number" name="quantity" placeholder="Doe" />

           <label htmlFor="incidentDate">incidentDate </label>
           <Field id="incidentDate" type="date" name="incidentDate" placeholder="Doe" />
 
           <label htmlFor="description">description</label>
           <Field
             id="description"
             name="description"
             placeholder="john@acme.com"
             type="text"
           />
           <select
        name="colors"
   
        style={{ display: "block" }}
      >
        <option value="" label="Select a color">
          Select a color{" "}
        </option>
        <option value="red" label="red">
          {" "}
          red
        </option>
        <option value="blue" label="blue">
          blue
        </option>
        
        <option value="green" label="green">
          green
        </option>
      </select>
 
 <input id="pictureId" name="pictureId" type="file" value="" onChange={(event) => { if(event.currentTarget.files != null)
  setFieldValue("file", event.currentTarget.files[0]);
}} />
 
           <Button type="submit">Submit</Button>
         </Form>
         </Card>
       </Formik>
       </Grid>
     </div>
   );
 };



