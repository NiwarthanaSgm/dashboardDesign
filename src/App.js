import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./app.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import CategoryList from "./pages/CategoryList";
import Category from "./pages/Category";
import NewCategory from "./pages/NewCategory";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/categories">
            <CategoryList />
          </Route>
          <Route path="/category/:categoryId">
            <Category />
          </Route>
          <Route path="/newcategory">
            <NewCategory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;