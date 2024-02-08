const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your shopping cart is empty.</p>}
      {cartItems.length > 0 && cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title} - Quantity: {item.quantity}</p>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCart;