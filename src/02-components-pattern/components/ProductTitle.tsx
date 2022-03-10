import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface ProductTitleProps{
  className?:string,
  title?:string
}

export const ProductTitle = ({
  title='',
  className
}:ProductTitleProps)=>{
    const {product} = useContext(ProductContext)
    const titleToShow = title || product.title
      return(
        <span className={`${styles.productDescription} ${className||""}`}> {titleToShow} </span>
      )
  }
  