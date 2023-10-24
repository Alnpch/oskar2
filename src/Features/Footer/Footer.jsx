import React from "react";
import "./Footer.css";
import logo from "../img/ОскарСвг2.svg";
import instagram from "../img/instagram.svg";
import whatsapp from "../img/whatsapp.svg";
function Footer() {
  return (
    <footer className="footer">
      <a href="">
        <img className="logo__img-foot" src={logo} alt="Оскар Гранд" />
      </a>
      <div className="footer__contact">
        <a className="footer__tel" href="tel:+79088008080">
          +7 908 800 80 80
        </a>
        <p className="footer__time">Режим работы: 9:00-21:00</p>
        <div className="footer__about">
          <h2 className="heading-foot">Свердловская набережная, 62</h2>
        </div>
        <div className="foot-link">
          <a href="">
            <img className="logo__img-foot-link" src={instagram} alt="инст" />
          </a>
          <a href="">
            <img className="logo__img-foot-link" src={whatsapp} alt="вотс" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
