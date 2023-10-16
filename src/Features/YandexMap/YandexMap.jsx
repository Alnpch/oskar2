import React from "react";
import { Map, Placemark, TrafficControl, YMaps } from "@pbe/react-yandex-maps";
import './YandexMap.css'

function YandexMap() {
  return (
    <div className="yandexmap">
      <YMaps
        query={{
          // ns: 'use-load-option',
          load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
        }}
      >
        <Map
          defaultState={{
            center: [59.952254, 30.408395],
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          width={560}
          height={400}
        >
          <Placemark
            defaultGeometry={[59.952254, 30.408395]}
            properties={{
              balloonContentBody: "Свердловская набережная, 62",
            }}
          />
          <TrafficControl />
        </Map>
      </YMaps>
      {/* <div className="widgets center">
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
          </div> */}
    </div>
  );
}

export default YandexMap;
