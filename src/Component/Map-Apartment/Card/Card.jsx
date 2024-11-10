import style from "./Card.module.css";
import LeftInfo from "./Left-Block/LeftInfo";
import Img from "../Img-Rigth/Img";



const Card = ( {infoCard} ) => {

  return (
    <div className={style.cantainer}>
      <LeftInfo title={infoCard.title} discription={infoCard.discription} />
      <Img img={infoCard.img} />
    </div>
  );
};

export default Card;
