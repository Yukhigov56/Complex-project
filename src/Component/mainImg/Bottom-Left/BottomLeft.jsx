import styles from "../GeneralImg.module.css"

import features4 from '../../../../public/features_4.svg'

const BottomLeft = () => {
    return (
        <div>
            <div>
            <span className={styles.leftTopImg}>
                <img src={features4} alt="" />
                <h1  className={styles.title}>7 гектаров</h1>
                <p className={styles.paragraph}>приватного парка для жителей ЖК</p>
            </span>
        </div>
        </div>
    )
}

export default BottomLeft