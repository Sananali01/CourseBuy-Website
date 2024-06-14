import React, { useState } from 'react';
import styled from 'styled-components';
import Course from './Course';
import {
  PYTHON,
  WEB_DEVELOPMENT,
  DATA_SCIENCE,
  AWS,
  DESIGN,
  MARKETING,
} from '../utils/constants';
import courses from '../utils/data';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PYTHON);

  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <TabsWrapper>
      <div className='tabs'>
        <ul className='flex flex-wrap'>
          <li className='tabs-head-item'>
            <button
              type='button'
              className={`tab-btn ${activeTab === PYTHON ? 'active' : ''}`}
              onClick={() => tabHandler(PYTHON)}
            >
              Python
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type='button'
              className={`tab-btn ${
                activeTab === WEB_DEVELOPMENT ? 'active' : ''
              }`}
              onClick={() => tabHandler(WEB_DEVELOPMENT)}
            >
              Web Development
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type='button'
              className={`tab-btn ${
                activeTab === DATA_SCIENCE ? 'active' : ''
              }`}
              onClick={() => tabHandler(DATA_SCIENCE)}
            >
              Data Science
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type='button'
              className={`tab-btn ${activeTab === AWS ? 'active' : ''}`}
              onClick={() => tabHandler(AWS)}
            >
              AWS Certification
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type='button'
              className={`tab-btn ${activeTab === DESIGN ? 'active' : ''}`}
              onClick={() => tabHandler(DESIGN)}
            >
              Design
            </button>
          </li>
          <li className='tabs-head-item'>
            <button
              type='button'
              className={`tab-btn ${activeTab === MARKETING ? 'active' : ''}`}
              onClick={() => tabHandler(MARKETING)}
            >
              Marketing
            </button>
          </li>
        </ul>

        <div className='tabs-body'>
          {courses
            .filter((course) => course.category === activeTab)
            .map((course) => (
              <Course key={course.id} {...course} />
            ))}
        </div>
      </div>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;

    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }

      &.active {
        background-color: var(--clr-black);
        color: var(--clr-white);
        /* Additional styles for active tab */
      }
    }

    .tabs-body {
      margin-top: 32px;
      display: grid;
      gap: 26px;
      grid-template-columns: 1fr;

      @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (min-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default Tabs;
