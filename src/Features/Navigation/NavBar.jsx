import React from "react";
import logo from "../img/ОскарСвг2.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="navbar">
      <a href="">
        <img className="logo__img" src={logo} alt="Оскар Гранд" />
      </a>
      <div className="menu">
        <div className="links">
          <a className="menu__link" href="">
            УСЛУГИ
          </a>
          <a className="menu__link" href="">
            АКЦИИ
          </a>
          <a className="menu__link" href="">
            ВРАЧИ
          </a>
          <a className="menu__link" href="">
            СТАТЬИ
          </a>
          <a className="menu__link" href="">
            КОНТАКТЫ
          </a>
        </div>
        <div className="menu-contact">
          <a className="menu__tel" href="tel:+79088008080">
            +7 908 800 80 80
          </a>
          <p className="menu__time">Режим работы: 9:00-21:00</p>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
