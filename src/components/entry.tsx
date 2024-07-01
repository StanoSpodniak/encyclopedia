import style from './entry.module.css';

interface Props {
    heading: string,
    text: string
}

const entry = ({heading, text}: Props) => {
  return (
    <button className={style.btn}>
        <h1 className={style.entryHeading}>{heading}</h1>
        <p className={style.entryText} >{text}</p>
    </button>
  )
}

export default entry