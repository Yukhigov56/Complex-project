import styles from "../GeneralImg.module.css"

const BottomLeft = () => {
    return (
        <div>
            <div>
            <span className={styles.leftTopImg}>
                <img src="./features_4.svg" alt="" />
                <h1  className={styles.title}>7 гектаров</h1>
                <p className={styles.paragraph}>приватного парка для жителей ЖК</p>
            </span>
        </div>
        </div>
    )
}

export default BottomLeft