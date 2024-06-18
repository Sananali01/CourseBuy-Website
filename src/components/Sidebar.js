import React from 'react';
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from '../context/sidebar_context';
import { useCoursesContext } from '../context/courses_context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAddressBook, faImage, faFileAlt,faGraduationCap,faList,faFolderOpen } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useSidebarContext();

  return (
    <SidebarWrapper className={` ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <button type="button" className='sidebar-close-btn' onClick={() => closeSidebar()}>
        <MdClose />
      </button>
      <div className='sidebar-content'>
        <h6 className='fs-18'> <FontAwesomeIcon icon={faList} /> Pages</h6>
        <ul className='sidebar-links'>
          <li className='sidebar-link-item fw-5'>
            <Link to="/tabs">
              <FontAwesomeIcon icon={faGraduationCap} /> Courses
            </Link>
          </li>
          <li className='sidebar-link-item fw-5'>
            <Link to="/contact">
              <FontAwesomeIcon icon={faAddressBook} /> Contact
            </Link>
          </li>
          <li className='sidebar-link-item fw-5'>
            <Link to="/gallery">
              <FontAwesomeIcon icon={faImage} /> Gallery
            </Link>
          </li>
          <li className='sidebar-link-item fw-5'>
            <Link to="/about">
              <FontAwesomeIcon icon={faFileAlt} /> About
            </Link>
          </li>
        </ul>
        <h6 className='fs-18'> <FontAwesomeIcon icon={faFolderOpen} /> Categories</h6>
        <ul className='sidebar-category'>
          <CategoryList />
        </ul>
      </div>
    </SidebarWrapper>
  );
}

const CategoryList = () => {
  const { categories } = useCoursesContext();

  return (
    <>
      {categories.map((category, idx) => (
        <li className='sidebar-link-item fw-5' key={idx}>
          <Link to={`category/${category}`}>
          {category.toUpperCase()}
          </Link>
        </li>
      ))}
    </>
  );
}

const SidebarWrapper = styled.div`
background: var(--clr-black);
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 10;
  height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  transform: translateX(100%);
  transition: var(--transition);

  &.show-sidebar {
    transform: translateX(0);
  }

  .sidebar-close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
    background-color: transparent;
    color: var(--clr-white);
    cursor: pointer;

    &:hover {
      background-color: var(--clr-orange);
      color: var(--clr-white);
    }
  }

  .sidebar-content {
    margin-top: 50px;
    h6 {
      color: var(--clr-white);
      margin-bottom: 16px;
    }
    .sidebar-links {
      color: var(--clr-white);
      margin-bottom: 30px;
    }
    .sidebar-link-item {
      color: var(--clr-white);
      text-decoration: none;
      font-size: 15px;
      margin-bottom: 12px;
      transition: var(--transition);

      svg {
        margin-right: 10px; /* Adjust spacing between icon and text */
      }

      &:hover {
        transform: translateX(6px);
        text-decoration: none;
      }
    }
  }
`;

export default Sidebar;
