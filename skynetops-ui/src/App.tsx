import { useEffect, useState } from "react";

const API_BASE ="/api";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const [pingStatus, setPingStatus] = useState("");

  // Health check (runs automatically)
  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then(() => setBackendStatus("✅ Backend UP"))
      .catch(() => setBackendStatus("❌ Backend DOWN"));
  }, []);

  // Ping button
  const pingBackend = () => {
    setPingStatus("Pinging...");
    fetch(`${API_BASE}/ping`)
      .then(res => res.text())
      .then(text => setPingStatus(`✅ Ping response: ${text}`))
      .catch(() => setPingStatus("❌ Ping failed"));
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>SkynetOps – Overview</h1>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 20,
          marginBottom: 20,
          borderRadius: 8,
        }}
      >
        <h2>System Health</h2>
        <p>Status: {backendStatus}</p>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <h2>Connectivity Test</h2>
        <button onClick={pingBackend}>Ping Backend</button>
        <p>{pingStatus}</p>
      </div>
    </div>
  );
}

export default App;