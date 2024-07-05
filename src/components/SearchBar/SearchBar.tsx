import style from './search-bar.module.css';

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

//treba nejako potvrdit hladane slovo - po stlaceni enter alebo kliknuti na ikonu lupy

const filter = ({ query, setQuery }: Props) => {
  return (
    <div className={style.searchBarContainer}>
      <input
            className={style.searchBar}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
        />
    </div>
  )
}

export default filter