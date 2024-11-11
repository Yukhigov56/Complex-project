import styles from "../CarouselImg.module.css";
import img3 from '../../../../../public/img (3).svg'
const ImgThree = () => {
  return (
    <div className={styles.containerImg}>
      <img className={styles.Img} src={img3} alt="" />
    </div>
  );
};

export default ImgThree;
