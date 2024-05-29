import React from 'react';
import { Button, Text, Card, CardBody, CardHeader,   FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input } from '@chakra-ui/react';
import { Form,  useFormik } from 'formik';


 

 export const SubmitReport = () => {


   const formik = useFormik({

     initialValues: {
       title: '',
       answer: '',
       

     },

     onSubmit: value => {
         
            fetch("http://localhost:5223/api/Report", {
              method: "POST",
              body: JSON.stringify({
                title: value.title,
                answer: value.answer,  
               
        }),
        
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
        
      });
      formik.resetForm();
     },

   });

   return (
<FormControl >
     <form onSubmit={formik.handleSubmit}>
       <FormLabel textShadow={"revert"} htmlFor="title">Title</FormLabel>
       <Input
         shadow={"unset"}
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
         
       />

       <FormLabel htmlFor="answer">Answer</FormLabel>
       <Input

       shadow={"unset"}
         id="answer"
         name="answer"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.answer}
       />

      <br></br>
      
       <Button type="submit">Submit</Button>
     </form>
     </FormControl>
   );

 };

