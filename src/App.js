import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="header center">
          <div className="logo">
            <a href="">
              <img className="img-logo" src="./img/ОскарСвг2.svg" alt="" />
            </a>
          </div>
          <div className="menu">
            <a className="link-menu" href="">
              <p className="menu_text">УСЛУГИ</p>
            </a>
            <a className="link-menu" href="">
              <p className="menu_text">АКЦИИ</p>
            </a>
            <a className="link-menu" href="">
              <p className="menu_text">ВРАЧИ</p>
            </a>
            <a className="link-menu" href="">
              <p className="menu_text">КОНТАКТЫ</p>
            </a>
            <a className="link-menu" href="">
              <p className="menu_text">СТАТЬИ</p>
            </a>
            <div className="menu-contact">
              <a className="link-menu" href="tel:+79088008080">
                +7 908 800 80 80
              </a>
              <p className="menu-mode">Режим работы: 9:00-21:00</p>
            </div>
          </div>
        </div>

        <div className="adaptivSlayder">
          <input type="radio" name="kadoves" id="slaid1" checked />

          <input type="radio" name="kadoves" id="slaid2" />

          <input type="radio" name="kadoves" id="slaid3" />

          <div className="kadoves">
            <label for="slaid1"></label>

            <label for="slaid2"></label>

            <label for="slaid3"></label>
          </div>

          <div className="adaptivSlayderlasekun">
            <div className="abusteku-deagulus">
              <img src="./img/фото1.jpeg" />

              <img src="./img/фото2.jpeg" />

              <img src="./img/фото3.jpeg" />
            </div>
          </div>
        </div>
        <div className="widgets center">
          <div className="yamap">
            <a
              href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Санкт‑Петербург
            </a>
            <a
              href="https://yandex.ru/maps/2/saint-petersburg/house/sverdlovskaya_naberezhnaya_62/Z0kYcgdoSkwCQFtjfXV0c35mYA==/?ll=30.408953%2C59.952640&utm_medium=mapframe&utm_source=maps&z=18.79"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Свердловская набережная, 62 — Яндекс Карты
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.408953%2C59.952640&mode=whatshere&whatshere%5Bpoint%5D=30.408399%2C59.952606&whatshere%5Bzoom%5D=17&z=18.79"
              width="560"
              height="400"
              frameborder="1"
              allowfullscreen="true"
              style={{ position: "relative" }}
            ></iframe>
          </div>
          <div className="contact-nav">
            <h1>Как нас найти</h1>
            <h2>Свердловская набережная 62</h2>
            <p>Ближайшие станции метро: Новочеркасская и Ладожская</p>
            <div className="menu-contact">
              <a className="link-menu" href="tel:+79088008080">
                +7 908 800 80 80
              </a>
              <p className="menu-mode">Режим работы: 9:00-21:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
