import React from 'react';
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from '../context/sidebar_context';
import { useCoursesContext } from '../context/courses_context';

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useSidebarContext();

  return (
    <SidebarWrapper className={`bg-white ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <button type="button" className='sidebar-close-btn' onClick={() => closeSidebar()}>
        <MdClose />
      </button>
      <div className='sidebar-content'>
      <h6 className='fs-18'>Pages</h6>
        <ul className='sidebar-links'>
        <li className='sidebar-link-item fw-5'>
            <Link to="/tabs">Courses</Link>
          </li>
          <li className='sidebar-link-item fw-5'>
            <Link to="/contact">Contact</Link>
          </li>
          <li className='sidebar-link-item fw-5'>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className='sidebar-link-item fw-5'>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <h6 className='fs-18'>Categories</h6>
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
          <Link to={`category/${category}`}>{category.toUpperCase()}</Link>
        </li>
      ))}
    </>
  );
}

const SidebarWrapper = styled.div`
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
    border: 2px solid var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }
  .sidebar-close-btn:hover {
    background-color: var(--clr-black);
    color: var(--clr-white);
  }
  .sidebar-content {
    margin-top: 50px;
    h6 {
      margin-bottom: 16px;
    }
    .sidebar-links {
      margin-bottom: 30px;
    }
    .sidebar-link-item {
      text-decoration: none;
      font-size: 15px;
      margin-bottom: 12px;
      transition: var(--transition);

      &:hover {
        transform: translateX(6px);
        text-decoration: none;
      }
    }
  }
`;

export default Sidebar;
