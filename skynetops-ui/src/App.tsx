import { useEffect, useState } from "react";

const API_BASE =
  "https://skynetops-stage1-ace5fq3dzbzbyev.swedencentral-01.azurewebsites.net/api";

function App() {
  const [status, setStatus] = useState("Checking backend...");
  const [pingResult, setPingResult] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then(() => setStatus("✅ SkynetOps Backend is UP"))
      .catch(() => setStatus("❌ SkynetOps Backend is DOWN"));
  }, []);

  const pingBackend = () => {
    setPingResult("Pinging...");
    fetch(`${API_BASE}/ping`)
      .then(res => res.text())
      .then(text => setPingResult(`✅ Ping response: ${text}`))
      .catch(() => setPingResult("❌ Ping failed"));
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>SkynetOps UI</h1>

      <p>Status: {status}</p>

      <button onClick={pingBackend}>
        Ping Backend
      </button>

      <p>{pingResult}</p>
    </div>
  );
}

export default App;