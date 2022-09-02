import "./search-box.styles.css";

import React, { ChangeEvent, ChangeEventHandler } from "react";

// inheritance and overloading
interface IChangeHandlerProps {
  onSearchChange: () => {};
}

interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;
}

type CanadianAddress = {
  street: string;
  province: string;
};

type USAddress = {
  street: string;
  state: string;
};

// Union
// interface is used for Object Oriented approach
// types is used for functional approach
type NorthAmericanAddress = CanadianAddress | USAddress;

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  // onChangeHandler: ChangeEventHandler;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
