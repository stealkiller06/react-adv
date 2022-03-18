import { createContext, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

import styles from "../styles/styles.module.css";
import { ProductButtons } from "./ProductButtons";



export interface ProductCardProps {
  product: Product;
  children:(args:ProductCardHandlers)=>JSX.Element,
  className?:string,
  style?: React.CSSProperties,
  onChange?: (args:onChangeArgs)=>void,
  value?:number,
  initialValues?:InitialValues
}

export const ProductContext = createContext({} as ProductContextProps)

const {Provider} = ProductContext;


export const ProductCard = ({ 
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues

}: ProductCardProps) => {
  const { 
    counter, 
    increaseBy,
    maxCount, 
  isMaxCountReached,
  reset
  } = useProduct({onChange,product,value,initialValues});
  

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount,
    }}>
    <div style={style} className={`${styles.productCard} ${className||""}`}>
        {children({
          count:counter,
          maxCount:initialValues?.count,
          increaseBy,
          isMaxCountReached,
          product,
          reset
        })}
    </div>
    </Provider>
  );
};


ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons