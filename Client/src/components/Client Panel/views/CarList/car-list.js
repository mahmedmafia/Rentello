import classes from "./car-list.module.css";
import { Route, Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../../../store/car";
export const CarList = (props) => {
  const imgPlaceHolder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkHAUfSGTXskYpKtwJ1udJQO5vbI1vj5mMA&usqp=CAU";
  const carsState = useSelector((state) => state.carsState);
  const cars = carsState.cars;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const carListItems =cars? cars.map((car) => {
    return (
      <li className={classes.car} key={car._id}>
        <div className={classes.imgWrapper}>
          {car.img && <img src={car.img}></img>}
          {!car.img && <img src={imgPlaceHolder}></img>}
        </div>
        <span className={classes.amount}>rent for {car.amount}</span>
        <p>
          <span className={classes.carModel}>{car.model} </span>
          <span className={classes.carCategory}>{car.category} </span>
        </p>
        <span className={classes.carChairs}>Has {car.chairsCount} Chairs</span>
        <span className={classes.carColor}>Color:{car.color}</span>
        <div>
          <span>Availabilty : {car.isAvailable ? <>Now</> : <>Soon</>}</span>
          <Link to={`/home/details/${car.id}`}>
            <button>Rent Now</button>
          </Link>
        </div>
      </li>
    );
  }):<li>No Items Found</li>;

  return (
    <>
      <ul className={classes.carList}>{carListItems}</ul>
    </>
  );
};
export default CarList;
