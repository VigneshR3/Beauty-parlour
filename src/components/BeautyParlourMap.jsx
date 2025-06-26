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
     <div style={{ width: "100%", height: "400px", borderRadius: "15px", overflow: "hidden" }}>
    <iframe
      src="https://www.google.com/maps?q=9.880722,78.068944&z=15&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Beauty Parlour Location"
    ></iframe>
  </div>
  );
}


export default BeautyParlourMap;
