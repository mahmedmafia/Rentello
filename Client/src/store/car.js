import axios from "axios";
const initailState = {
  isLoading: false,
  error: "",
  cars: [],
};
const carsActionTypes = {
  FETCH_CARS_REQUEST: "FETCH_CARS_REQUEST",
  FETCH_CARS_SUCCESS: "FETCH_CARS_SUCCESS",
  FETCH_CARS_FAIL: "FETCH_CARS_FAIL",
  ADD_CAR: "ADD_CAR",
  DELETE: "DELETE",
  UPDATE: "EDIT",
  FILTER: "FILTER",
};
export const carsActions = {
  fetchCarsSuccess: (payload) => {
    return { type: carsActionTypes.FETCH_CARS_SUCCESS, payload };
  },
  fetchCarsRequest: () => {
    return { type: carsActionTypes.FETCH_CARS_REQUEST };
  },
  fetchCarsFail: (payload) => {
    return { type: carsActionTypes.FETCH_CARS_FAIL, payload };
  },
  addCar: (payload) => {
    return { type: carsActionTypes.ADD_CARS, payload };
  },
  delete: (payload) => {
    return { type: carsActionTypes.DELETE, payload };
  },
  update: (payload) => {
    return { type: carsActionTypes.UPDATE, payload };
  },
  filter: (payload) => {
    return { type: carsActionTypes.FILTER, payload };
  },
};

export const fetchCars = () => {
  return (dispatch) => {
    dispatch(carsActions.fetchCarsRequest())
    axios
      .get("http://localhost:8080/cars")
      .then((result) => {
        const fetchedCars = result.data;
        dispatch(carsActions.fetchCarsSuccess(fetchedCars));
      })
      .catch((error) => {
        dispatch(carsActions.fetchCarsFail(error.message))
      });
  };
};
export const carReducer = (state = initailState, action) => {
  switch (action.type) {
    case carsActionTypes.FETCH_CARS_SUCCESS:
      return { ...state, isLoading: false, cars: action.payload, error: "" };
    case carsActionTypes.FETCH_CARS_REQUEST:
      return { ...state, isLoading: true };
    case carsActionTypes.FETCH_CARS_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case carsActionTypes.ADD_CAR:
      const newCars = { ...state }.cars;
      newCars.push(action.payload);
      return { ...state, cars: newCars };
    case carsActionTypes.DELETE:
      const updatedCars = { ...state };
      updatedCars.filter((car) => {
        return car.id != action.payload;
      });
      return updatedCars;
    case carsActionTypes.UPDATE:
      const oldState = { ...state };
      oldState.cars.filter((car) => {
        if (car.id != action.payload.id) {
          return action.payload;
        }
      });
      return oldState;
    default:
      return state;
  }
};
