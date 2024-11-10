import style from "./RecordUser.module.css"

import LeftBlock from "./Left-Block/LeftBlock"
import Img from "./Rigth-Block/Img"
const RecordUser = () => {
    return (
        <div className={style.container}>
            <LeftBlock />
            <Img />
        </div>
    )
}

export default RecordUser