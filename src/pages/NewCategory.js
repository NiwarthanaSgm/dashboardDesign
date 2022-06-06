import React from 'react';
import "../styles/newCategory.css";

export default function NewCategory() {
  return (
    <div className="newCategory">
      <h1 className="addCategoryTitle">New Category</h1>
      <form className="addCategoryForm">
        <div className="addCategoryItem">
          <label>Name</label>
          <input type="text" placeholder="Category.." />
        </div>
        <div className="addCategoryItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addCategoryButton">Create</button>
      </form>
    </div>
  );
}