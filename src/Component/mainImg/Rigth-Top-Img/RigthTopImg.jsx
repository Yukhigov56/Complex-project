import styles from "../GeneralImg.module.css"


const RigthTopImg = () => {
    return (
        <div>
            <span className={styles.leftTopImg}>
                <img src="./topRigth.svg" alt="" />
                <h1  className={styles.title}>15 корпусов</h1>
                <p className={styles.paragraph}>по 12-14 этажей, просторная застройка</p>
            </span>
        </div>
    )
}

export default RigthTopImg