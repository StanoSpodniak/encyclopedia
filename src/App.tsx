import './App.css';
import Entry from './components/entry';

function App() {
  const headings = ["Nature", "Society", "Roman Empire", "Queen Elizabeth II", "Philosophy", "Rule of Queen Elizabeth II", "Italy"];
  const entryTexts = ["Nature refers to the physical world and everything in it that is not created by humans. This includes the Earth, its ecosystems, and the living organisms that inhabit it, as well as the physical forces and phenomena that shape the environment.", "Society is a complex and organized group of individuals who live together in a community and share common values, institutions, and culture. It encompasses the social structures, relationships, and institutions that define how people interact with each other and function collectively.", "The Roman Empire was a vast civilization that originated from the city-state of Rome in Italy. Starting as a republic in 509 BCE, it expanded through conquest and diplomacy, eventually encompassing territories around the Mediterranean Sea and beyond, including parts of Europe, North Africa, and the Middle East.", "Queen Elizabeth II, born Elizabeth Alexandra Mary Windsor on April 21, 1926, in London, England, was the longest-reigning monarch in British history, reigning for over 70 years until her passing on September 8, 2022.", "Philosophy is the systematic study of fundamental questions regarding existence, knowledge, values, reason, mind, and language. It seeks to understand and explore the nature of reality, human existence, morality, and the principles underlying knowledge and understanding.", "Queen Elizabeth II's reign, spanning from February 6, 1952, to September 8, 2022, modernized the monarchy while upholding its traditional values. She became a unifying symbol through periods of societal change and navigated numerous national and global challenges with steadfast leadership, shaping a legacy of stability and continuity for the British monarchy.", "Italy, known for its rich cultural heritage and stunning landscapes, is a country in Southern Europe. It boasts iconic landmarks such as the Colosseum in Rome, Renaissance art in Florence, and the picturesque canals of Venice. Its cuisine, including pasta, pizza, and gelato, is celebrated worldwide for its delicious flavors and regional diversity."]
  //po kliknuti na prispevok sa objavia suviase prispevky, napr. po klikunuti na prispevok s menom osobnosti sa objavi jej obrazok (ak bude k dispozicii) a naopak - tiez sa vlavo hore prida heslo, ktore sa bude dat zrusit
  //ked sa kline na heslo philosophy, tak sa objavia obrazka prispevky filozofov
  //ked sa klikne na druhu svetovu vojnu, tak sa objavi hitler, stalin, operacia barbarosa, holokaust...
  //v poli sa budu objavovat aj obrazky
  //https://www.youtube.com/watch?v=baBvJDmziGQ
  //treba prispevky s roznou vyskou ako na pintereste
  //pre obrázky: https://unsplash.com/

  return (
    <div>
      <div className="mainContainer">
        <Entry heading={headings[0]} text={entryTexts[0]} />
        <Entry heading={headings[1]} text={entryTexts[1]} />
        <Entry heading={headings[2]} text={entryTexts[2]} />
        <Entry heading={headings[3]} text={entryTexts[3]} />
        <Entry heading={headings[4]} text={entryTexts[4]} />
        <Entry heading={headings[5]} text={entryTexts[5]} />
        <Entry heading={headings[6]} text={entryTexts[6]} />
      </div>
    </div>
  )
}

export default App
