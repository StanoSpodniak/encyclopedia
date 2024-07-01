import style from './entry.module.css';
import Augustus from '../assets/Augustus.jpg';

interface Props {
    heading: string,
    text: string
}

const entry = ({heading, text}: Props) => {
  if (heading === "Octavianus Augustus") return (
    <button className={style.btnImage}>
      <img className={style.image} src={Augustus} alt="Augustus" />
      <h1 className={style.btnHeading}>{heading}</h1>
    </button>
  )
  
  return (
    <button className={style.btn}>
        <h1 className={style.entryHeading}>{heading}</h1>
        <p className={style.entryText} >{text}</p>
    </button>
  )
}

export default entry