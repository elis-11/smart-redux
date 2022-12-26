import styles from "./Search.module.scss";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { DataContext } from "../../App";

export const Search = () => {
  const { searchValue, setSearchValue } = useContext(DataContext);
  return (
    <div className={styles.root}>
      <FiSearch className={styles.icon} />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search..."
        className={styles.input}
        />
        {searchValue && (
      <MdClose className={styles.clear} onClick={() => searchValue("")} />
      )}
    </div>
  );
};
