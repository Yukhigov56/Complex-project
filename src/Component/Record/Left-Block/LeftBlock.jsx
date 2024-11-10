import style from "./LeftBlock.module.css";
import LeftList from "./Left-List/LeftList";
import Form from "./Form/Form";
const LeftBlock = () => {
    const list = [
        "Подробно расскажем про жилой комплекс",
        "Ознакомитесь со всеми планировками и ценами",
        "Прогуляетесь по благоустроенной набережной",
      ];

  return (
    <div className={style.leftBlock}>
      <p className={style.paragraph}>Специально для вас</p>
      <h1 className={style.title}>Персональная презентация West Garden</h1>
      <LeftList list={list} />
      <Form />
    </div>
  );
};

export default LeftBlock;
