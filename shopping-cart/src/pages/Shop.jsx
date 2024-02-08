import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
  
    return (
      <div>
        <h1>Shop</h1>
        <div className="product-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Shop;