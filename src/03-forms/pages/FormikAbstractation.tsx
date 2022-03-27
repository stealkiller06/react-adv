import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckBox,MySelect,MyTextInput} from '../components'
import "../styles/styles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstname: "teest",
          lastname: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastname: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string().email("Email invalido").required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .required("requerido")
            .notOneOf(["it-jr"], "Esta opcion no es permitida"),
        })}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <MyTextInput label="firstname" name="firstname" />

            <MyTextInput label="lastname" name="lastname" />

            <MyTextInput label="Email Address" name="email" type="email" />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-jr">It-Jr</option>
            </MySelect>

            <MyCheckBox
            name="terms"
            label="Terms and conditions"
            />
            

            <button type="submit"> Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
