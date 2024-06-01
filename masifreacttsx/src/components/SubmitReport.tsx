
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Button } from '@chakra-ui/button';
import { Card } from '@chakra-ui/react';
 
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
           
            
              fetch("http://localhost:5223/api/Report",{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  pictureId: values.pictureId,
                  reportedDate: today.getDate,
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
         </Card>
       </Formik>
     </div>
   );
 };



