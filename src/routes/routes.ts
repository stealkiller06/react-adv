import {
    FormikAbstractation,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage
} from '../03-forms/pages'

interface Route{
    to:string,
    path:string,
    Component:React.LazyExoticComponent<() => JSX.Element>| (()=>JSX.Element),
    name:string
}


export const routes:Route[] = [
    {
        to:'/register',
        path:'register',
        Component:RegisterPage,
        name:'Register'
    },
    {
        to:'/formik-basic',
        path:'formik-basic',
        Component:FormikBasicPage,
        name:'FormikBasic'
    },
    {
        to:'/formik-yup',
        path:'formik-yup',
        Component:FormikYupPage,
        name:'FurmikYup'
    },
    {
        to:'/formik-components',
        path:'formik-components',
        Component:FormikComponents,
        name:'FormikComponents'
    },
    {
        to:'/formik-abstractation',
        path:'formik-abstractation',
        Component:FormikAbstractation,
        name:'FormikAbstractation'
    },
]