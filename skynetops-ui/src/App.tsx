import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Alerts from "./pages/Alerts";
import VMs from "./pages/VMs";
import APM from "./pages/APM";

function App() {
  const [page, setPage] = useState("overview");

  let content;
  if (page === "overview") content = <Overview />;
  else if (page === "alerts") content = <Alerts />;
  else if (page === "vms") content = <VMs />;
  else if (page === "apm") content = <APM />;

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onSelect={setPage} />

      {/* MAIN CONTENT WITH BLUE BACKGROUND */}
      <div
        style={{
          flex: 1,
          padding: 30,
          backgroundColor: "#e6f0ff", // ✅ BLUE BACKGROUND
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default App;
