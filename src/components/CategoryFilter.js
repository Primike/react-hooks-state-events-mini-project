import React from "react";

function CategoryFilter({categories, changeCategory}) {

  let categoryButtons = categories.map((category) => {
    return (
      <button key = {category} onClick = {() => {changeCategory(category)}}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
