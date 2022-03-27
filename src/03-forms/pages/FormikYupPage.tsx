import {useFormik} from 'formik'
import * as Yup from 'yup'
import "../styles/styles.css";


export const FormikYupPage = () => { 

 
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps
  } = useFormik({
     initialValues:{
       firstname:'teest',
       lastname:'',
       email:''
     },
      onSubmit:values=>{
        console.log(values)
      },
      validationSchema:Yup.object({
        firstname:Yup.string()
                     .max(15, "Debe tener 15 caracteres o menos")
                     .required("Requerido"),
        lastname:Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
        email:Yup.string().email("Email invalido").required("Requerido")
      })

  })

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form 
      onSubmit={handleSubmit}
      noValidate>
        <label htmlFor="firstname">Firtsname</label>
        
        <input type="text" {...getFieldProps('firstname')}  />

        {errors.firstname && touched.firstname && <span>{errors.firstname}</span>}

        <label 
        htmlFor="lastname">Lastname</label>
        <input type="text" {...getFieldProps('lastname')} />
                {errors.lastname && touched.lastname && <span>{errors.lastname}</span>}
        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps('email')} />
                {errors.email && touched.email && <span>{errors.email}</span>}
        

        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};
