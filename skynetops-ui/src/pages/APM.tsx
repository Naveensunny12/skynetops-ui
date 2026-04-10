import { useEffect, useState } from "react";

const API_BASE = "/api";

export default function APM() {
  const [apm, setApm] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_BASE}/apm`)
      .then(res => res.json())
      .then(setApm);
  }, []);

  if (!apm) return <p>Loading APM...</p>;

  return (
    <div>
      <h1>APM</h1>

      <div style={card}>Latency: {apm.latency_ms} ms</div>
      <div style={card}>Error rate: {apm.error_rate}%</div>
      <div style={card}>Throughput: {apm.throughput_rpm} rpm</div>
    </div>
  );
}

const card = {
  background: "white",
  padding: 20,
  marginBottom: 15,
  borderRadius: 6,
};