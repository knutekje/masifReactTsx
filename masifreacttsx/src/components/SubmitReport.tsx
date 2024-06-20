
import { Formik, Field, Form, FormikHelpers, FormikErrors } from 'formik';
import { Button } from '@chakra-ui/button';
import { Card, CardHeader, Grid, GridItem, Heading, Select, Stack, TabPanel, Textarea } from '@chakra-ui/react';
import { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from './UserContext';
import UploadFile from './UploadFile';
import { number } from 'yup';
import { resourceLimits } from 'worker_threads';
 
 interface Values {
  pictureId: string,
  reportedDate: string,
  incidentDate: string,
  quantity: number,
  userID: string,
  foodID: string,
  description: string;
}
interface foodInterface {
  id: number;
  title: string,
  price: number,
  unit: string,
  supplier: string;
  externalID: string;
  }

var today = new Date().toISOString().slice(0, 19);
 
 
 export const SubmitReport = () => {
  let fill = useContext(UserContext);  

  const [foodItem, setFoodItem] = useState<Array<foodInterface>>([]);

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
    const foodItems = async () => {
       let url = 'http://localhost:5223/api/FoodItem'
    
          const response = await fetch(url, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + fill.user?.token as string,
          }}
            
            
          );


          if (!response.ok) {
            console.log("failed response")
              throw new Error(
                  `Unable to Fetch Data, Please check URL
                  or Network connectivity!!`
              );
          }
          const data = await response.json();
          setFoodItem(data);
    }
      
    const handleUpload = async () => {
    
      if (file) {
        setStatus("uploading");

     
        const formData = new FormData();
        formData.append("file", file);
        
        try {
          const result = await fetch("http://localhost:5223/api/Bilde", {
            method: "POST",
            body: formData,
          });
  
          const data = await result.json();
          setPictureDbId(data.pictureId)
          

          console.log(data);
          setStatus("success");
        } catch (error) {
          console.error(error);
          setStatus("fail");
        }
        return 
      };
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
           {foodItem.map((item)=> (
           <Select placeholder='Select option'>
              <option value={item.id}>{item.title}</option>
              
            </Select>))}
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
 


