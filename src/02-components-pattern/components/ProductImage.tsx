import { useContext } from "react";
import NoImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export const ProductImage = ({ img = "" }) => {
    const {product} = useContext(ProductContext)
    const imgToShow = img || product.img || NoImage
  
    return <img className={styles.productImg} src={imgToShow} alt="" />;
  };