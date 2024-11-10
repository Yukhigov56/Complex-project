import TitleRiverLine from "./Title-River-Line/TitleRiverLine"
import style from "./RiverLine.module.css"
import CarouselImg from "./Carousel-Img/CarouselImg"

const RiverLine = () => {
    return (
        <section className={style.sectionCarousel}>
            <TitleRiverLine />
            <CarouselImg />
        </section>
    )
}

export default RiverLine