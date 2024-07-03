import style from './entry.module.css';

interface Props {
    heading: string,
    text: string,
    category: string;
    type: string
}

const entry = ({heading, text, category, type}: Props) => {
  if (type === "image") return (
    <button className={style.btnImage}>
      <img className={style.image} src={text} alt={heading} />
      <h1 className={style.btnHeading}>{heading}</h1>
    </button>
  )
  
  return (
    <button className={style.btn}>
        <h1 className={style.entryHeading}>{heading}</h1>
        <p className={style.entryText}>{text}</p>
        <p className={style.category}>{category}</p>
    </button>
  )
}

export default entry