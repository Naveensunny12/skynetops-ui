export default function Sidebar({
  onSelect,
}: {
  onSelect: (page: string) => void;
}) {
  return (
    <div
      style={{
        width: 200,
        background: "#f3f4f6",
        padding: 20,
        height: "100vh",
      }}
    >
      <h3>SkynetOps</h3>

      <button onClick={() => onSelect("overview")}>Overview</button>
      <br /><br />
      <button onClick={() => onSelect("alerts")}>Alerts</button>
      <br /><br />
      <button onClick={() => onSelect("vms")}>VMs</button>
      <br /><br />
      <button onClick={() => onSelect("apm")}>APM</button>
    </div>
  );
}
