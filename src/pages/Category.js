import React from 'react';
import { Link } from "react-router-dom";
import "../styles/category.css";
import Chart from "../components/Chart"
import {categoryData} from "../store/TableData"

export default function Product() {
  return (
    <div className="category">
      <div className="categoryTitleContainer">
        <h1 className="categoryTitle">Category</h1>
        <Link to="/newcategory">
          <button className="categoryAddButton">Create</button>
        </Link>
      </div>
      <div className="categoryTop">
          <div className="categoryTopLeft">
              <Chart data={categoryData} dataKey="Buys" title="Buys Performance"/>
          </div>
          <div className="categoryTopRight">
              <div className="categoryInfoTop">
                  <span className="categoryName">Lawyer</span>
              </div>
              <div className="categoryInfoBottom">
                  <div className="categoryInfoItem">
                      <span className="categoryInfoKey">id:</span>
                      <span className="categoryInfoValue">123</span>
                  </div>
                  <div className="categoryInfoItem">
                      <span className="categoryInfoKey">active:</span>
                      <span className="productcategoryInfoValue">yes</span>
                  </div>
                  <div className="categoryInfoItem">
                      <span className="categoryInfoKey">sub categories:</span>
                      <span className="categoryInfoValue">10</span>
                  </div>
                  <div className="categoryInfoItem">
                      <span className="categoryInfoKey">Published gigs:</span>
                      <span className="categoryInfoValue">100</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="categoryBottom">
          <form className="categoryForm">
              <div className="categoryFormLeft">
                  <label>Category Name</label>
                  <input type="text" placeholder="Lawyer" />
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="categoryFormRight">
                <button className="categoryButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}