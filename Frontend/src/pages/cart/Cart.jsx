import React, { useContext } from 'react';
import './Cart.css';
import { Store } from '../../context/Store';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotal, url } = useContext(Store);
  const navigate = useNavigate();

  return (
    <div className="Cart">
      <div className="cart-items">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list && food_list
          .filter(item => cartItems[item._id] > 0)
          .map(item => (
            <React.Fragment key={item._id}>
              <div className="cart-title cart-itemsti">
                <img src={`${url}/images/${item.image}`} alt={item.name} />
                <p>{item.name}</p>
                <p>Rs: {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>Rs: {item.price * cartItems[item._id]}</p>
                <p className="x" onClick={() => removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </React.Fragment>
          ))}
      </div>

      <div className="bottom-cart">
        <div className="cart-total">
          <h1>Cart Totals</h1>
          <div>
            <hr />
            <div className="total-details">
              <p>Sub Total</p>
              <p>Rs: {getTotal()}</p>
            </div>
            <hr />
            <div className="total-details">
              <p>Delivery Fees</p>
              <p>Rs: {getTotal() === 0 ? 0 : 8}</p>
            </div>
            <hr />
            <div className="total-details">
              <b>Total</b>
              <b>Rs: {getTotal() === 0 ? 0 : getTotal() + 8}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>Checkout</button>
        </div>
        <div className="promo-code">
          <div>
            <p>If you have a code, Enter it</p>
            <div className="promo-input">
              <input type="text" placeholder="Promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
