import React from "react";
import "./Cart.css";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-wrapper">

      <div className="cart-left">
        <h2 className="cart-title">My Cart ({cartItems.length})</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (+
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>

                <img src={item.image} alt={item.name} className="cart-img" />

                <div className="cart-info">
                  <h3 className="cart-name">{item.name}</h3>
                  <p className="cart-price">₹{item.price}</p>

                  <div className="cart-actions">
                    <button className="qty-btn">-</button>
                    <span className="qty">1</span>
                    <button className="qty-btn">+</button>

                    <button className="remove-btn">Remove</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE ORDER SUMMARY */}
      <div className="cart-right">
        <h3>Your Order</h3>
        <div className="order-summary-box">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{cartItems.reduce((a, c) => a + Number(c.price), 0)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>₹30</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total Payable</span>
            <span>
              ₹{cartItems.reduce((a, c) => a + Number(c.price), 0) + 50}
            </span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>

    </div>
  );
};

export default Cart;
