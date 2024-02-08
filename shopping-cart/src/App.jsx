import { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product already exists in the cartItems array
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      // If the product already exists, update the quantity by adding the new quantity
      const updatedItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        }
        return item;
      });
  
      // Update the cartItems state with the updated items
      setCartItems(updatedItems);
    } else {
      // If the product doesn't exist, add it to the cartItems array
      setCartItems([...cartItems, product]);
    }
  };

  // Calculate the total quantity of items in the cart
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="App">
      <NavBar cartItemCount={cartItemCount} />
      <Home />
      <Shop addToCart={addToCart} />  
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
};

export default App;