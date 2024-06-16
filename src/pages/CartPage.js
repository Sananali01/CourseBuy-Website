import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faTrashAlt, faArrowRight, faBook } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
  const { cart: cartItems, total_items, total_amount, clearCart } = useCartContext();
  const navigate = useNavigate();

  if (cartItems.length < 1) {
    return (
      <NotFoundWrapper>
        <div className="container">No items found in the cart.</div>
      </NotFoundWrapper>
    );
  }

  const handleCheckout = () => {
    navigate('/checkout'); // Assuming your checkout form is at /checkout
  };

  return (
    <CartWrapper>
      <div className="container">
        <div className="cart-pg-title">
          <h2><FontAwesomeIcon icon={faShoppingCart} /> Shopping Cart</h2>
        </div>
        <div className="cart-grid grid">
          {/* Cart grid left */}
          <div className="cart-grid-left">
            <div className="cart-header flex flex-between">
              <div className="cart-count-info">
              <FontAwesomeIcon icon={faBook} className="icon mr-3" />
                <span className="fw-7 fs-18">{total_items}</span> {total_items > 1 ? 'Courses' : 'Course'} in Cart
              </div>
              <button type="button" className="cart-clear-btn flex fs-15 fw-6" onClick={clearCart}>
                <FontAwesomeIcon icon={faTrashAlt} className="icon" />
                <span className="text">Clear All</span>
              </button>
            </div>

            <div className="cart-items-list">
              {cartItems.map(cartItem => (
                <CartItem key={cartItem.courseID} cartItem={cartItem} />
              ))}
            </div>
          </div>
          {/* End of grid left */}

          {/* Cart grid right */}
          <div className="cart-grid-right">
            <div className="cart-summary">
              <h3 className="fs-18 fw-6"><FontAwesomeIcon icon={faShoppingCart} /> Order Summary</h3>
              <div className="cart-total-value fw-8">Total: ${total_amount.toFixed(2)}</div>
              <button type="button" className="checkout-btn" onClick={handleCheckout}>
                Checkout <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          {/* End of cart grid right */}
        </div>
      </div>
    </CartWrapper>
  );
};

const NotFoundWrapper = styled.div`
  padding: 30px 0;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
`;

const CartWrapper = styled.div`
  padding: 50px 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .cart-pg-title {
    padding-bottom: 20px;
    border-bottom: 2px solid var(--orange);
    margin-bottom: 20px;
    h2 {
      font-size: 28px;
      font-weight: 700;
      color: #333;
    }
  }

  .cart-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;

    @media (min-width: 992px) {
      grid-template-columns: 2fr 1fr;
    }

    .cart-grid-left {
      .cart-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--orange);
        margin-bottom: 20px;

        .cart-clear-btn {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          color: #ff4d4f;
          cursor: pointer;
          transition: color 0.3s;

          .icon {
            margin-right: 5px;
          }

          &:hover {
            color: #d9363e;
          }
        }
      }

      .cart-items-list {
        display: grid;
        gap: 20px;
      }
    }

    .cart-grid-right {
      .cart-summary {
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fafafa;

        .fs-18 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .cart-total-value {
          font-size: 28px;
          font-weight: 800;
          color: #333;
          margin-bottom: 20px;
        }

        .checkout-btn {
          width: 100%;
          padding: 15px 0;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          background: var(--orange);
          border: none;
          border-radius: 8px;
          cursor: pointer;

          &:hover {
            background: black;
            color: white;
          }
        }
      }
    }
  }
`;

export default CartPage;
