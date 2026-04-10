import { useEffect, useState } from "react";

const API_BASE = "/api";

export default function VMs() {
  const [vms, setVMs] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_BASE}/vms`)
      .then(res => res.json())
      .then(setVMs);
  }, []);

  return (
    <div>
      <h1>Virtual Machines</h1>

      {vms.map((vm, i) => (
        <div key={i} style={card}>
          <b>{vm.name}</b>
          <br />
          Size: {vm.vmSize}
          <br />
          OS: {vm.osType}
          <br />
          Location: {vm.location}
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