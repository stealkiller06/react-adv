import { lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3, NoLazy } from "../01-lazyload/pages";


interface RouteBase{
    to:string,
    path:string,
    Component:React.LazyExoticComponent<() => JSX.Element>| (()=>JSX.Element),
    name:string
}

interface Route extends RouteBase{
    children?:RouteBase[]
}

const LazyLayout = lazy(()=>import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))

export const routes:Route[] = [
    {
        to:'/lazyload',
        path:'/lazyload/*',
        Component:LazyLayout,
        name:'LazyLayout- Dash',
        children:[
            {
                to:'/lazy1',
                path:'lazy1',
                Component:LazyPage1,
                name:'Lazy1',
            },
            {
                to:'/lazy2',
                path:'lazy2',
                Component:LazyPage2,
                name:'Lazy2',
            },
            {
                to:'/lazy3',
                path:'lazy3',
                Component:LazyPage3,
                name:'Lazy4',
            },
        ]
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component:NoLazy,
        name:'No Lazy'
    },
 
]