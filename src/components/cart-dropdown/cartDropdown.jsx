import Button from "../button/button";
import "./cartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Button> GO TO CHECKOUT </Button>
      </div>
    </div>
  );
};
export default CartDropdown;
