import classes from "./AdminPanel.module.css";
import { Route, Link, Switch } from "react-router-dom";
export const AdminPanel = () => {
  return (
    <>
      <section className={classes.adminSection}>
        <ul>
          <li>
            <Link to="/admin/cars">Cars</Link>
          </li>
          <li>
            <Link to="/admin/users">users</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/admin/cars">
            <p>cars management</p>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </Route>
          <Route path="/admin/users">
            <p>users management</p>
          </Route>
        </Switch>
      </section>
    </>
  );
};
