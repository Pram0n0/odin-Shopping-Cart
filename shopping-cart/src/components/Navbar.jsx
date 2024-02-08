import { NavLink } from 'react-router-dom';

const NavBar = ({ cartItemCount }) => {
  return (
    <nav>
      <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li> */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/cart">Cart: ({cartItemCount})</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;