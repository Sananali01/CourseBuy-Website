import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Category = ({image, category}) => {
  return (
    <Link to = {`/category/${category}`}>
      <CategoryItemWrapper className='flex flex-column bg-alice-blue mb-5'>
        <div className='category-item-img'>
          <img src = {image} alt = {category} />
        </div>
        <div className='category-item-name'>
          <h3>{category}</h3>
        </div>
      </CategoryItemWrapper>
    </Link>
  )
}

const CategoryItemWrapper = styled.div`
  padding: 20px;
  border: 2px solid black;
  border-radius: 12px;
    box-shadow: 2px 8px 2px 2px black;
  transition: transform 0.3s;
  text-decoration: none;
    
    &:hover {
        transform: translateY(-5px);
        text-decoration: none;
      }
  .category-item-img{
    img{
      max-width: 110px;
      text-decoration: none;
    }
  }
  .category-item-name{
    margin-top: 24px;
    text-decoration: none;
    h3{
      font-size: large;
      text-decoration: none;
    }
    &:hover{
    text-decoration: none;
  }
  }
`;

export default Category