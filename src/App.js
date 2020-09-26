import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import FoodDetails from './FoodItems/FoodDetails';
import LogIn from './LogIn/LogIn';
import Cart from './Cart/Cart';
import PrivateRoute from './LogIn/PrivateRoute';
import NotFound from './NotFound/NotFound';
import PlaceOrder from './PlaceOrder/PlaceOrder';

export const MyContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState({});
  // console.log(cart);
  // console.log(loggedInUser);
  return (
    
<MyContext.Provider value={{loggedInUser, setLoggedInUser ,cart , setCart, newCart, setNewCart}}>
    <h3>{loggedInUser.name}</h3>
      <Router>
        <Route path="/home">
        <Home />
        </Route>
        <Switch>
          <Route path="/foodDetails/:fId">
            <FoodDetails />
          </Route>          
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/cart">
            <Cart />
          </PrivateRoute> 
          <Route path="/placeorder">
            <PlaceOrder />
          </Route>
            <Route path="*">
              <NotFound />
              </Route>        
        </Switch>
      </Router>
      </MyContext.Provider>
   
  );
}

export default App;
