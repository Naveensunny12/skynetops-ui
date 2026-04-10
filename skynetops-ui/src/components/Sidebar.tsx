export default function Sidebar({
  onSelect,
}: {
  onSelect: (page: string) => void;
}) {
  return (
    <div
      style={{
        width: 220,
        backgroundColor: "#1e3a8a",
        color: "white",
        padding: 20,
        height: "100vh",
      }}
    >
      <h2>SkynetOps</h2>

      <button style={btn} onClick={() => onSelect("overview")}>
        Overview
      </button>

      <button style={btn} onClick={() => onSelect("alerts")}>
        Alerts
      </button>

      <button style={btn} onClick={() => onSelect("vms")}>
        VMs
      </button>

      <button style={btn} onClick={() => onSelect("apm")}>
        APM
      </button>
    </div>
  );
}

const btn = {
  width: "100%",
  padding: 10,
  marginTop: 10,
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  cursor: "pointer",
};
