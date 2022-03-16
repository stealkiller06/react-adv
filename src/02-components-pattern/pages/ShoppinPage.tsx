import ProductCard from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";



export const ShoppinPage = () => {
  const {
    onProductChange,
    shoppingCart
  } = useShoppingCart()

  
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        className="text-white"
      >
        {products.map((product) => (
          <ProductCard
            onChange={onProductChange}
            key={product.id}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
            className="bg-dark text-white"
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white" />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, prod]) => (
          <ProductCard
            onChange={onProductChange}
            key={key}
            value={prod.count}
            style={{
              width: "100px",
            }}
            product={prod}
            className="bg-dark text-white"
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons
              counter={prod.count}
              className="custom-buttons"
            />
          </ProductCard>
        ))}
      </div>

      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};
