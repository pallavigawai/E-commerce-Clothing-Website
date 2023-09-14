import "./button.styles.scss";
const ButtonType = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${ButtonType[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
