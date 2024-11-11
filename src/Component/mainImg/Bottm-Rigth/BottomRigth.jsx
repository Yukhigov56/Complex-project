import styles from "../GeneralImg.module.css"

import features from '../../../../public/features_3.svg'


const BottomRigth = () => {
    return (
        <div>
            <div>
            <span className={styles.leftTopImg}>
                <img src={features} alt="" />
                <h1  className={styles.title}>2 километра</h1>
                <p className={styles.paragraph}>набережной реки Раменка вдоль ЖК</p>
            </span>
        </div>
        </div>
    )
}

export default BottomRigth