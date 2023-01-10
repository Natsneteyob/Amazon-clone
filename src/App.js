import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import {  Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";
import Payment from "./Payment";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51MJIElF75J6GVl0WPXTSpiEqGRkbhgLQxYPLlM0htHGqjzglTZMdHmfmNhJa0xm7hMVXPaEdcTVmpLnBFzHRNpk500oOsyvsZ0"
);

function App(){
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    
      <div className="App">
        <Routes>
          <Route
            path="/Orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            }
          />

          <Route path="/Login" element={<Login />} />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
   
  );
}
export default App;


// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";  

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//            <Route path="/Login">
//            <Login />
           
//        </Route>
//           <Route path="/Checkout">
//             <Header />
//             <Checkout />
       
//           </Route>
//           <Route path="/">
//             <Header />
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


