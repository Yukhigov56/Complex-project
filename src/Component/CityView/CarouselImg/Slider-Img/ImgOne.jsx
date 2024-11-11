import styles from  "../CarouselImg.module.css"
import img1 from '../../../../../public/img (1).svg'
const ImgOne = () => {
    return (
        <div className={styles.containerImg}><img className={styles.Img} src={img1} alt="" /></div>
    )
}
export default ImgOne