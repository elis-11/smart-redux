import { Link, NavLink } from "react-router-dom";
import logo from "../assets/10.png";
import { Search } from "../components/search/Search";

export const Header = () => {


// const searchedProducts = products.filter(product => {
// return product.name.toLowerCase().includes(searchValue.toLowerCase())
// })

  return (
    <div className="content flex flex-col">
      <div className="flex justify-between font-bold text-4xl text-orange-300 h-20 mx-8 pt-8">
        <nav>
          <NavLink className="mr-4" to="/">
            Home
          </NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
        <h2 className="">Smart Redux-Toolkit</h2>
        <Link to="/">
          <img className="w-10 h-10 ml-4 mb-0 " src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="search ">
        <Search />
      </div>
    </div>
  );
};
