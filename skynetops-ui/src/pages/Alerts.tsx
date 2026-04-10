import { useEffect, useState } from "react";

const API_BASE = "/api";

type Alert = {
  severity: string;
  message: string;
  resource: string;
  status: string;
};

export default function Alerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/alerts`)
      .then(res => res.json())
      .then(data => {
        setAlerts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading alerts...</p>;

  return (
    <div>
      <h1>Alerts</h1>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Severity</th>
            <th style={th}>Message</th>
            <th style={th}>Resource</th>
            <th style={th}>Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((a, i) => (
            <tr key={i}>
              <td style={td}>{a.severity}</td>
              <td style={td}>{a.message}</td>
              <td style={td}>{a.resource}</td>
              <td style={td}>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = { borderBottom: "1px solid #ddd", padding: 10 };
const td = { borderBottom: "1px solid #eee", padding: 10 };