import { Link } from 'react-router-dom';

const NavBar = ({ cartItemCount }) => {
  return (
    <nav>
      <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li> */}
        <li>Home</li>
        <li>Shop</li>
        <li>Cart ({cartItemCount})</li>
      </ul>
    </nav>
  );
};

export default NavBar;