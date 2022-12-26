import React from "react";

export const AddProducts = ({
  totalProducts,
  totalPrice,
  totalVolume,
  expensivePrice,
  cheapestPrice,
}) => {
  return (
    <div className="tota-products border-4 border-rose-50 p-5">
      <div className="total flex justify-center mt-6 text-orange-500 font-bold">
        Total Products: {totalProducts}
      </div>
      <div className="total flex justify-center mt-6 text-orange-500 font-bold"></div>
      <div className="total flex justify-center mt-6 font-bold">
        Total volume: {totalVolume} from 100
      </div>
      <div className="expensive flex justify-center mt-6 font-bold">
        {""}
        <img
          src={expensivePrice.imageUrl}
          className="w-8 h-8"
          alt={expensivePrice.title}
        />{" "}
        costs: {expensivePrice.price}{" "}
      </div>
      <div className="cheapest flex justify-center mt-6 font-bold">
        <img
          src={cheapestPrice.imageUrl}
          className="w-8 h-8"
          alt={cheapestPrice.title}
        />{" "}
        costs: {cheapestPrice.price} {""}
      </div>
      <div className="total flex justify-center mt-6 font-bold">
        Total price: {totalPrice.toFixed(2)}
      </div>
    </div>
  );
};
