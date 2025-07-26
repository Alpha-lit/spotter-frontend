import React, { useEffect, useRef } from "react";

const LogSheet = ({ logs }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw 24-hour grid
    ctx.font = "12px Arial";
    for (let i = 0; i <= 24; i++) {
      const x = 50 + i * 20;
      ctx.beginPath();
      ctx.moveTo(x, 20);
      ctx.lineTo(x, 300);
      ctx.strokeStyle = "#ddd";
      ctx.stroke();
      ctx.fillStyle = "black";
      ctx.fillText(i.toString(), x - 3, 15);
    }

    // Draw logs
    logs.forEach((hrs, index) => {
      const y = 40 + index * 60;
      const x = 50; // start of the time line

      ctx.fillStyle = "black";
      ctx.fillText(`Day ${index + 1}: ${hrs} hrs`, 10, y + 15);

      ctx.fillStyle = "#4CAF50"; // green block
      ctx.fillRect(x, y, hrs * 20, 30);

      ctx.strokeStyle = "black";
      ctx.strokeRect(x, y, hrs * 20, 30);
    });
  }, [logs]);

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h3>ELD Daily Log</h3>
      <canvas ref={canvasRef} width={600} height={logs.length * 70 + 50} style={{ border: "1px solid #ccc" }} />
    </div>
  );
};

export default LogSheet;
