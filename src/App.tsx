import { useEffect, useState } from 'react';
import './App.css';
import Entry from './components/entry';
import Filter from './components/filter';

interface Data {
  id: number;
  name: string;
  description: string;
  category: string;
  type: string
}

function App() {
  //const headings = ["Nature", "Society", "Roman Empire", "Queen Elizabeth II", "Philosophy", "Rule of Queen Elizabeth II", "Italy", "Octavianus Augustus"];
  //const entryTexts = ["Nature refers to the physical world and everything in it that is not created by humans. This includes the Earth, its ecosystems, and the living organisms that inhabit it, as well as the physical forces and phenomena that shape the environment.", "Society is a complex and organized group of individuals who live together in a community and share common values, institutions, and culture. It encompasses the social structures, relationships, and institutions that define how people interact with each other and function collectively.", "The Roman Empire was a vast civilization that originated from the city-state of Rome in Italy. Starting as a republic in 509 BCE, it expanded through conquest and diplomacy, eventually encompassing territories around the Mediterranean Sea and beyond, including parts of Europe, North Africa, and the Middle East.", "Queen Elizabeth II, born Elizabeth Alexandra Mary Windsor on April 21, 1926, in London, England, was the longest-reigning monarch in British history, reigning for over 70 years until her passing on September 8, 2022.", "Philosophy is the systematic study of fundamental questions regarding existence, knowledge, values, reason, mind, and language. It seeks to understand and explore the nature of reality, human existence, morality, and the principles underlying knowledge and understanding.", "Queen Elizabeth II's reign, spanning from February 6, 1952, to September 8, 2022, modernized the monarchy while upholding its traditional values. She became a unifying symbol through periods of societal change and navigated numerous national and global challenges with steadfast leadership, shaping a legacy of stability and continuity for the British monarchy.", "Italy, known for its rich cultural heritage and stunning landscapes, is a country in Southern Europe. It boasts iconic landmarks such as the Colosseum in Rome, Renaissance art in Florence, and the picturesque canals of Venice. Its cuisine, including pasta, pizza, and gelato, is celebrated worldwide for its delicious flavors and regional diversity."]
  //po kliknuti na prispevok sa objavia suviase prispevky, napr. po klikunuti na prispevok s menom osobnosti sa objavi jej obrazok (ak bude k dispozicii) a naopak - tiez sa vlavo hore prida heslo, ktore sa bude dat zrusit
  //ked sa kline na heslo philosophy, tak sa objavia obrazka prispevky filozofov
  //ked sa klikne na druhu svetovu vojnu, tak sa objavi hitler, stalin, operacia barbarosa, holokaust...
  //v poli sa budu objavovat aj obrazky
  //urobit kazdu kategoriu roznou farbou
  //https://www.youtube.com/watch?v=baBvJDmziGQ
  //treba prispevky s roznou vyskou ako na pintereste
  //pre obrázky: https://unsplash.com/

  const JSON = '/data.json';
  const [, setData] = useState<Data[]>([]);
  const [itemsToDisplay, setItemsToDisplay] = useState<Data[]>([]);

  useEffect(() => {
    const fetchApi = () => {
      fetch(JSON)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          selectRandomElements(data);
        });
    };
    fetchApi();
  }, []);

  const selectRandomElements = (data: Data[]) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);
    setItemsToDisplay(selected);
  };

  return (
    <div>
      <div className="searchBarContainer">
        <Filter />
      </div>
      <div className="mainContainer">
        {itemsToDisplay.map((item) => (
          <Entry key={item.id} heading={item.name} text={item.description} category={item.category} type={item.type} />
        ))}
      </div>
    </div>
  )
}

export default App;
