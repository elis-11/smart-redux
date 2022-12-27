import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";

const list = [
  { name: "popular (DESC)", sorted: "rating" },
  { name: "popular (ASC)", sorted: "-rating" },
  { name: "price (DESC)", sorted: "price" },
  { name: "price (ASC)", sorted: "-price" },
  { name: "alphabet (DESC)", sorted: "title" },
  { name: "alphabet (ASC)", sorted: "-title" },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [isVisible, setIsVisible] = useState(false);
  // const sortName = list[value].name;

  const onClickListItem = (obj) => {
    // onChangeSort(i); // select one item
    dispatch(setSort(obj));  // = dispatch('type: filters/setSort');
    setIsVisible(false); // & hide popup
  };

  return (
    <div className="sort m-5 w-30">
      <div className="sort_label">
        <b>Sort by:</b>
        <span
          onClick={() => setIsVisible(!isVisible)}
          className="ml-2 border-dotted border-orange-500 border-b-4 text-orange-500 cursor-pointer"
        >
          {sort.name}
        </span>
      </div>
      {isVisible && (
        <div className="sort_popup mt-3 absolute border-2 drop-shadow-xl">
          {list.map((obj, i) => (
            <div
              key={i}
              onClick={() => onClickListItem(obj)}
              className={`${
                sort.sorted === obj.sorted ? "active" : ""
              } pl-5 my-0.5 w-40 bg-orange-100 font-bold  hover:bg-orange-50 cursor-pointer`}
            >
              {obj.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
