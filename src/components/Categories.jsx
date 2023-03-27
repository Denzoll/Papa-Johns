import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  const categories = [
    "Все",
    "Мясные",
    "Вегетаринские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={activeIndex === i ? "active" : ""}
            >
              {value}
            </li>
          );
        })}
        {}
      </ul>
    </div>
  );
};

export default Categories;
