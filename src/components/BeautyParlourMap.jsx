import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from '../../node_modules/leaflet/dist/images/marker-icon-2x.png'
import iconPng from '../../node_modules/leaflet/dist/images/marker-icon.png'
import shadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
// Leaflet marker icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:  iconUrl,
  iconUrl:  iconPng,
  shadowUrl: shadow,
});

// Replace these with your parlour's exact coordinates
const parlourLocation = { lat: 9.880722, lng:78.068944 };

function BeautyParlourMap() {
  return (
    <MapContainer
      center={parlourLocation}
      zoom={15}
      style={{ height: '400px', width: '100%', borderRadius:15 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={parlourLocation}>
        <Popup>💇‍♀️ Beauty Parlour<br />Visit us here!</Popup>
      </Marker>
    </MapContainer>
  );
}


export default BeautyParlourMap;
