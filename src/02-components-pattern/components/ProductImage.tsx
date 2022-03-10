import { useContext } from "react";
import NoImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export interface ProductImageProps{
  img?:string,
  className?:string
}
export const ProductImage = ({ img = "", className="" }:ProductImageProps) => {
    const {product} = useContext(ProductContext)
    const imgToShow = img || product.img || NoImage
  
    return <img className={`${styles.productImg} ${className}`} src={imgToShow} alt="" />;
  };