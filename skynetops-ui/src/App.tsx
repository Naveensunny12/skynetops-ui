import { useEffect, useState } from "react";

const API_BASE =
  "hhttps://skynetops-stage1-ace5fgc3dzbzbyev.swedencentral-01.azurewebsites.net/api";

function App() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch(`${API_BASE}/health`)
      .then(() => setStatus("✅ SkynetOps Backend is UP"))
      .catch(() => setStatus("❌ SkynetOps Backend is DOWN"));
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>SkynetOps UI</h1>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;