import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./nav.style.scss";
import { UserContext } from "../../Context/user.context";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <CrownLogo className="logo" />
          </div>
        </Link>
        <div className="links-container">
          <div className="links">
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to="/auth">
                SIGN IN
              </Link>
            )}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Navigation;
