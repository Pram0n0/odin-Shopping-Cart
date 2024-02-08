import { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
      addToCart({ ...product, quantity });
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <input type="number" value={quantity} min="1" onChange={handleQuantityChange} />
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default ProductCard;