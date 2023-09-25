import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductsContex = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProduct] = useState(PRODUCTS);
  console.log(products, "products");
  console.log(PRODUCTS, "PRODUCTS");
  const value = { products };
  console.log(value, "value");
  return (
    <ProductsContex.Provider value={value}>{children} </ProductsContex.Provider>
  );
};
