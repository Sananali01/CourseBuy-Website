import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../context/courses_context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from 'react-animations';
import { keyframes } from 'styled-components';

// Define keyframes for animations
const fadeInAnimation = keyframes`${fadeIn}`;

const CourseList = () => {
  const { courses } = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
          <FontAwesomeIcon icon={faGraduationCap} size="3x" className="icon" />
          <h1>A broad selection of courses</h1>
          <p>Choose from 204,000 online video courses with new additions published every month</p>
        </div>

        <Tabs courses={courses} />
      </div>
    </CoursesListWrapper>
  );
};

const CoursesListWrapper = styled.div`
  padding: 40px 0;

  .container {
    animation: 1s ${fadeInAnimation};
  }

  .courses-list-top {
    text-align: center;
    margin-bottom: 40px;
    animation: 1s ${fadeInAnimation} 0.5s;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.6rem;
    color: #666;
  }

  .icon {
    margin-bottom: 20px;
    color: #fd9644;
  }
`;

export default CourseList;
