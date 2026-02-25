import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import ScanUpload from "./pages/ScanUpload/ScanUpload";
import Result from "./pages/Result/Result";
import Records from "./pages/Records/Records";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="scan-upload" element={<ScanUpload />} />
          <Route path="result" element={<Result />} />
          <Route path="records" element={<Records />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
