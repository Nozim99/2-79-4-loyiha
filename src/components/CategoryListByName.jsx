import React from "react";
import CategoryItemByName from "./CategoryItemByName";

const CategoryListByName = ({ categoryName = [] }) => {
  return (
    <div className="container">
        <h1 className="text-center mt-4">List of foods</h1>
      <div className="row d-flex justify-content-center mt-4 mb-5">
        {categoryName.map((el) => (
          <CategoryItemByName key={el.idMeal} {...el} />
        ))}
      </div>
    </div>
  );
};

export default CategoryListByName;
