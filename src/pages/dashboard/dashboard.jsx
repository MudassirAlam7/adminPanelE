import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import image from "../../assets/image-.png"
import './dashboard.css';

const Dashboard = () => {
 const [product, setProduct] = useState({
   productName: '',
   price : '',
   description: '',
   category: '',
   subcategory: '',
   stock : '',
   images: "",
  });
  const [selectimages, setSelectImages] = useState([]);

  const handlesubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData();
    formData.append('productName', product.productName); 
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('category', product.category);
    formData.append('subcategory', product.subcategory);
    formData.append('stock', product.stock);

    selectimages.forEach((image,) => {
      if (image) formData.append(`files`, image);
    });
    
    try{
      const response = await fetch("https://e-commercebackend-oovu.onrender.com/api/products/uploads", {
        method: 'POST',
        body: formData,
        
      })
      const responsedata = await response.json();
      
      console.log("uploaded successfully", responsedata);
      alert("Product added successfully");
      
    }
    catch(error){
      console.error("Error uploading product:", error);
      alert("Failed to add product. Please try again.");

    }
    
  }

  function handleImagechange(e, num) {
    const files = [...selectimages]
    files[num] = e.target.files[0];
    setSelectImages(files);
  }

  
  return (
    <>
      <Navbar />

      <div className="layout"> {/* Flex container */}
        <Sidebar />

        <div className="dashboard"> {/* Remaining space */}
          <div className="images">
            <form>
              <div className="upload-img">
               <div className="upload-img">
                <h2>Upload Images</h2>
                {[1, 2, 3, 4].map((num) => (
                  <label key={num} className={`image${num}`}>
                    <img src={image} alt="" />
                    <input type="file" id={`image${num}`} accept='/image*' onChange={(e)=>handleImagechange(e, num)} />
                  </label>
                ))}
              </div>
              </div>

              <div className="product-name">
                <label className="name">
                  Product Name
                  <input type="text" placeholder="Type here" id="pro-input" value = {product.productName}onChange={(e)=>setProduct({...product, productName : e.target.value})}/>
                </label>
              </div>

              <div className="product-description">
                <label className="name">
                  Product Description
                  <textarea placeholder="write content here" id="pro-input" onChange={(e)=>setProduct({...product, description : e.target.value})}/>
                </label>
              </div>

              <div className="category">
                <label>Product Category</label>
                <input type="text" placeholder='write category' value={product.category} onChange={(e)=>setProduct({...product, category : e.target.value})} />
              </div>
              <div className="subcategory">
                <label className='name'>Subcategory</label>
                <input type="text" placeholder='write subcategory' value={product.subcategory} onChange={(e)=>setProduct({...product, subcategory : e.target.value})}  />
              </div>

              <div className="pro-price">
                <label className="price">Product Price</label>
                <input type="number" placeholder="999" id="item-price" value={product.price}
                onChange={(e)=>setProduct({...product, price : e.target.value})} />
              </div>
              <div className="pro-stock">
                <label className="stock">Product Stock</label>
                <input type="number" placeholder="10" id="item-stock" value={product.stock}
                onChange={(e)=>setProduct({...product, stock : e.target.value})}/>   
              </div>
              <div className="pro-size">
                <h2>Product Sizes</h2>
                {['S', 'M', 'L', 'XL'].map(size => (
                  <div key={size} className="sizes">{size}</div>
                ))}
              </div>

              <div className="button">
                <button onClick={handlesubmit}>Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
