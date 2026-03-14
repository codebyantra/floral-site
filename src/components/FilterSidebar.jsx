import React from "react";
import "./filterSidebar.css";

const FilterSidebar = () => {
  return (
    <aside className="filter-sidebar">
      <h2>Filters</h2>

      <div className="filter-group">
        <h3>Price Range</h3>
        <label><input type="checkbox" /> Under $20</label>
        <label><input type="checkbox" /> $20 - $50</label>
        <label><input type="checkbox" /> $50 - $100</label>
      </div>

      <div className="filter-group">
        <h3>Color</h3>
        <label><input type="checkbox" /> Red</label>
        <label><input type="checkbox" /> Pink</label>
        <label><input type="checkbox" /> White</label>
        <label><input type="checkbox" /> Yellow</label>
      </div>

      <div className="filter-group">
        <h3>Occasion</h3>
        <label><input type="checkbox" /> Birthday</label>
        <label><input type="checkbox" /> Anniversary</label>
        <label><input type="checkbox" /> Valentine’s Day</label>
      </div>

      <div className="filter-group">
        <h3>Type</h3>
        <label><input type="checkbox" /> Roses</label>
        <label><input type="checkbox" /> Tulips</label>
        <label><input type="checkbox" /> Orchids</label>
      </div>
    </aside>
  );
};

export default FilterSidebar;
