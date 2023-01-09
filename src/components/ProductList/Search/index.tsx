import React, { useCallback } from 'react'
import styles from './styles.module.css'
import { ProductType } from '../types';
import { FaSearch } from 'react-icons/fa';

type SearchType = {
  data: ProductType[];
  onChange: (elements : ProductType[]) => void;
}

const Search = ({ data, onChange } : SearchType) => {
  const onSearch = useCallback((e : React.ChangeEvent<HTMLInputElement>) : void => {
    const { value } = e.target;

    if (value.length > 0) {
      const newData = data.filter((element) => {
        const name = element.name.toLowerCase();
        const search = value.toLowerCase();

        return name.includes(search);
      });

      if (onChange) onChange(newData);
    } else {
      if (onChange) onChange(data);
    }
  }, [ data, onChange ]);

  return (
    <div className={styles.search} data-testid="search">
      <FaSearch />
      <input
        type="text"
        placeholder="Search"
        onChange={onSearch}  
      />
    </div>
  );
};

export default Search;