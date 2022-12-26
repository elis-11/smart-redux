import { useState } from "react";

export const Categories = ({value, onChangeCategory}) => {
  // console.log(value)
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["All", "Necklace", "Bracelet", "Ring", "Earrings"];

  return (
    <>
      <div className="categories flex mt-12">
        {categories.map((categoryName, i) => (
          <div
            key={i}
            onClick={() => onChangeCategory(i)}
            className={`${
              value === i ? "active" : ""
            } bg-orange-300 hover:bg-orange-500 active:bg-orange-400 text-white p-4 m-2 h-12  rounded-2xl opacity-50 cursor-pointer`}
          >
            {categoryName}
          </div>
        ))}
      </div>
    </>
  );
};
