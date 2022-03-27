import { useForm } from '../hooks/useForm'
import '../styles/styles.css'
export const RegisterPage = () => {
   const {
       onChange,
       onSubmit,
       name,
       email,
       password1,
       password2,
       resetForm,
       isValidEmail
   } = useForm(
    {
        name:'',
        email:'',
        password1:'',
        password2:''
    }
   )

  return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={onSubmit}>
            <input 
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            className={name.trim().length <= 0 ?'has-error':''}
            onChange={onChange}
            />
            
            {name.trim().length <= 0 &&  <span>Este campo es necesario</span>}
            <input 
            type="text"
            placeholder="Email"
            value={email}
            name="email"
            onChange={onChange}
            />
            {isValidEmail(email) &&<span>No es un email valido</span> }
            <input 
            type="password"
            placeholder="Password"
            value={password1}
            name="password1"
            onChange={onChange}
            />
            <input 
            type="password"
            placeholder="Repeat Passrod"
            value={password2}
            name="password2"
            onChange={onChange}
            />

            <button type="submit"> Create</button>
            <button type="button" onClick={resetForm}> Reset </button>

        </form>
    </div>
  )
}
