import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import "../styles/styles.css";


export const FormikComponents = () => { 
 

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
      initialValues={{
          firstname:'teest',
          lastname:'',
          email:'',
          terms:false,
          jobType:''
        }}

        onSubmit={(values)=>{
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstname:Yup.string()
                       .max(15, "Debe tener 15 caracteres o menos")
                       .required("Requerido"),
          lastname:Yup.string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("Requerido"),
          email:Yup.string().email("Email invalido").required("Requerido"),
          terms:Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType:Yup.string().required("requerido").notOneOf(['it-jr'],"Esta opcion no es permitida")
        })}
      >

        {
          ({handleSubmit})=>(
            <Form 
            onSubmit={handleSubmit}
            noValidate>
              <label htmlFor="firstname">Firtsname</label>
              <Field name="firstname" type="text" />
              <ErrorMessage component="span" className='' name='firstname' />
      
              <label 
              htmlFor="lastname">Lastname</label>
               <Field name="lastname" type="text" />
              <ErrorMessage  component="span" name='lastname' />

              <label htmlFor="email">Email</label>
              <Field name="email" type="text" />
              <ErrorMessage  component="span" name='email' />

              <label htmlFor="jobType">Email</label>
              <Field name="jobType" as="select" >
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-jr">It-Jr</option>


                </Field>
              <ErrorMessage  component="span" name='jobType' />

              <label >
              <Field name="terms" type="checkbox" />
                Terms and conditions
              </label>
              <ErrorMessage  component="span" name='terms' />


              <button type="submit"> Submit</button>
            </Form>
          )
        }

      </Formik>

     
    </div>
  );
};
