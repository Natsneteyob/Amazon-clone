 import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import  {Link } from "react-router-dom"
import { useStateValue } from "./Stateprovider";
import { auth } from "./firebase";


function Header() {
  
  const [{ basket, user }, dispatch] = useStateValue();
  
  //where user signs out function from firebase
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }

return (
  <div className="header">
    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
    </Link>

    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchIcon className="header__searchIcon" />
    </div>

    <div className="header__nav">
      <Link to={!user && "/Login"} className="header__clearlink">
        {/* only go to login if there is no user */}
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">
            Hello {!user ? "Guest" : user.email}
            {/*if there is no user go to Guest and if there is user show the user email */}
          </span>

          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
            {/* if there is user signout,and if there is no user you can sign in */}
          </span>
        </div>
      </Link>
      <Link to="/orders" className="header__clearlink">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      <Link to="/Checkout" className="header__clearlink">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </div>
  </div>
);
}

export default Header;
