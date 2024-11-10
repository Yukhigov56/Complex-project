import style from './LeftList.module.css'

const LeftList = (props) => {

  return (
    <div>
        <ul className={style.list}>
            {props.list.map((elem, index) => (
                <li key={index}>{elem}</li>
            ))}
        </ul>
    </div>
  )
};

export default LeftList
