import { useContext, useEffect, useState } from "react";
import { Products } from "../components/Products";
import { Sort } from "../components/Sort";
import { Categories } from "../components/Categories";
import { Pagination } from "../components/pagination/Pagination";
import { DataContext } from "../App";
import { AddProducts } from "../components/products/AddProducts";
import { ProductsInFridge } from "../components/products/ProductsInFridge";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import axios from "axios";
// import productsJson from "./assets/products.json";

export const Home = () => {
  const dispatch = useDispatch();
  const {
    categoryId,
    currentPage,
    sort: { sorted },
  } = useSelector((state) => state.filter); // import categoryId & sort from filterSlice/filter
  // const categoryId = useSelector((state) => state.filter.categoryId)
  // const sortType = useSelector((state) => state.filter.sort.sorted)

  // const [categoryId, setCategoryId] = useState(0);
  // const [sortType, setSortType] = useState({
  //   name: "popular",
  //   sorted: "rating",
  // });
  console.log("redux-state", "id-category", categoryId);

  // const setCategoryId = () => {}; // f - saglushka

  const { searchValue } = useContext(DataContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = number => {
    dispatch(setCurrentPage(number));
  }

  useEffect(() => {
    setIsLoading(true);

    const order = sorted.includes("-") ? "asc" : "desc"; // delete minus ('-')
    const sortBy = sorted.replace("-", ""); // if minus ? "asc" : "desc
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    // const fetchData = async () => {
    //   let response = await fetch(
    //     `https://639102970bf398c73a98b8ea.mockapi.io/accessories?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    //   ); // wenn will be sapros / response
    //   response = await response.json(); // conwert otwet in json, werni otwet w json
    //   setProducts(response);
    //   setIsLoading(false);
    // };
    // fetchData();
    axios.get(`https://639102970bf398c73a98b8ea.mockapi.io/accessories?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`)
    .then(res => {
      setProducts(res.data)
      setIsLoading(false)
    })
    window.scrollTo(0, 0);
  }, [categoryId, sorted, searchValue, currentPage]); // [] - means didMount = perwiy render
  // const [products, setProducts] = useState(productsJson);

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

  //! Display Products
  // Total Volume
  const totalVolume = products.reduce((total, item) => {
    return total + item.volume;
  }, 0);

  // Expensive
  const expensivePrice = products.reduce((total, item) => {
    return total.price > item.price ? total : item;
  }, 0);

  // Cheapest
  const cheapestPrice = products.reduce((total, item) => {
    return total.price < item.price ? total : item;
  }, 0);

  //! Products in Fridge
  // Total Price
  const totalPrice = products.reduce((total, item) => total + item.price, 0);

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

  // Total Products in Fridge
  const countProductsInFridge = products.reduce(
    (total, product) => total + product.count,
    0
  );
  //! Display Products in Fridge
  const displayProductsInFridge = products
    .filter((product) => product.count > 0)
    .reduce((total, product) => {
      total[product.title] = total[product.title]
        ? total[product.title] * product.length
        : 1;
      return total;
    }, {});

  const productsJsxInFridge = [];
  for (let key in displayProductsInFridge) {
    productsJsxInFridge.push(
      // ` ${key}: ${""} ${displayProductsInFridge[key]}`
      ` ${key}`
    );
  }
  return (
    <div className="collumn justify-center  ">
      <div className="header flex justify-between h-36 mx-12">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <div className="flex flex-row justify-between ">
        <div className="pl-5rem font-bold text-4xl text-gray-500">
          {isLoading && "Loading..."}
        </div>

        <div className=" basis-4/6 grid grid-cols-4 gap-1 content-start bg-orange-50">
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
        <div className="cart basis-2/6 flex flex-col bg-orange-100">
          {/* All Products */}
          <div className="tota-products border-4 border-rose-50 p-5">
            <AddProducts
              totalProducts={totalProducts}
              totalPrice={totalPrice}
              totalVolume={totalVolume}
              expensivePrice={expensivePrice}
              cheapestPrice={cheapestPrice}
            />
            <ProductsInFridge
              countProductsInFridge={countProductsInFridge}
              productsJsxInFridge={productsJsxInFridge}
              fridgeTotalPrice={fridgeTotalPrice}
              fridgeTotalVolume={fridgeTotalVolume}
            />
            <div className="need-for-fridge border-4 border-rose-50 p-5 mt-5">
              <div className="flex justify-center mt-2 text-orange-500 font-bold ">
                Free volume: {freeVolume.toFixed(0)} from 100
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
