import React from "react";

export const ProductsInFridge = ({
  countProductsInFridge,
  productsJsxInFridge,
  fridgeTotalPrice,
  fridgeTotalVolume,
}) => {
  return (
    <div className="products-in-fridge border-4 border-rose-50 p-5 mt-5">
      <div className="total flex justify-center mt-6 text-orange-500 font-bold">
        Products in fridge
      </div>
      <div className="flex justify-center mt-2 text-orange-500 font-bold ">
        Total: {countProductsInFridge}
      </div>
      <div className="flex justify-center mt-2 text-orange-500 font-bold ">
        Products: {productsJsxInFridge}
      </div>
      <div className="total flex justify-center mt-6 font-bold">
        Total price: {fridgeTotalPrice.toFixed(2)}
      </div>
      <div className="total flex justify-center mt-6 font-bold">
        Volume: {fridgeTotalVolume.toFixed(0)} from 100
      </div>
    </div>
  );
};
