import { useContext } from "react";
import Button from "../button/button";
import CartItem from "../cart-item/cartItem";
import "./cartDropdown.styles.scss";
import CartContext from "../../Context/cart.contex";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button type="button" buttonType="inverted">
        {" "}
        GO TO CHECKOUT{" "}
      </Button>
    </div>
  );
};
export default CartDropdown;
