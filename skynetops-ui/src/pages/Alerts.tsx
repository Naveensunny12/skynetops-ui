import { useEffect, useState } from "react";
const API_BASE = "/api";

export default function Alerts() {
  const [alerts, setAlerts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/alerts`)
      .then(r => r.json())
      .then(setAlerts);
  }, []);

  return (
    <div>
      <h1>Alerts</h1>
      {alerts.map((a, i) => (
        <div key={i} style={card}>
          🔔 <b>{a.severity}</b> – {a.message} ({a.resource})
        </div>
      ))}
    </div>
  );
}

const card = {
  background: "white",
  padding: 15,
  marginBottom: 10,
  borderRadius: 6,
};