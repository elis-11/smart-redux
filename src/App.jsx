import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./components/notfound/NotFound.jsx";
import { Header } from "./pages/Header";
import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, test } from "./redux/slices/filterSlice";

export const DataContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="collumn items-center bg-orange-50">

      {/* <DataContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataContext.Provider> */}
            <div className="Counter">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(test())}
        >
          +test
        </button>
      </div>

    </div>
  );
}

export default App;
