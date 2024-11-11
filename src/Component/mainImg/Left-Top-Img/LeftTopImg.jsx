import styles from "../GeneralImg.module.css"

import bg from '../../../../public/bg.svg'

const LeftTopImg = () => {
    return (
        <div>
            <span className={styles.leftTopImg}>
                <img src={bg} alt="" />
                <h1 className={styles.title}>20 гектаров</h1>
                <p className={styles.paragraph}>территории ЖК — это как полтора Зарядья</p>
            </span>
        </div>
    )
}

export default LeftTopImg