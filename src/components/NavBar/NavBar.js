import React, { useState, useEffect } from 'react';
import { BsSliders2 } from "react-icons/bs"
import { FiChevronDown } from "react-icons/fi"
import "./NavBar.css";


const Navbar = ({ displayGroup, displayOrder, onDisplaySelectChange }) => {
  const [displayPress, setDisplayPress] = useState(false);
  return (
    <div className="navbar">
      <div className="display-btn-container">
        <button className='display-btn' onClick={() => {
          setDisplayPress(!displayPress);
        }}>
          <BsSliders2 /> Display <FiChevronDown />
        </button>
        {displayPress &&
          <div className="display-window">
            <div className="group">
              <span>Grouping</span>
              <select
                value={displayGroup}
                onChange={(e) => {
                  onDisplaySelectChange(e.target.value, true);
                  setDisplayPress(!displayPress);
                }}
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="group">
              <span>Ordering</span>
              <select
                value={displayOrder}
                onChange={(e) => {
                  onDisplaySelectChange(e.target.value, false);
                  setDisplayPress(!displayPress);
                }}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Navbar;