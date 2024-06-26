import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import StarRating from "../components/StarRating";
import { useCartContext } from '../context/cart_context';

const Course = (props) => {
  const { id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category } = props;
  const { addToCart } = useCartContext();

  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(id, image, course_name, creator, discounted_price, category);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Hide notification after 2 seconds
  };

  return (
    <CourseCard>
      <div className='item-img'>
        <img src={image} alt={course_name} />
      </div>
      <div className='item-body'>
        <h5 className='item-name'>{course_name}</h5>
        <span className='item-creator'>{creator}</span>
        <div className='item-rating flex'>
          <span className='rating-star-val'>{rating_star}</span>
          <StarRating rating_star={rating_star} />
          <span className='rating-count'>({rating_count})</span>
        </div>
        <div className='item-price'>
          <span className='item-price-new'>${discounted_price}</span>
          <span className='item-price-old'>${actual_price}</span>
        </div>
      </div>
      <div className='item-btns flex'>
        <Link to={`/courses/${id}`} className="item-btn see-details-btn">See details</Link>
        <button className='item-btn add-to-cart-btn' onClick={handleAddToCart}>Add to cart</button>
      </div>
      {showNotification && (
        <Notification>
         <b> Course added to cart: </b> {course_name}
        </Notification>
      )}
    </CourseCard>
  )
}

const CourseCard = styled.div`
  margin-bottom: 20px;
  background: transparent;
  border-radius: 12px;
  box-shadow: 0px 8px 2px 2px #000;
  cursor: pointer;
  margin-bottom: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .item-body {
    margin: 14px 0;
    padding: 4px 18px;

    .item-name {
      font-size: 15px;
      line-height: 1.4;
      font-weight: 800;
    }
    .item-creator {
      font-size: 12.5px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.6);
    }
    .rating-star-val {
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 800;
      color: #b4690e;
      margin-right: 6px;
    }
    .rating-count {
      font-size: 12.5px;
      margin-left: 3px;
      font-weight: 500;
      opacity: 0.8;
    }
    .item-price-new {
      font-weight: 700;
      font-size: 15px;
    }
    .item-price-old {
      opacity: 0.8;
      font-weight: 500;
      text-decoration: line-through;
      font-size: 15px;
      margin-left: 8px;
    }
  }

  .item-btns {
    justify-self: flex-start;
    padding: 4px 8px 30px 18px;
    margin-top: auto;

    .item-btn {
      font-size: 15px;
      display: inline-block;
      padding: 6px 16px;
      font-weight: 700;
      transition: var(--transition);
      white-space: nowrap;

      &.see-details-btn {
        background-color: transparent;
        border: 1px solid var(--clr-black);
        margin-right: 5px;
        text-decoration: none;
        &:hover {
          background-color: var(--clr-orange);
          color: white;
        }
      }

      &.add-to-cart-btn {
        background: rgba(0, 0, 0, 0.9);
        color: var(--clr-white);
        border: 1px solid rgba(0, 0, 0, 0.9);
        text-decoration: none;
        &:hover {
          background-color: var(--clr-orange);

        }
      }
    }
  }
`;

const Notification = styled.div`
  position: fixed;
  top: 40px;
  right: 20px;
  background: var(--clr-orange);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  z-index: 999;
`;
export default Course;
