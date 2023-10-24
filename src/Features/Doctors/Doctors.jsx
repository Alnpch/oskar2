import React from "react";
import doc from "../img/doc.jpeg";
import "./Doctors.css";
export default function Doctors() {
  return (
    <div className="doc-block">
      <h2 className="heading-doc">Врачи</h2>
      <div className="doctors-box">
        <img className="doc_img" src={doc} alt="фото врача" />
        <div className="doctor">
          <h2 className="doctors-name">Мартиросян Армине Меружановна</h2>
          <h3 className="doctors-pro">Cпециализация</h3>
          <p className="doctors-pro-name">
            Ортодонт, Стоматолог-хирург-имплантолог
          </p>
        </div>
      </div>
    </div>
  );
}
