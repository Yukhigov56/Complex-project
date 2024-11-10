import Header from "./Component/Header/Header"
import TitleSection from "./Component/Title/TitleSection"
import MainImg from "./Component/mainImg/mainImg"
import Geolocation from "./Component/Geolocation/Geolocation"
import CityViev from "./Component/CityView/CityViev"
import RecordUser from "./Component/Record/RecordUser"
import RiverLine from "./Component/River-Line/RiverLine"
import MapApartment from "./Component/Map-Apartment/MapApartment"
import RoutingMain from "./Component/Routing-Section/RoutingMain"

function App() {

  return (
    <div>
      <Header />
      <TitleSection />
      <MainImg />
      <Geolocation />
      <CityViev />
      <RecordUser />
      <RiverLine />
      <MapApartment />
      <RoutingMain />
    </div>
  )
}

export default App
