import { useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./car-details.module.css";
export const CarDetails = (props) => {
  const { id } = useParams();
  const car = props.cars.find((car) => car.id == id);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [data,setDate]=useState('');
  const rentSubmitHandler=()=>{

  }
  return (
    <>
      <section className={classes.carDetailsSection}>
        <div className={classes.imgWrapper}>
          <img src={car.img}></img>
        </div>
        <div className={classes.carDetails}>
        <p className={classes.amount}>
            You Can Rent This Car For:<span>{car.amount}$</span>
          </p>
          <p>
            Category:<span>{car.category}</span>
          </p>
          <p>
            Model:<span>{car.model}</span>
          </p>
          <p>
            Color:<span>{car.color}</span>
          </p>
          
          <p>
            This Car Has: <span>{car.chairs} </span>Chairs
          </p>
          <p>
            Availabilty:<span>Available</span>
          </p>
{isCheckOut &&
          <form className={classes.checkOutfrom} onSubmit={rentSubmitHandler}>

            <div className={classes.formGroup}>
          <h3>Choose Rent Day</h3>

              <input type="date" onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <button>Check out {car.amount}$$</button>
          </form>
}
         {!isCheckOut && <button onClick={()=>setIsCheckOut(true)}>Rent this Car</button>}
        </div>
      </section>
    </>
  );
};
