import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'
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
        className="text-white"
      >
         <ProductCard product={product} className="bg-dark text-white" >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white"/>
            <ProductCard.Buttons  className="custom-buttons"  />
        </ProductCard>
        <ProductCard product={product} className="bg-dark text-white" >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white"/>
            <ProductButtons  className="custom-buttons"  />
        </ProductCard>
        
        <ProductCard 
        style={{
          
        }}
        product={product}  >
            <ProductImage />
            <ProductTitle/>
            <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
