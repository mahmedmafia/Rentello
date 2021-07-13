import { useRef, useState } from "react";
import classes from "./car-search.module.css";
export const CarSearch = () => {
  
  const [category,setCategory]=useState('')
  const [model,setModel]=useState('');
  const [color,setColor]=useState('');
  const [amount,setAmount]=useState('');
  const [numOfChairs,setNumOfChairs]=useState('4');
  const submitHandler = (e) => {
    e.preventDefault();
  
  };
  return (

   
    <section className={classes.carSearch}>
      <form className={classes.carSearchForm} onSubmit={submitHandler}>
        <div className={classes.formGroup}>
          <label>Car Category</label>
          <select value={category} onChange={(e)=>setCategory(e.target.value)}>
              <option defaultChecked>Choose Category</option>
            <option value="bmw" >
              Bmw
            </option>
            <option value="chev" >
              Chevrolet
            </option>
            <option value="ren" >
              Renault
            </option>
          </select>
        </div>
        <div className={classes.formGroup}>
          <label>model</label>
          <input type="text"  value={model} onChange={(e)=>setModel(e.target.value)}></input>
        </div>
        <div className={classes.formGroup}>
          <label>Chairs number</label>
          <input type="number"  minLength="3"  value={numOfChairs} maxLength="7" onChange={(e)=>setNumOfChairs(e.target.value)}></input>
        </div>
        <div className={classes.formGroup}>
          <label>color</label>
          <input type="text"  value={color} onChange={(e)=>setColor(e.target.value)}></input>
        </div>

        <div className={classes.formGroup}>
          <label>rent amount:</label>
          <input type="number"  value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
        </div>
        <div className={classes.formGroup}>
          <button>Search</button>
        </div>
      </form>
    </section>
  );
};
export default CarSearch;
