import { useSelector } from "react-redux";
import { Header } from "./components/shared/header/Header";
import { Auth } from "./components/shared/auth/Auth";
import { ClientLayout } from "./components/Client Panel/ClientLayout";
import { AdminPanel } from "./components/Admin Panel/AdminPanel";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Navbar } from "./components/shared/navbar/navbar";
function App() {
  const isAuth = useSelector((state) => state.authState.isAuthenticated);

  return (
    <Router>
      {/* <Header /> */}
      {/* {!isAuth && <Auth />} */}
      <Switch>
        <Redirect exact path="/" to="/home"></Redirect>
        <Route path="/home">
          <ClientLayout />
        </Route>
        <Route path="/auth">
          {!isAuth && (
            <>
              <Navbar></Navbar>
              <Auth></Auth>
            </>
          )}
          {isAuth && <Redirect to="/home"></Redirect>}
        </Route>
        <Route path="/admin">
          <AdminPanel></AdminPanel>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
