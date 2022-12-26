import { Products } from "./components/Products";
import productsJson from "./assets/products.json";
import { useState } from "react";
console.log(productsJson);

function App() {
  const [products, setProducts] = useState(productsJson);
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ["vegetable", "fruit", "berry", "cheese"];
  const activeCategory = (index) => {
    setActiveIndex(index);
  };

  const addProduct = (id) => {
    const productsUpdate = products.map((product) =>
      product._id === id ? { ...product, count: product.count + 1 } : product
    );
    setProducts(productsUpdate);
  };
  const removeProduct = (id) => {
    const productsUpdate = products.map((product) =>
      product._id === id && product.count
        ? { ...product, count: product.count - 1 }
        : product
    );
    setProducts(productsUpdate);
  };

  const updateProductPrice = (id) => {
    const productsUpdate = products.map((product) =>
      product._id === id
        ? { ...product, price: Number((product.price + 1).toFixed(2)) }
        : product
    );
    setProducts(productsUpdate);
  };

  // Total Products
  const totalProducts = products.length;

  // Total Price
  const totalPrice = products.reduce((total, item) => total + item.price, 0);

  // Total Volume
  const totalVolume = products.reduce((total, item) => {
    return total + item.volume;
  }, 0);

  // Expensive
  const expensivePrice = products.reduce((total, item) => {
    return total.price > item.price ? total : item;
  });

  // Cheapest
  const cheapestPrice = products.reduce((total, item) => {
    return total.price < item.price ? total : item;
  });

  //! Fridge Price

  const countProductsInFridge = products.reduce(
    (total, product) => total + product.count,
    0
  );

  //! All Products
  const countProducts = products.reduce((total, item) => {
    total[item.title] = total[item.title] ? total[item.title] + 1 : 1;
    return total;
  },[]);
  console.log("countProducts:", countProducts);
 const productsJsx = []
 for(let key in countProducts) {
   productsJsx.push(<div> {key}: {countProducts[key]}</div>)
 }


  const fridgeTotalPrice = products.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);

  // Fridge Volume
  const fridgeTotalVolume = products.reduce((total, item) => {
    return total + item.volume * item.count;
  }, 0);

  const freeVolume = products.reduce((total, item) => {
    return total - item.volume * item.count;
  }, 100);

  //! Products in Fridge

  return (
    <div className="collumn items-center">
      <div className="flex  items-center justify-center font-bold text-4xl text-orange-300 mx-auto my-3">
        <h2 className="">Smart Fridge</h2>
      </div>
      <div className="categories flex m-5">
        {categories.map((value, index) => (
          <div
            key={value}
            onClick={() => activeCategory(index)}
            className={`${
              activeIndex === index ? "active" : ""
            } bg-orange-300 hover:bg-orange-500 active:bg-orange-400 text-white p-3 m-3 rounded-2xl opacity-50 cursor-pointer`}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between ">
        <div className=" basis-3/5 grid grid-cols-4 gap-1 content-start bg-orange-50">
          {products.map((product) => (
            <Products
              key={product._id}
              product={product}
              addProduct={addProduct}
              removeProduct={removeProduct}
              updateProductPrice={updateProductPrice}
            />
          ))}
        </div>

        <div className="cart basis-2/5 flex flex-col bg-orange-100">
          {/* Total Products */}
          <div className="tota-products border-4 border-rose-50 p-5">
            <div className="total flex justify-center mt-6 text-orange-500 font-bold">
              Total Products: {totalProducts}
            </div>
            <div className="total flex justify-center mt-6 text-orange-500 font-bold">
              All Products:
              {/* {countProducts} */}
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Total volume: {totalVolume} from 100
            </div>
            <div className="expensive flex justify-center mt-6 font-bold">
              Expensive: {expensivePrice.title} costs: {expensivePrice.price}{" "}
              {""}
              <img
                src={expensivePrice.imageUrl}
                className="w-8 h-8"
                alt={expensivePrice.title}
              />
            </div>
            <div className="cheapest flex justify-center mt-6 font-bold">
              Cheapest: {cheapestPrice.title} costs: {cheapestPrice.price} {""}
              <img
                src={cheapestPrice.imageUrl}
                className="w-8 h-8"
                alt={cheapestPrice.title}
              />
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Total price: {totalPrice.toFixed(2)}
            </div>
          </div>
          {/* Products in Fridge */}
          <div className="products-in-fridge border-4 border-rose-50 p-5 mt-5">
            <div className="flex justify-center mt-2 text-orange-500 font-bold ">
              Products in fridge:
              {countProducts}
              {/* {prodInFr} */}
            </div>
            <div className="flex justify-center mt-2 text-orange-500 font-bold ">
              Products in fridge:
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Total price: {fridgeTotalPrice.toFixed(2)}
            </div>
            <div className="total flex justify-center mt-6 font-bold">
              Fridge volume: {fridgeTotalVolume.toFixed(0)} from 100
            </div>
          </div>
          <div className="need-for-fridge border-4 border-rose-50 p-5 mt-5">
            <div className="flex justify-center mt-2 text-orange-500 font-bold">
              Free volume: {freeVolume.toFixed(0)} from 100
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
