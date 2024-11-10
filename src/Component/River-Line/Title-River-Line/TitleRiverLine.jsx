import style from './TitleRiverLine.module.css'

const TitleRiverLine = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>River Line</h1>
            <div className={style.containerButton}>
            <p className={style.paragraph}>Восемь жилых корпусов по 12-14 этажей выстроенны вдоль реки Раменки</p>
            <button className={style.button}>Посмотреть планировки</button>
            </div>
        </div>
    )
}

export default TitleRiverLine