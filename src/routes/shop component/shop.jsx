import { useContext } from "react";
import { ProductsContex } from "../../Context/product.context";
import "./shop.styles.scss";
import ProductCard from "../../components/product-card/productCard";

const Shop = () => {
  const { products } = useContext(ProductsContex);
  console.log(products, "products");
  return (
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
