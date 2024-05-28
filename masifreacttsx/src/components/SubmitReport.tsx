import * as React from 'react';

import {

  Formik,

  FormikHelpers,

  FormikProps,

  Form,

  Field,

  FieldProps,

} from 'formik';



interface MyFormValues {

  pictureId: string,
  reportedDate: string,
  incidentDate: string,
  quantity: number,
  description: string

}



export const SubmitReport: React.FC<{}> = () => {

  const initialValues: MyFormValues = { pictureId: '',
    reportedDate: '',
    incidentDate: '',
    quantity: 0,
    description: '' };

  return (

    <div>

      <h1>Report Waste</h1>

      <Formik

        initialValues={initialValues}

        onSubmit={(values, actions) => {

            fetch("http://localhost:5223/api/Report/", {
                method: "POST",
                body: JSON.stringify({
                  reportedDate: values.reportedDate,
                  incidentDate: values.incidentDate,
                  quantity: values.quantity,
                  description: values.description,  
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
      
       
  
            
          console.log({ values, actions });

          alert(JSON.stringify(values, null, 2));

          actions.setSubmitting(false);

        }}

      >

        <Form>

          <label htmlFor="reportedDate">reportedDate</label>
          <Field id="reportedDate" name="reportedDate" placeholder="First Name" />

          <button type="submit">Submit</button>

        </Form>

      </Formik>

    </div>

  );

};

