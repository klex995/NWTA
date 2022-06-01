import Product from "./pages/Product";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux"; 

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/produkty/:category">
          <ProductList />
        </Route>
        <Route path="/produkt/:id">
          <Product />
        </Route>
        <Route path="/koszyk">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/logowanie">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/rejestracja">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
