import { useState } from "react";
import { onChangeArgs, ProductInCart, ShoppingCart } from "../interfaces/interfaces";


export const useShoppingCart = ()=>{
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

    const onProductChange = ({ count, product }: onChangeArgs) => {
      setShoppingCart((oldShoppingCart) => {
  
        const productInCart :ProductInCart = oldShoppingCart[product.id] || {...product, count:0}
  
        if(Math.max(productInCart.count + count, 0) > 0){
          productInCart.count += count
  
          return {
            ...oldShoppingCart,
            [product.id]:productInCart
          }
        }
  
        const { [product.id]: productToDelete, ...prod } = oldShoppingCart;
        return prod;
  
      });
    };

    return {
        shoppingCart,
        onProductChange
    }

}