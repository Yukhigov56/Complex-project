import Card from "./Card/Card";
import style from "./MapApartment.module.css";

import imgOne from "../../../public/img (13).svg";
import imgTwo from "../../../public/img (14).svg";
import imgThree from "../../../public/img (15).svg";
import imgFwo from "../../../public/img (16).svg";

const MapApartment = () => {
  const infoCard = [
    {
      id: 1,
      title: "Свободная планировка, возможность объединить квартиры до 500 м",
      discription: "Не ограничивайте себя при создании жилого пространства Вашей мечты, воспользуйтесь возможностью увеличения площади до комфортного Вам размера",
      img: imgOne,
    },
    {
      id: 2,
      title: "Настоящий дровяной камин ",
      discription: "В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года",
      img: imgTwo,
    },
    {
      id: 3,
      title: "Собственная терраса до 17 м²",
      discription: "Современная террасса с необыкновенными видами на благоустроенную набережную, МГУ им. М.В. Ломоносова и Воробьевы горы",
      img: imgThree,
    },
    {
      id: 4,
      title: "Увеличенная высота потолка",
      discription: "Почувствуйте простор помещений в полной мере с увеличенной высотой потолка 4,2 м",
      img: imgFwo,
    }
  ];

  return (
    <div className={style.mainContainer}>
      {infoCard.map((card) => (
        <Card infoCard={card} key={card.id} />
      ))}
    </div>
  );
};

export default MapApartment;