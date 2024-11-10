import style from "./Img.module.css";

const Img = ( {img} ) => {
  return (
    <div className={style.blockImg}>
          <img src={img} alt="Здесь картина" />
    </div>
  );
};

export default Img;
