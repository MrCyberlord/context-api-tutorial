import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { cartContext } from "../Context";

const Header = () => {
  const { cart } = useContext(cartContext);
  return (
    <div>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/Cart">Cart {cart.length}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
