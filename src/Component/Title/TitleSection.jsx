import TitleLogo from "./Title-Logo/TitleLogo"
import TitleImg from "./Title-Text/TitleImg"
import TitleText from "./Title-Text/TitleText"
import styles from "./Title.module.css"

const TitleSection = () => {
    return (
        <div className={styles.titleContainer}>
            <TitleLogo />
            <TitleText />
            <TitleImg />
        </div>
    )
}

export default TitleSection