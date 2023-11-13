import React from "react";
import "./_index.scss";

type TypeCategoriesProps = {
  value: string;
  onChangeCategory: (categoryName: string) => void;
};

const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's clothing",
  "Women's clothing",
];

export const Categories: React.FC<TypeCategoriesProps> = React.memo(
  ({ value, onChangeCategory }: TypeCategoriesProps) => {
    return (
      <div className="categories">
        <ul>
          {categories.map((catecoryName, index) => (
            <li
              key={index}
              onClick={() => onChangeCategory(catecoryName)}
              className={value === categories[index] ? "active" : ""}
            >
              {catecoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

Categories.displayName = "Categories";
