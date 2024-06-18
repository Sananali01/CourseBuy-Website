import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className="bg-black">
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>Disover More. Start Learning Today.</h1>
          <p>Explore our diverse range of courses starting from just $9.99. Whether you're diving into coding, mastering data science, or refining your design skills, there's something here to elevate your knowledge. Don't miss out – offer ends soon!</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 420px;

  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;
      background: transparent;
border: 2px solid #252525;
border-radius: 12px;
box-shadow: 4px 8px 2px 2px white;
cursor: pointer;
margin-bottom: 30px;
overflow: hidden;
transition: transform 0.3s;
&:hover {
        transform: translateY(-5px);
      }

      h1{
        color: var(--clr-orange);
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 5px;
      }
      p{
       color: var(--clr-white);
        font-size: 15px;
      }
    }
  }
`;

export default Hero



