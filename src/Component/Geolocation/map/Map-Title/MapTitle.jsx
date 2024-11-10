import styles from "./MapTitle.module.css"

const MapTitle = () => {
    return (
        <div className={styles.blockTitle}>
            <p className={styles.paragraph}>Престижное расположение</p>
            <h1 className={styles.title}>Один из самых зелёных районов столицы — Раменки</h1>
        </div>
    )
}

export default MapTitle