import { useContext } from "react"
import {  ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css";

export interface ProductButtonsProps{
  className?:string,
  counter?:number
}
export const ProductButtons = ({className="",counter:count}:ProductButtonsProps)=>{

    const {increaseBy,counter} = useContext(ProductContext)
  
      return(
    
          <div className={`${styles.buttonsContainer} ${className}`}>
          <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
            -
          </button>
  
          <div className={styles.countLabel}>{count?count:counter}</div>
          <button onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
            +
          </button>
        </div>
      )
  }