import React, { useState } from "react";
import TripForm from "./components/TripForm";
import MapView from "./components/MapView";
import LogSheet from "./components/LogSheet";

function App() {
  const [tripData, setTripData] = useState(null);

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "#1e3a8a", color: "white", padding: "20px", textAlign: "center" }}>
        <h1 style={{ margin: 0 }}>🚚 Spotter AI - Trip Planner</h1>
      </header>

      <main style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <TripForm onDataReceived={setTripData} />

        {tripData && (
          <>
            <MapView route={tripData.route} rests={tripData.rests || []} />
            <LogSheet logs={tripData.logs} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;