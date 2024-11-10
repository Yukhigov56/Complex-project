import Map from "./map/Map"
import MapTitle from "./map/Map-Title/MapTitle"
import MapParagraph from "./map/Map-Title/MapParagraph/MapParagraph"
import styles from "./Geolocation.module.css"


const Geolocation = () => {
    return (
        <section className={styles.sectonGeolocation}>
            <MapTitle />
            <Map />
            <MapParagraph />
        </section>
    )
}

export default Geolocation