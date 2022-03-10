import ProductCard from "../components";

const product = {
    id:'1',
    title:'Coffee Mug - Card',
    img:'./coffee-mug.png'
}

export const ShoppinPage = () => {
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
      >
        <ProductCard product={product} >
            <ProductCard.Image />
            <ProductCard.Title title="testing"/>
            <ProductCard.Buttons  />
        </ProductCard>
      </div>
    </div>
  );
};
