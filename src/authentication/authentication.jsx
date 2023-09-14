import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/user.context";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInWithGitHubPopup,
  createAuthUserEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import SignUp from "../components/sign-up-form/sign-up-form";
import SignIn from "../components/sign-in-form/sign-in";
import "./authentication.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const Authentication = () => {
  const { setCurrentUser } = useContext(UserContext);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //     console.log(response);
  //   }
  //   fetchData();
  // }, []);

  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  // };
  // const logGitHubUser = async () => {
  //   const { user } = await signInWithGitHubPopup();
  // };

  return (
    <div className="authentication-container">
      {/* <button onClick={logGoogleRedirectUser}>
        Sign In with Google Redirect
      </button> */}
      {/* <button onClick={logGitHubUser}>Sign In with GitHub</button> */}
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
