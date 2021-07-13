import CarSearch from "./views/CarSearch/car-search";
import CarList from "./views/CarList/car-list";
import { CarDetails } from "./views/carDetail/car-details";
import { Link, Route, Switch } from "react-router-dom";
import {Profile} from './views/profile/profile';
import { Navbar } from "../shared/navbar/navbar";
import Header from "../shared/header/Header";
const DUMMY_CARS = [
  {
    id: "c1",
    category: "bmw",
    model: "2014",
    amount: "224.32",
    color: "white",
    chairs: "5",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTkHAUfSGTXskYpKtwJ1udJQO5vbI1vj5mMA&usqp=CAU'
  },
  {
    id: "c2",
    category: "bmw",
    model: "2012",
    amount: "124.32",
    color: "yellow",
    chairs: "7",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0ZQwveovmE4dfWAkHbod1v6GCNopyfm8fA&usqp=CAU'
  },
  {
    id: "c3",
    category: "chev",
    model: "2017",
    amount: "624.32",
    color: "red",
    chairs: "4",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDEENbomTf0uuq4KQzG_D6mXjmn9d4VcpH7ukwZkfuhQUl4yCmPdtlwnztN4IUumRGSA&usqp=CAU'
  },
  {
    id: "c4",
    category: "ren",
    model: "2018",
    amount: "244.32",
    color: "blue",
    chairs: "4",
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaF_uHobfyqPPhs9ogRNn5WL6x2X50B7SE8lwHmiw75PUpO-RWhr06djv6D_Q8GNRYWg&usqp=CAU'
  },
  {
    id: "c5",
    category: "ren",
    model: "2012",
    amount: "324.32",
    color: "green",
    chairs: "7",
    img:'https://banner2.cleanpng.com/20180409/gxe/kisspng-renault-kwid-car-nissan-renault-clio-zen-5acbbc17776b52.4677719815233013994892.jpg'
  },
];
export const ClientLayout = () => {
  return (
    <>
      <Switch>
        <Route exact path="/home">
          <Navbar></Navbar>
          <Header></Header>
      <CarSearch />
          <CarList cars={DUMMY_CARS}></CarList>
        </Route>
        <Route path="/home/profile">
        <Navbar></Navbar>

          <Profile></Profile>
        </Route>
        <Route path="/home/details/:id">
        <Navbar></Navbar>
          <Header></Header>
          <CarDetails cars={DUMMY_CARS}></CarDetails>
        </Route>
      </Switch>
    </>
  );
};
export default ClientLayout;
