import { useEffect, useState } from "react";

const API_BASE = "/api";

export default function Overview() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [pingStatus, setPingStatus] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then(() => setBackendStatus("✅ Backend UP"))
      .catch(() => setBackendStatus("❌ Backend DOWN"));
  }, []);

  const pingBackend = () => {
    setPingStatus("Pinging...");
    fetch(`${API_BASE}/ping`)
      .then(res => res.text())
      .then(text => setPingStatus(`✅ Ping: ${text}`))
      .catch(() => setPingStatus("❌ Ping failed"));
  };

  return (
    <div>
      <h1>Overview</h1>

      <div style={card}>
        <h3>System Health</h3>
        <p>{backendStatus}</p>
      </div>

      <div style={card}>
        <h3>Connectivity</h3>
        <button onClick={pingBackend}>Ping Backend</button>
        <p>{pingStatus}</p>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: 20,
  marginBottom: 20,
  borderRadius: 8,
};