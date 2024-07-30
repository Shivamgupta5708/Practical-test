import React from 'react';

const Filter = ({ materials, colors, onFilterChange }) => {
  const handleMaterialChange = (e) => {
    onFilterChange('material', e.target.value);
  };

  const handleColorChange = (e) => {
    onFilterChange('color', e.target.value);
  };
  console.log(materials);
  return (
    <div className='filters'>
      <h2>Filters</h2>
      <div className='filter-section'>
        <h4>Materials</h4>
        <select onChange={handleMaterialChange}>
          <option value='all'>All</option>
          {materials?.map((material) => (
            <option key={material?.id} value={material?.id}>
              {material?.name}
            </option>
          ))}
        </select>
      </div>
      <div className='filter-section'>
        <h4>Colors</h4>
        <select onChange={handleColorChange}>
          <option value='all'>All</option>
          {colors?.map((color) => (
            <option key={color?.id} value={color?.id}>
              {color?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
