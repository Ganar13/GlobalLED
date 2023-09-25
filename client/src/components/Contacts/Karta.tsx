import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import './css/index.css'

export default function Karta() {
  const defaultState = {
    center: [55.934954, 37.28737],
    zoom: 12.5,
  };

  return (
    <div>
      <YMaps>
        <Map defaultState={defaultState} className="maps">
          <Placemark geometry={[55.934954, 37.28737]} />
        </Map>
      </YMaps>
    </div>
  );
}
