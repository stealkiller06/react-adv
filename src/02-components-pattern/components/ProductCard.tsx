import { createContext, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

import styles from "../styles/styles.module.css";
import { ProductButtons } from "./ProductButtons";



export interface ProductCardProps {
  product: Product;
  children?:ReactElement|ReactElement[],
  className?:string,
  style?: React.CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps)

const {Provider} = ProductContext;


export const ProductCard = ({ product,children,className,style }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
    }}>
    <div style={style} className={`${styles.productCard} ${className||""}`}>
        {children}
    </div>
    </Provider>
  );
};


ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons