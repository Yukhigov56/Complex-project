import style from "./LeftInfo.module.css";

const LeftInfo = ({title, discription}) => {
  return (
    <div className={style.leftBlock}>
        <div>
          <h1 className={style.title}>
            {title}
          </h1>
          <p className={style.paragraph}>
            {discription}
          </p>
        </div>
    </div>
  );
};

export default LeftInfo;
