import { useState } from 'react';
import style from './search-bar.module.css';
import { IoSearchSharp } from "react-icons/io5";

interface Props {
  setQuery: (query: string) => void;
}

//treba nejako potvrdit hladane slovo - po stlaceni enter alebo kliknuti na ikonu lupy

const SearchBar = ({ setQuery }: Props) => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className={style.searchBarContainer}>
      <button onClick={() => setQuery(searchWord)}><IoSearchSharp color="gray" size={40} /></button>
      <input
        className={style.searchBar}
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchBar;