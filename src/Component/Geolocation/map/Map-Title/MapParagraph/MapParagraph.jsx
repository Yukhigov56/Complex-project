import styles from "./MapParagraph.module.css"


const MapParagraph = () => {
  return (
    <div className={styles.blockParagraph}>
      <p className={styles.paragraph}>
        ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки
        и природным заказником «Долина реки Сетунь»
      </p>
    </div>
  );
};

export default MapParagraph