import { useState } from "react";

export const useForm = <T>(initiState:T)=>{
    const [formData ,setFormData] = useState(initiState)


    const onChange = (event: React.ChangeEvent<HTMLInputElement>  )=>{
        setFormData(data=>({
            ...data,
            [event.target.name]:event.target.value
        }))
    }

    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(formData)
    }

    const resetForm = ()=>{
        setFormData(initiState)
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    return{
         ...formData,
        onChange,
        onSubmit,
        resetForm,
        isValidEmail
    }
}