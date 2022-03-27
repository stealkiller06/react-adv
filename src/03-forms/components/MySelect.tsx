import { ErrorMessage, useField } from "formik"

interface MyTextInputProps{
    label:string;
    name:string;
    placeholder?:string;
    [x:string]:any

}
export const MySelect = ({
    label,
    ...props
}:MyTextInputProps) => {
    const [field] = useField(props)
    
  return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <select  {...field}  {...props}/>
        <ErrorMessage component="span" name={props.name} />

      </>
  )
}
