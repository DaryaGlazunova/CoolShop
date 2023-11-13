import React from "react";
import searchSvg from "../../assets/icons/header/search.svg";
import clearSearchSvg from "../../assets/icons/header/clear-search.svg";

import "./_index.scss";
import { useAppDispatch } from "../../redux/store";
import { debounce } from "lodash";
import { setSearchValue } from "../../redux/filter/filterSlice";

const Search: React.FC = () => {
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState("");
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
    setValue(event.target.value);
  };

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    searchInputRef.current?.focus();
  };

  return (
    <form className="search__form">
      <button type="submit" className="search__submit-btn">
        <img src={searchSvg} alt="" />
      </button>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Поиск..."
        className="search__input"
        value={value}
        onChange={onChangeInput}
      ></input>
      {value && (
        <img
          onClick={() => onClickClear()}
          className="search__clear"
          src={clearSearchSvg}
          alt=""
        />
      )}
    </form>
  );
};

export default Search;
