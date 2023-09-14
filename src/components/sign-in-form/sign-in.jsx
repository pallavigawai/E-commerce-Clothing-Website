import { useState, useContext } from "react";
import {
  createAuthUserEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input";
import "./sign-in.styles.scss";
import Button from "../button/button";
import { UserContext } from "../../Context/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    setCurrentUser(user);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { [name]: value };

    setFormFields({ ...formFields, ...data });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserEmailAndPassword(email, password);

      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth / user - not - found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h3> Already have an account?</h3>
      <span> Sign in with your email and paswword</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit ">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
