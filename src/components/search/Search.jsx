import debounce from "lodash.debounce";
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useCallback, useContext, useRef, useState } from "react";
import { DataContext } from "../../App";
import styles from "./Search.module.scss";

export const Search = () => {
  const [value, setValue] = useState("");
  const { setSearchValue } = useContext(DataContext);
  const inputRef = useRef();

  const clearSearch = () => {
    setSearchValue("");
    setValue('')
    inputRef.current.focus();
  };

  // LODASH
  const updateSearchValue = useCallback(
    debounce((string) => {
      setSearchValue(string);
    }, 250),
    []
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <FiSearch className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="Search..."
        className={styles.input}
      />
      {value && <MdClose className={styles.clear} onClick={clearSearch} />}
    </div>
  );
};
