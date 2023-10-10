import { useContext } from "react";
import Button from "../button/button";
import "./productCard.styles.scss";
import CartContext from "../../Context/cart.contex";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="productCard-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name} </span>
        <span className="price">{price} </span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};
export default ProductCard;
