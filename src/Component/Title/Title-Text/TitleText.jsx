import styles from "./TitleText.module.css"


const TitleText = () => {
  return (
    <div className={styles.textContainer}>
      <h1 >Жизнь в зеленом оазисе в статусном районе Москвы</h1>
      <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
    </div>
  );
};

export default TitleText;
