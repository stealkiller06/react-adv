import { useState } from "react";
import { onChangeArgs, ProductInCart, ShoppingCart } from "../interfaces/interfaces";


export const useShoppingCart = ()=>{
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

    const onProductChange = ({ count, product }: onChangeArgs) => {
      setShoppingCart((oldShoppingCart) => {
       
        if (count === 0) {
          const { [product.id]: id, ...prod } = oldShoppingCart;
          return prod;
        }
        return {
          ...oldShoppingCart,
          [product.id]: { ...product, count },
        };
      });
    };

    return {
        shoppingCart,
        onProductChange
    }

}