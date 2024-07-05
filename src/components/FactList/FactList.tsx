import { useEffect, useState } from "react";
import Fact from './Fact';
import style from './fact-list.module.css';

interface Data {
  id: number;
  name: string;
  description: string;
  category: string;
  type: string
}

interface Props {
  query: string;
}

const FactList = ({ query }: Props) => {
  const JSON = '/data.json';
  const [data, setData] = useState<Data[]>([]);
  const [factsToDisplay, setFactsToDisplay] = useState<Data[]>([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const fetchApi = () => {
      fetch(JSON)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          selectRandomFacts(data);
        });
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      setSearchWord(query);
      selectSearchedFacts(searchWord);
    }
  }, [query])

  const selectRandomFacts = (data: Data[]) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 30);
    setFactsToDisplay(selected);
  };

  const selectSearchedFacts = (searchWord:string) => {
    //po vyhladavani sa niekedy nezobrazuju vysledky vo vsetkych stlpcoch
    const searchedFacts = data.filter(fact =>
      fact.name.toLowerCase().includes(searchWord.toLowerCase()) ||
      fact.description.toLowerCase().includes(searchWord.toLowerCase()) ||
      //jedna polozka bude mat aj viac kategorii
      fact.category.toLowerCase().includes(searchWord.toLowerCase())
    );
    setFactsToDisplay(searchedFacts);
  }

  return (
    <div className={style.mainContainer}>
        {factsToDisplay.map((fact) => (
            <Fact key={fact.id} heading={fact.name} text={fact.description} category={fact.category} type={fact.type} />
        ))}
    </div>
  )
}

export default FactList