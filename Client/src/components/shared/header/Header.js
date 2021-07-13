import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth";
import classes from "./Header.module.css";
import {CarSearch} from '../../Client Panel/views/CarSearch/car-search';
export const Header = () => {
 
  return (
    <>
      <header className={classes.header}>
        <div className={classes.darken}></div>
        <div className={classes.imgWrapper}></div>
        <div className={classes.content}>
          <div className={classes.center}>
            <h1>A Perfect Place For You To rent a Car</h1>
            <p>the car you need is here with us as We Have different collections  </p>
       
          </div>
        </div>
      
      </header>
    </>
  );
};

export default Header;
