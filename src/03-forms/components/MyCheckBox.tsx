import { ErrorMessage, useField } from "formik"

interface MyTextInputProps{
    label?:string;
    name:string;
    [x:string]:any

}
export const MyCheckBox = ({
    label,
    ...props
}:MyTextInputProps) => {
    const [field, meta] = useField({...props,type:'checkbox'})
    
  return (
      <>
        <label>
            <input type="checkbox" {...field}  {...props}/>
            {label}
            </label>
            <ErrorMessage component="span" name={props.name} />
      </>
  )
}
