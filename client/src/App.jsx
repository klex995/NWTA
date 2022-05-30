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

const App = () => {
  const user = true;
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
