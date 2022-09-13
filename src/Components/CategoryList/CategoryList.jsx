import React from "react";
import CategoryListItem from "../CategoryListItem";

const CategoryList = (props) => {
  const { categories = [] } = props;

  return (
    <section className="CategoryList">
      <ul>
        {categories.map((category) => (
          <CategoryListItem key={category.idCategory} category={category} />
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
