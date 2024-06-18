import React from 'react';
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { useCartContext } from '../context/cart_context';

const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useCartContext();

  return (
    <CartItemWrapper className="grid">
      <div className="cart-item-img">
        <img src={cartItem.image} alt={cartItem.course_name} />
      </div>
      <div className="cart-item-info">
        <h3 className="course-name">{cartItem.course_name}</h3>
        <span className="cart-item-creator">By {cartItem.creator}</span>
        <div className="cart-item-price">${cartItem.discounted_price}</div>
        <div className="cart-item-category">{cartItem.category}</div>
        <button type="button" className="remove-btn" onClick={() => removeFromCart(cartItem.courseID)}>
          Remove <FaTrashAlt />
        </button>
      </div>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  border: 3px solid var(--clr-grey);;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  margin-bottom: 16px;
  align-items: center;

  .cart-item-img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cart-item-info {
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .course-name {
      font-size: x-large;
      font-weight: bolder;
      margin-bottom: 8px;
    }

    .cart-item-creator {
      font-size: 14px;
      color:var(--clr-grey);
      margin-bottom: 8px;
      font-weight: bold;
    }

    .cart-item-price {
      font-size: x-large;
      font-weight: 700;
      color: #4caf50;
      margin-bottom: 8px;
    }

    .cart-item-category {
      width: fit-content;
      background: var(--clr-orange);
      color: #fff;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      text-transform: capitalize;
      margin-bottom: 8px;
      display: inline-block;
    }

    .remove-btn {
      width: fit-content;
      display: flex;
      align-items: center;
      background-color: black;
      color: #fff;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #d32f2f;
      }

      svg {
        margin-left: 8px;
      }
    }
  }
`;

export default CartItem;
