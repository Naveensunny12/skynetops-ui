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
    <div style={{ display: "flex" }}>
      <Sidebar onSelect={setPage} />
      <div style={{ padding: 30, flex: 1 }}>{content}</div>
    </div>
  );
}

export default App;
