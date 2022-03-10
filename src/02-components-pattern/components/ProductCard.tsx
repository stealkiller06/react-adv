import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

import styles from "../styles/styles.module.css";
import { ProductButtons } from "./ProductButtons";


export const ProductContext = createContext({} as ProductContextProps)

const {Provider} = ProductContext;


export const ProductCard = ({ product,children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();
  

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
    }}>
    <div className={styles.productCard}>
        {children}
    </div>
    </Provider>
  );
};


ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons