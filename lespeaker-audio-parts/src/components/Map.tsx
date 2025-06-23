"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Corrige o problema do ícone padrão do Leaflet com Webpack
const icon = L.icon({ 
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png", 
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

export default function Map() {
  const position: [number, number] = [-23.5505, -46.6333]; // Posição de exemplo: São Paulo

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={icon}>
        <Popup>
          Lespeaker Áudio Part's <br /> Estamos aqui!
        </Popup>
      </Marker>
    </MapContainer>
  );
} 