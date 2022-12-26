import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./components/notfound/NotFound.jsx";
import { Header } from "./pages/Header";
import { createContext, useState } from "react";

export const DataContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="collumn items-center bg-orange-50">
      <DataContext.Provider value={{searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          {/* <Route path="/product/:id" element={<Home />} /> */}
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
