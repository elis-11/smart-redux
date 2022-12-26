import { useState } from "react";

// export const Products = ({ title, price, image, category, status, weight }) => {
export const Products = ({
  product,
  addProduct,
  removeProduct,
  updateProductPrice,
}) => {
  const [activeStatus, setActiveStatus] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const statusNames = ["packed", "apiece"];

  return (
    <div>
      <div className=" bg-orange-100 shadow-lg border-2 rounded border-red-100">
        <img
          src={product.imageUrl}
          className="w-full h-36"
          alt={product.title}
        />
        <div className="data p-4">
          <div className="title font-bold">{product.title}</div>
          <div className="weight">weight: {product.weight} gr.</div>
          <div className="category">category: {product.category}</div>
          <div className="volume">volume: {product.volume}</div>
          <div
            onClick={() => updateProductPrice(product._id)}
            className="price cursor-pointer hover:bg-orange-300"
          >
            price: {product.price}
          </div>
          <div className="sizes flex justify-between">
              <h5>size: {" "}</h5>
            <span className="flex justify-between px-1">
              {product.sizes.map((size, index) => (
                <span 
                  onClick={() => setActiveSize(index)}
                  key={size}
                  className={`${
                    activeSize === index ? "active:" : ""
                  } px-2 mr-1 hover:bg-orange-300 active:bg-violet-100 cursor-pointer`}
                >
                  {size} 
                </span>
              ))}
            </span>
          </div>
          <div className="status flex justify-between ">
            {product.status.map((statId) => (
              <span
                onClick={() => setActiveStatus(statId)}
                key={statId}
                className={`${
                  activeStatus === statId ? "active:" : ""
                } px-3 mb-1 active:bg-violet-100 focus:ring-gray-300 hover:bg-orange-300 cursor-pointer`}
              >
                {statusNames[statId]}
              </span>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => addProduct(product._id)}
              className="bg-orange-400 w-12 hover:bg-orange-500 rounded-full"
            >
              +
            </button>
            <div className="count px-3">{product.count}</div>
            <button
              onClick={() => removeProduct(product._id)}
              className="bg-orange-400 w-12  hover:bg-orange-500 rounded-full"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
