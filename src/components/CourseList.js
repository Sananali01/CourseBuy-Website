import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faDatabase, faProjectDiagram, faUserTie, faSmile } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from 'react-animations';
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import python from "../assets/images/python.png";
import java from "../assets/images/java.png";

// Define keyframes for animations
const fadeInAnimation = keyframes`${fadeIn}`;

const CourseList = () => {
  return (
    <CoursesListWrapper>
      <div className="container">
        <div className="courses-list-top">
          <FontAwesomeIcon icon={faGraduationCap} size="3x" className="icon" />
          <h1>A Broad Selection of Courses</h1>
          <h2>Learn at Your Own Pace</h2>
          <p>Choose from 204,000 online video courses with new additions published every month.</p>
          <p className="additional-info mb-5">
            From programming and data science to leadership and personal development, you'll find courses that suit your needs and interests.
          </p>

          <Link to='/tabs' className="view-courses-button"><FontAwesomeIcon icon={faSmile} /> View All Courses</Link>
        </div>
        <div className="courses-benefits">
          <h2>Why Choose Our Courses?</h2>
          <ul>
            <li><FontAwesomeIcon icon={faCode} /> Access to over 204,000 courses</li>
            <li><FontAwesomeIcon icon={faDatabase} /> Learn from industry experts</li>
            <li><FontAwesomeIcon icon={faProjectDiagram} /> Flexible learning schedules</li>
            <li><FontAwesomeIcon icon={faUserTie} /> Certificates of completion</li>
          </ul>
        </div>
        <h1>Popular Categories</h1>
        <div className="courses-categories">

          <div className="category">
            <img src={python} alt="Python" />
            <h3>Python</h3>
            <p>Learn Python programming for web development, data analysis, and more.</p>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/300" alt="JavaScript" />
            <h3>JavaScript</h3>
            <p>Master JavaScript for web development and building interactive websites.</p>
          </div>
          <div className="category">
            <img src={java} alt="Java" />
            <h3>Java</h3>
            <p>Explore Java for enterprise applications and Android development.</p>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/300" alt="Angular" />
            <h3>Angular</h3>
            <p>Learn Angular for building dynamic and scalable web applications.</p>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/300" alt="C++" />
            <h3>C++</h3>
            <p>Dive into C++ for systems programming and game development.</p>
          </div>
          <div className="category">
            <img src="https://via.placeholder.com/300" alt="PHP" />
            <h3>PHP</h3>
            <p>Get proficient in PHP for server-side scripting and web development.</p>
          </div>
        </div>


      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;

  .container {
    animation: 1s ${fadeInAnimation};
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .courses-list-top {
    text-align: center;
    margin-bottom: 40px;
    animation: 1s ${fadeInAnimation} 0.5s;

    .icon {
      margin-bottom: 20px;
      color: #fd9644;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #333;
    }

    p {
      font-size: 1.6rem;
      color: #666;
      margin-bottom: 10px;
    }

    .additional-info {
      font-size: 1.4rem;
      color: #888;
      margin-top: 20px;
    }

    .view-courses-button {
      background-color:  #fc7f2c;
      color: white;
      font-size: 1.6rem;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
      transition: background-color 0.3s;
      text-decoration: none;
      &:hover {
        border: 2px solid black;
        color: black;
      }
    }
  }

  .courses-categories {
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;

    .category {
      width: 300px;
      text-align: center;
      background: #fff;
      border: 2px solid black;
  border-radius: 12px;

      overflow: hidden;
      transition: transform 0.3s;

      &:hover {
        transform: translateY(-5px);
      }

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
         border-bottom: 2px solid var(--orange);
      }

      h3 {
        font-size: 1.8rem;
        color: #333;
        margin: 10px 0;
      }

      p {
        font-size: 1.4rem;
        color: #666;
        padding: 0 10px 20px;
      }
    }
  }

  .courses-benefits {
    margin: 40px 0;
    text-align: center;

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #333;
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;
      font-size: 1.4rem;
      color: #666;
      display: inline-block;
      text-align: left;

      li {
        margin-bottom: 10px;
      }
    }
  }
`;

export default CourseList;
