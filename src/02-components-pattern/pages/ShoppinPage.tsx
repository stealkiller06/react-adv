import ProductCard from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppinPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          reset,
          count,
          isMaxCountReached,
          increaseBy
        }) => (
          <>
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white" />
            <ProductCard.Buttons className="custom-buttons" />

            <button onClick={reset}>reset</button>
            <button onClick={()=>increaseBy(-2)}>-2</button>

            {!isMaxCountReached&&(
            <button onClick={()=>increaseBy(2)}>+2</button>
            )}
            <span>{count} {isMaxCountReached}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
