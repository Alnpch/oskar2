import NavBar from "../Features/Navigation/NavBar";
import Slider from "../Features/Slider/Slider";
import YandexMap from "../Features/YandexMap/YandexMap";
import "./App.css";
import images from "../Features/img/images";
import Footer from "../Features/Footer/Footer";
import Services from '../Features/Services/Services';
import Doctors from '../Features/Doctors/Doctors';
import Articles from '../Features/Articles/Articles';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </Slider>
      <Services />
      <Doctors />
      <Articles />
      <YandexMap />

      <Footer />
    </div>
  );
}

export default App;
