import React from "react";
import './Footer.css'

function Footer() {

  const margin = {
    margin: '5px 0px'
  }

  return (
    <footer className="footer">
        <div className="footer__about">
      <h1 style={margin}>Как нас найти:</h1>
      <h2 style={margin}>Свердловская набережная, 62</h2>
      <p style={margin}>Ближайшие станции метро: Новочеркасская и Ладожская</p>
        </div>
      <div className="footer__contact">
        <a className="footer__tel" href="tel:+79088008080">
          +7 908 800 80 80
        </a>
        <p className="footer__time">Режим работы: 9:00-21:00</p>
      </div>
    </footer>
  );
}

export default Footer;
