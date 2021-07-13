import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authState.isAuthenticated);
  const logOutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <div className={classes.header}>
      <nav>
        <div className={classes.container}>
          <Link to="/home">
            <h1>Rentello</h1>
          </Link>

          {isAuth && (
            <ul>
              <li>
                <Link to="/home/profile">Account</Link>
              </li>
              <li>
                <Link to="/home">Rent a Car</Link>
              </li>
              <li>
                <button onClick={logOutHandler}>Logout</button>
              </li>
            </ul>
          )}
          {!isAuth && (
            <ul>
              <li>
                <Link to="/auth?authType=login">Login</Link>
              </li>
              <li>
                <Link to="/auth?authType=register">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};
