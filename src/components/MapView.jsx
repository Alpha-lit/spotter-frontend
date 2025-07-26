import React from "react";
import { MapContainer, TileLayer, Marker, Polyline, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ route = [], rests = [] }) => {
  const dummyCoords = {
    Nairobi: [-1.286389, 36.817223],
    Mombasa: [-4.0435, 39.6682],
    Kampala: [0.3476, 32.5825],
    "Rest Stop A": [-1.5, 37.0],
    "Fuel Stop B": [-2.0, 36.8],
  };

  const routePositions = route.map((city) => dummyCoords[city] || [0, 0]);
  const restMarkers = rests.map((stop, idx) => (
    <Marker key={`rest-${idx}`} position={[stop.lat, stop.lng]}>
      <Popup>{stop.name}</Popup>
    </Marker>
  ));

  return (
    <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
      <h3 style={{ color: "#1e3a8a", textAlign: "center" }}>Trip Route Map</h3>
      <div style={{ height: "400px" }}>
        {routePositions.length > 0 ? (
          <MapContainer center={routePositions[0]} zoom={6} style={{ height: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {routePositions.map((pos, idx) => (
              <Marker key={`route-${idx}`} position={pos}>
                <Popup>{route[idx]}</Popup>
              </Marker>
            ))}
            {restMarkers}
            <Polyline positions={routePositions} color="blue" />
          </MapContainer>
        ) : (
          <p>Loading map data...</p>
        )}
      </div>
    </div>
  );
};

export default MapView;