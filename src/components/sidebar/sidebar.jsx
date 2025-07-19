import { useState } from 'react';
import add from '../../assets/more.png';
import list from '../../assets/checklist.png';
import order from '../../assets/clipboard.png';
import './sidebar.css';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("add"); // Default active

  return (
    <div className="sidebar">
      <div
        className={`sidebar-item ${activeTab === "add" ? "active" : ""}`}
        onClick={() => setActiveTab("add")}
      >
        <a href="#">
          <img src={add} alt="Add Item" />
          <p>Add Item</p>
        </a>
      </div>

      <div
        className={`sidebar-item ${activeTab === "list" ? "active" : ""}`}
        onClick={() => setActiveTab("list")}
      >
        <a href="#">
          <img src={list} alt="Check List" />
          <p>Check List</p>
        </a>
      </div>

      <div
        className={`sidebar-item ${activeTab === "order" ? "active" : ""}`}
        onClick={() => setActiveTab("order")}
      >
        <a href="#">
          <img src={order} alt="Orders" />
          <p>Orders</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
