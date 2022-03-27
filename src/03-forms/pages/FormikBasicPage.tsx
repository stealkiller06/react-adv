import {FormikErrors, useFormik} from 'formik'

import "../styles/styles.css";


interface FormValues{
  firstname: string;
  lastname: string;
  email: string;
}
export const FormikBasicPage = () => { 

  const validate = ({firstname,lastname,email}:FormValues)=>{
    const errors:FormikErrors<FormValues> = {};

    if(!firstname){
      errors.firstname = 'Required'
    }else if(firstname.length > 15){
      errors.firstname = "Must be 15 characters or less"
    }

    if(!lastname){
      errors.lastname = 'Required'
    }else if(firstname.length >= 10){
      errors.lastname = "Must be 10 characters or less"
    }

    if (!email) {
         errors.email = 'Required';
         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
         errors.email = 'Invalid email address';
     }

     return errors


  }
  const {
    handleChange,
    values,
    handleSubmit,
    handleBlur,
    errors,
    touched
  } = useFormik({
     initialValues:{
       firstname:'teest',
       lastname:'',
       email:''
     },
      onSubmit:values=>{
        console.log(values)
      },
      validate

  })

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form 
      onSubmit={handleSubmit}
      noValidate>
        <label htmlFor="firstname">Firtsname</label>
        <input 
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstname}
        type="text" name="firstname" />
        {errors.firstname && touched.firstname && <span>{errors.firstname}</span>}

        

        <label 
        htmlFor="lastname">Lastname</label>
        <input 
                onBlur={handleBlur}

          onChange={handleChange}
          value={values.lastname}
        type="text" name="lastname" />
                {errors.lastname && touched.lastname && <span>{errors.lastname}</span>}
        <label htmlFor="email">Email</label>
        <input 
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}

        type="email" name="email" />
                {errors.email && touched.email && <span>{errors.email}</span>}
        

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
