import Button from "../button/button";
import "./productCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="productCard-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name} </span>
        <span className="price">{price} </span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};
export default ProductCard;
