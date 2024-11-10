import style from "./Form.module.css";

const Form = () => {
  return (
    <form className={style.form}>
      <label htmlFor="name">Закрепить за номером</label>
      <input type="telephone" id="name" placeholder="+7 __ __-__-__" />
      <button className={style.button}>Записаться на презентацию</button>
      <p>
        Нажимая на кнопку, вы даёте согласие на обработку персональных данных и
        соглашаетесь c политикой конфиденциальности
      </p>
    </form>
  );
};

export default Form;
