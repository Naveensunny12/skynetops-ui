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
      .then(text => setPingStatus(`✅ Ping response: ${text}`))
      .catch(() => setPingStatus("❌ Ping failed"));
  };

  return (
    <div>
      <h1>Overview</h1>

      <div style={{ border: "1px solid #ddd", padding: 20, marginBottom: 20 }}>
        <h3>System Health</h3>
        <p>Status: {backendStatus}</p>
      </div>

      <div style={{ border: "1px solid #ddd", padding: 20 }}>
        <h3>Connectivity Test</h3>
        <button onClick={pingBackend}>Ping Backend</button>
        <p>{pingStatus}</p>
      </div>
    </div>
  );
}