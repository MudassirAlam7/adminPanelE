import React from 'react';
import add from '../../assets/more.png'
import list from '../../assets/checklist.png';
import order from '../../assets/clipboard.png';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <a href="#">
          <img src={add} alt="Add Item" />
          <p>Add Item</p>
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#">
          <img src={list} alt="Check List" />
          <p>Check List</p>
        </a>
      </div>
      <div className="sidebar-item">
        <a href="#">
          <img src={order} alt="Orders" />
          <p>Orders</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
