import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import image from "../../assets/image-.png"
import './dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <div className="layout"> {/* Flex container */}
        <Sidebar />

        <div className="dashboard"> {/* Remaining space */}
          <div className="images">
            <form>
              <div className="upload-img">
                <h2>Upload Images</h2>
                {[1, 2, 3, 4].map((num) => (
                  <label key={num} className={`image${num}`}>
                    <img src={image} alt="" />
                    <input type="file" id={`image${num}`} />
                  </label>
                ))}
              </div>

              <div className="product-name">
                <label className="name">
                  Product Name
                  <input type="text" placeholder="type here" id="pro-input" />
                </label>
              </div>

              <div className="product-description">
                <label className="name">
                  Product Description
                  <textarea placeholder="write content here" id="pro-input"></textarea>
                </label>
              </div>

              <div className="category">
                <label>Product Category</label>
                <select name="category" id="category">
                  <option value="Kurtis">Kurtis</option>
                  <option value="Suits">Suits</option>
                  <option value="Western Wear">Western Wear</option>
                </select>
              </div>

              <div className="pro-price">
                <label className="price">Product Price</label>
                <input type="number" placeholder="999" id="item-price" />
              </div>

              <div className="pro-size">
                <h2>Product Sizes</h2>
                {['S', 'M', 'L', 'XL'].map(size => (
                  <div key={size} className="sizes">{size}</div>
                ))}
              </div>

              <div className="button">
                <button>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
