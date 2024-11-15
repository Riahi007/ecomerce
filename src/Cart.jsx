import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from './App';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const formattedTotalPrice = totalPrice.toFixed(3);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <div className="cart-item-details">
                  <img src={product.image} alt={product.title} className="cart-item-img" />
                  <div className="cart-item-info">
                    <p>{product.title} - {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <div className="quantity-controls">
                      <button className="decrement" onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                      <span className="quantity">{product.quantity}</span>
                      <button className="increment" onClick={() => dispatch(decrementQuantity(product.id))} >- </button>
                    </div>
                    <button className="delete" onClick={() => dispatch(removeFromCart(product.id))}>Delete </button>
                  </div>
                </div>
              </div>
            ))}
          </ul>
          <h3>Total Price: {formattedTotalPrice} $</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
