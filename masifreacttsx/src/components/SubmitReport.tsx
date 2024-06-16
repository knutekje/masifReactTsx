
import { Formik, Field, Form, FormikHelpers, FormikErrors } from 'formik';
import { Button } from '@chakra-ui/button';
import { Card, CardHeader, Grid, GridItem, Heading, Stack, TabPanel, Textarea } from '@chakra-ui/react';
import { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from './UserContext';
import UploadFile from './UploadFile';
import { number } from 'yup';
 
 interface Values {
  pictureId: string,
  reportedDate: string,
  incidentDate: string,
  quantity: number,
  userID: string,
  foodID: string,
  description: string;
}


var today = new Date().toISOString().slice(0, 19);
 
 
 export const SubmitReport = () => {
  let fill = useContext(UserContext);  

  
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<
    "initial" | "uploading" | "success" | "fail"
  >("initial");
  
    const [PictureId, setPictureDbId] = useState();


    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setStatus("initial");
        setFile(e.target.files[0]);
      }
    }

      
    const handleUpload = async () => {
    
      if (file) {
        setStatus("uploading");

     
        const formData = new FormData();
        formData.append("file", file);
        
        try {
          const result = await fetch("http://localhost:5223/upload", {
            method: "POST",
            body: formData,
          });
  
          const data = await result.json();
         
          

          console.log(data);
          setStatus("success");
        } catch (error) {
          console.error(error);
          setStatus("fail");
        }
        pictureSave(file);
      };
      } 

      const pictureSave = (file: File) => {
        fetch("http://localhost:5223/api/Picture", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: 0,
            fileName: file.name,
            filePath: "string",
            description: file.type
          })
        })
        .then((response)=> response.json())
        .then((response) => setPictureDbId(response.id))
        
         
        
        
   
      
      }
      
        
      
    
   return (
     <TabPanel>
       <Grid width={"inherit"}  
       >

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
           setTimeout(async () => {
            await handleUpload();
              fetch("http://localhost:5223/api/Report",{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  pictureId: PictureId,
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
        <Card borderWidth={"0.1rem"} borderColor={"black"} backgroundColor={"#a4bd9d"} marginTop={"0.31rem"} borderRadius={"0.3rem"}>
        <CardHeader backgroundColor={"#789d6d"} borderRadius={"0.3rem"}><Heading size='md'>Register waste</Heading></CardHeader>
         <Form>
           
          <Stack >
           
           <label htmlFor="Quantity">Quantity  </label>
           <Field  id="quantity" type="number" name="quantity" placeholder="2" />
          
           <label htmlFor="incidentDate">Date of incident </label>
           <Field id="incidentDate" type="date" name="incidentDate" />
         
           <label htmlFor="description">Description</label>
           <Field
             id="description"
             name="description"
             placeholder="what happend?"
             type="text"
           />
           <input id="file" type="file" onChange={handleFileChange} />

           <Button type="submit">Submit</Button>
           </Stack>
 
           
           
         </Form>
         </Card>
       </Formik>
       </Grid>
     </TabPanel>
   );}
 


