import HeaderLogo from "./Header-left-logo/HeaderLogo"
import PhoneNumber from "./Header-right/PhoneNumber"
import styles from "./Header.module.css"


const Header = () => {
    return (
        <div className={styles.container}>
            <HeaderLogo />
            <PhoneNumber />
        </div>
    )
}

export default Header