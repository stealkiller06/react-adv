import { lazy } from "react";
import { ShoppinPage } from "../02-components-pattern/pages/ShoppinPage";


interface Route{
    to:string,
    path:string,
    Component:React.LazyExoticComponent<() => JSX.Element>| (()=>JSX.Element),
    name:string
}

const Lazy1 = lazy(()=>import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(()=>import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(()=>import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'))

export const routes:Route[] = [
    {
        to:'/',
        path:'',
        Component:ShoppinPage,
        name:'Shopping'
    },
    {
        to:'/lazy1',
        path:'lazy1',
        Component:Lazy1,
        name:'Lazy-1'
    },
    {
        to:'/lazy2',
        path:'lazy2',
        Component:Lazy2,
        name:'Lazy-2'
    },
    {
        to:'/lazy3',
        path:'lazy3',
        Component:Lazy3,
        name:'Lazy-3'
    },

]