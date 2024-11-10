import LeftTopImg from "./Left-Top-Img/LeftTopImg"
import RigthTopImg from "./Rigth-Top-Img/RigthTopImg"
import BottomLeft from "./Bottom-Left/BottomLeft"
import BottomRigth from "./Bottm-Rigth/BottomRigth"
import styles from "./MainImg.module.css"



const MainImg = () => {
    return (
        <section className={styles.sectionContainer}>
            <LeftTopImg />
            <RigthTopImg />
            <BottomLeft />
            <BottomRigth />
        </section>
    )
}

export default MainImg