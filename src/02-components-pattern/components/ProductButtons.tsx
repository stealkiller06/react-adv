import { useCallback, useContext } from "react"
import {  ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css";

export interface ProductButtonsProps{
  className?:string,
  counter?:number
}
export const ProductButtons = ({className="",counter:count}:ProductButtonsProps)=>{

  //maxCount
    const {increaseBy,counter,maxCount} = useContext(ProductContext)

    const isMaxReached = useCallback(()=>{
      if(!maxCount) return false;

      if(counter >= maxCount) return true
    },[counter,maxCount])
  
    //isMaxReached = useCallBack
      return(
    
          <div className={`${styles.buttonsContainer} ${className}`}>
          <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
            -
          </button>
  
          <div className={`${styles.countLabel} `}>{count?count:counter}</div>
          <button 
          onClick={() => increaseBy(+1)} 
          disabled={isMaxReached()}
          className={`${styles.buttonAdd} ${isMaxReached()?styles.disabled:''}`}>
            +
          </button>
        </div>
      )
  }