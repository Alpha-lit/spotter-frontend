import React, { useState } from "react";
import axios from "axios";

const TripForm = ({ onDataReceived }) => {
  const [form, setForm] = useState({
    current_location: "",
    pickup_location: "",
    dropoff_location: "",
    cycle_hours_used: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://project-spotter.onrender.com/api/trip/", form);
    onDataReceived(res.data);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Trip Details</h2>
      <input name="current_location" placeholder="Current Location" onChange={handleChange} required />
      <input name="pickup_location" placeholder="Pickup Location" onChange={handleChange} required />
      <input name="dropoff_location" placeholder="Dropoff Location" onChange={handleChange} required />
      <input type="number" name="cycle_hours_used" placeholder="Hours Used" onChange={handleChange} required />
      <button type="submit">Submit Trip</button>
    </form>
  );
};

export default TripForm;
